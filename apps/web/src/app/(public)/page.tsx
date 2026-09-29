// SSG puro — RF-00 Landing institucional. LCP < 1.5s, sin CPU por petición.
export const dynamic = "force-static";

export default function LandingPage() {
  return (
    <section>
      <h1>Complejo Deportivo SportComplex</h1>
      <p>Canchas · Piscinas · Gimnasio · Zona húmeda (sauna y turco).</p>
      <p>
        <a href="/login">Iniciar sesión</a> · <a href="/register">Registrarse</a>
      </p>
      <ul>
        <li>Modelo 100% cashless (Stripe, cero efectivo) — RN-13</li>
        <li>Comprobantes PDF con QR — RN-14 / RNF-05</li>
        <li>Ventana 15 días · TTL checkout 15 min · Mantenimiento piscinas lunes (Nager.Date)</li>
      </ul>
    </section>
  );
}
