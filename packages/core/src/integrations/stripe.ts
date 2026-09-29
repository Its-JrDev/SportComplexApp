// Cashless Engine — Stripe intenciones + suscripciones (RF-09/RF-16/RF-17).
// Sin efectivo (RN-13). Webhook verifica firma + idempotencia por event id.

export const STRIPE_CURRENCY = "cop" as const;

export function buildPaymentMetadata(opts: { bookingId: string; userId: string }) {
  return { bookingId: opts.bookingId, userId: opts.userId, cashless: "true" };
}
