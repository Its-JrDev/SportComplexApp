// RNF-01: bloqueo transaccional SELECT ... FOR UPDATE para aforo/franja.
// Uso: dentro de $transaction, bloquear Slot/Booking antes de confirmar.
export const CONCURRENCY_NOTE = "Usar SELECT ... FOR UPDATE vía $queryRaw en bookings/availability.";
