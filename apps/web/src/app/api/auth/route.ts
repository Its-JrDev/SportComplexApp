import { ok, fail } from '@/lib/api-response'
import { prisma } from '@sportcomplex/db'
import { loginSchema } from '@sportcomplex/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 1. Validar el formato con el contrato Zod oficial
    const validation = loginSchema.safeParse(body)
    if (!validation.success) {
      return fail('VALIDATION_ERROR', validation.error.issues[0]?.message ?? 'Datos inválidos', 400)
    }

    const { email, password } = validation.data

    // 2. Buscar al usuario en la base de datos
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    })

    if (!user) {
      return fail('INVALID_CREDENTIALS', 'Credenciales incorrectas.', 401)
    }

    // 3. Comparar contraseña
    if (user.password !== password) {
      return fail('INVALID_CREDENTIALS', 'Credenciales incorrectas.', 401)
    }

    // 4. Responder con los datos del usuario para autorizar el acceso
    return ok({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role, // 'Cliente', 'Administrador', etc.
      },
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error en la conexión a la base de datos'
    return fail('INTERNAL_SERVER_ERROR', message, 500)
  }
}