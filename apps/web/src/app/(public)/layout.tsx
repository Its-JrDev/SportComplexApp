export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav aria-label="Principal">
          <a href="/">SportComplex</a> · <a href="/login">Iniciar sesión</a> ·{" "}
          <a href="/register">Registrarse</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <a href="/legal">Reglamentos</a> · Zona horaria America/Bogota (UTC-5)
      </footer>
    </>
  );
}
