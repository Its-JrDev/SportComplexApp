import { fail } from "@/lib/api-response";

// RF-13/RF-14/RF-15 — valida HMAC antes de DB, puesto/consulta, ventana horaria
export async function POST() {
  return fail("NOT_IMPLEMENTED", "Validación QR pendiente (feature/scanner-access-modes)", 501);
}
