import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SportComplex — Reservas y Acceso Deportivo",
  description: "Landing institucional, reservas cashless Stripe, QR y control de acceso.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
