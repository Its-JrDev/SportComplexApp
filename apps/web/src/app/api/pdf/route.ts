import { fail } from "@/lib/api-response";

// RNF-05 — comprobante PDF con QR centrado (plantilla @sportcomplex/ui ticket-receipt)
export async function GET() {
  return fail("NOT_IMPLEMENTED", "Emisión PDF pendiente (feature/pdf-receipt-simulation)", 501);
}
