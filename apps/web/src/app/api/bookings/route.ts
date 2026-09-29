import { fail } from "@/lib/api-response";

// RF-08 bloqueo TTL 15 min · RNF-01 SELECT FOR UPDATE · RN-01/RN-02/RN-07/RN-11
export async function GET() {
  return fail("NOT_IMPLEMENTED", "Disponibilidad pendiente (feature/booking-lock-ttl)", 501);
}

export async function POST() {
  return fail("NOT_IMPLEMENTED", "Bloqueo temporal pendiente (feature/booking-lock-ttl)", 501);
}
