import { Suspense } from "react";

export default function AdminDashboardPage() {
  return (
    <main>
      <h1>Analítica gerencial (RF-21)</h1>
      <Suspense fallback={<p>Cargando métricas…</p>}>
        <p>Afluencia (USADO), transacciones, top servicios, recaudación Stripe, por categoría.</p>
      </Suspense>
    </main>
  );
}
