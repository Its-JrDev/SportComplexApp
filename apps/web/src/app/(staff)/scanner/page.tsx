"use client";

// CSR — Escáner móvil getUserMedia + html5-qrcode <400ms (RF-13, RF-14, RF-15)
export default function ScannerPage() {
  return (
    <main>
      <h1>Control de acceso móvil</h1>
      <p>Puesto por turno o modo consulta (sin consumo). Valida servicio + ventana [HoraInicio,HoraFin].</p>
      {/* TODO(feature/scanner-access-modes): selector puesto + decoder + botón Dar acceso */}
    </main>
  );
}
