// SSR con streaming — /portal/history, membresías (ARCHITECTURE §4.2)
import { Suspense } from "react";

export default function PortalPage() {
  return (
    <main>
      <h1>Portal del cliente</h1>
      <Suspense fallback={<p>Cargando reservas…</p>}>
        <p>Reservas activas / historial / canceladas (RF-12).</p>
      </Suspense>
      <p>
        <a href="/portal/book">Reservar</a> · <a href="/portal/tickets">Billetera QR/PDF</a>
      </p>
    </main>
  );
}
