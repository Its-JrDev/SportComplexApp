import Link from 'next/link'
import { Activity, ArrowRight, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 font-sans antialiased">
      {/* Barra de Navegación Pública Superior */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logotipo institucional */}
          <Link href="/" className="flex items-center gap-2.5 transition hover:opacity-90">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#bef264] text-neutral-950 shadow-sm">
              <Activity size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black tracking-tight text-neutral-900">
              SportComplex
            </span>
          </Link>

          {/* Enlaces de navegación */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600">
            <Link href="/" className="transition hover:text-neutral-950">
              Inicio
            </Link>
            <Link href="#servicios" className="transition hover:text-neutral-950">
              Servicios
            </Link>
            <Link href="#sedes" className="transition hover:text-neutral-950">
              Sedes
            </Link>
          </nav>

          {/* Botones de Acción de Autenticación */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-bold text-neutral-700 hover:text-neutral-950 px-3 py-2 transition"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 rounded-xl bg-[#bef264] px-4 py-2 text-xs font-bold text-neutral-950 shadow-sm transition hover:bg-[#aee74e] active:scale-[0.99]"
            >
              Acceso al complejo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido principal de la página */}
      <main className="flex-1">{children}</main>

      {/* Pie de página institucional */}
      <footer className="border-t border-neutral-100 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bef264] text-neutral-950">
                  <Activity size={18} strokeWidth={2.5} />
                </div>
                <span className="text-lg font-bold tracking-tight text-white">SportComplex</span>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-neutral-400">
                Plataforma integral de entrenamiento, reservas y bienestar deportivo. Canchas de pádel, tenis, fútbol, natación y zonas de acondicionamiento físico.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#bef264]">
                Instalaciones
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-neutral-400">
                <li className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#bef264]" /> Sede Poblado
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#bef264]" /> Sede Laureles
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#bef264]" /> Sede Envigado
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#bef264]">
                Atención y Soporte
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-neutral-400">
                <li className="flex items-center gap-2">
                  <Phone size={13} className="text-[#bef264]" /> +57 (604) 444-0000
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-[#bef264]" /> contacto@sportcomplex.com
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={13} className="text-[#bef264]" /> Protocolos de seguridad
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-900 pt-6 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} SportComplex. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}