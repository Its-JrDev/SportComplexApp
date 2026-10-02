# Integraciones Externas

## `email.ts` — Despacho de Código de Verificación (seam TSK-AU-01)

### Propósito
Enviar el código de 6 dígitos **en claro** al servicio de correo. Como el hash
Argon2id es irreversible, el código solo existe en memoria del proceso durante
la petición: debe despacharse antes de finalizar `register`/`resend`.

### Exportaciones
| Exportación | Descripción |
|-------------|-------------|
| `VerificationCodeEmailParams` | `{ to, nombre, code, expiraEn }` — contrato del payload. |
| `sendVerificationCodeEmail(params)` | POST no bloqueante a `N8N_AUTH_EMAIL_WEBHOOK_URL` (timeout 2.5 s, sin reintentos). |

### Payload del webhook
```json
{
  "tipo": "verificacion_cuenta",
  "email": "cliente@ejemplo.com",
  "nombre": "Ana",
  "codigo": "847291",
  "expiraEn": "2026-10-02T13:18:21.000Z"
}
```

### Comportamiento
- **Fire-and-forget** (RN-12, ARCHITECTURE §9.4): los fallos no revierten la DB;
  el usuario puede solicitar un reenvío. Solo se registra `console.warn`.
- Si `N8N_AUTH_EMAIL_WEBHOOK_URL` no está configurada (ej. entorno local), no hace nada.
- El proveedor real de correo (plantillas, SMTP/API) lo implementa **TSK-AU-01**;
  este módulo es el seam de envío.

### Uso
```typescript
import { sendVerificationCodeEmail } from "@sportcomplex/core";

// Después de persistir el hash del token:
await sendVerificationCodeEmail({ to: email, nombre, code, expiraEn });
```
