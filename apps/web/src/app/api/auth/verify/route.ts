import { fail, ok } from "@/lib/api-response";
import { verifySchema } from "@sportcomplex/validation";
import { verifySecret, isTokenExpired } from "@sportcomplex/core";
import { prisma } from "@sportcomplex/db";
import { findLatestByUsuarioId, markUsed } from "@sportcomplex/db";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = verifySchema.safeParse(body);

  if (!parsed.success) {
    return fail("VALIDATION_ERROR", "Email y código de 6 dígitos requeridos", 400, parsed.error.flatten());
  }

  const { email, code } = parsed.data;

  const usuario = await prisma.usuario.findUnique({
    where: { correo: email },
  });

  if (!usuario) {
    return fail("NOT_FOUND", "Usuario no encontrado", 404);
  }

  if (usuario.estado === "ACTIVO") {
    return fail("ALREADY_VERIFIED", "La cuenta ya está activa", 400);
  }

  const latestToken = await findLatestByUsuarioId(usuario.id);

  if (!latestToken) {
    return fail("TOKEN_NOT_FOUND", "No hay token de verificación pendiente", 400);
  }

  if (isTokenExpired(latestToken.expiraEn)) {
    return fail("TOKEN_EXPIRED", "El código ha expirado (máximo 15 minutos)", 400);
  }

  const valid = await verifySecret(latestToken.tokenHash, code);

  if (!valid) {
    return fail("INVALID_CODE", "Código inválido", 401);
  }

  await markUsed(latestToken.id);
  await prisma.usuario.update({
    where: { id: usuario.id },
    data: { estado: "ACTIVO" },
  });

  return ok({
    message: "Cuenta verificada exitosamente",
  });
}