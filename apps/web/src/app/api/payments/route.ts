import { fail } from "@/lib/api-response";

// RF-09 / RF-16 / RF-17 — Stripe webhook con firma + idempotencia
export async function POST() {
  return fail("NOT_IMPLEMENTED", "Webhook Stripe pendiente (feature/pos-stripe-cashless)", 501);
}
