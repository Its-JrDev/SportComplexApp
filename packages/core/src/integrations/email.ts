import ky from "ky";

/**
 * Parámetros del correo de verificación de cuenta.
 */
export interface VerificationCodeEmailParams {
  /** Destinatario del correo. */
  to: string;
  /** Nombre del usuario (personalización de plantilla). */
  nombre: string;
  /** Código de 6 dígitos en claro (solo existe en memoria del proceso). */
  code: string;
  /** Fecha de expiración del token (para mostrar "vence en X min"). */
  expiraEn: Date;
}

/**
 * Despacha el código de verificación al webhook n8n de correo (TSK-AU-01).
 *
 * Disparo no bloqueante — fallos no revierten DB (RN-12, ARCHITECTURE §9.4).
 * El proveedor real de correo lo implementa TSK-AU-01; este módulo es el seam.
 * Si `N8N_AUTH_EMAIL_WEBHOOK_URL` no está configurada, no hace nada.
 *
 * @param {VerificationCodeEmailParams} params - Destinatario, nombre, código y expiración.
 * @returns {Promise<void>} Se resuelve siempre; los fallos solo se registran.
 */
export async function sendVerificationCodeEmail(params: VerificationCodeEmailParams): Promise<void> {
  const url = process.env.N8N_AUTH_EMAIL_WEBHOOK_URL;
  if (!url) return;
  try {
    await ky.post(url, {
      json: {
        tipo: "verificacion_cuenta",
        email: params.to,
        nombre: params.nombre,
        codigo: params.code,
        expiraEn: params.expiraEn.toISOString(),
      },
      timeout: 2500,
      retry: 0,
    });
  } catch {
    // fire-and-forget: se registra en logs, el usuario puede reenviar
    console.warn("[email] verification code dispatch failed (non-blocking)");
  }
}
