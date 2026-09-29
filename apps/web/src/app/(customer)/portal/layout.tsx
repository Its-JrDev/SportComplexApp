export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav aria-label="Portal cliente">
        <a href="/portal">Reservas</a> · <a href="/portal/history">Historial</a> ·{" "}
        <a href="/portal/membership">Membresía</a>
      </nav>
      {children}
    </>
  );
}
