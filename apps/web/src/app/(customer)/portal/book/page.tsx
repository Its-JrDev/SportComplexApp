"use client";

// CSR — Motor de reserva + checkout Stripe + TTL 15 min visible (RF-08, RF-09)
export default function BookPage() {
  return (
    <main>
      <h1>Reservar servicio</h1>
      <p>Ventana 15 días (RN-01) · Multirreserva (RN-07) · Descuento membresía 30% (RN-08).</p>
      {/* TODO(feature/booking-lock-ttl): selector franjas + timer TTL + Stripe Elements */}
    </main>
  );
}
