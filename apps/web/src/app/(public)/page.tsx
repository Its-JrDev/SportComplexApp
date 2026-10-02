import Link from 'next/link'
import { ArrowRight, Shield, Zap, Sparkles, CheckCircle, Clock } from 'lucide-react'

// Categorías del complejo deportivo con soporte visual de imágenes
const categories = [
  {
    slug: 'canchas',
    name: 'Canchas Deportivas',
    description: 'Pádel panorámico, tenis en polvo de ladrillo y fútbol sintético.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    tag: 'Reserva completa',
  },
  {
    slug: 'piscinas',
    name: 'Piscinas y Nado',
    description: 'Carriles de nado libre y entrenamiento climatizado semiolímpico.',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80',
    tag: 'Por persona',
  },
  {
    slug: 'gimnasio',
    name: 'Gimnasio y Funcional',
    description: 'Zona de pesas, cardio de alto rendimiento y área de fuerza.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tag: 'Sesión guiada',
  },
  {
    slug: 'zona-humeda',
    name: 'Zona Húmeda y Relax',
    description: 'Sauna seco, baño turco y jacuzzi terapéutico para recuperación.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tag: 'Bienestar',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0d3b2e] py-20 text-white lg:py-28">
        {/* Decoración de fondo */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          <div className="h-[600px] w-[600px] rounded-full border border-white/20" />
          <div className="absolute h-[420px] w-[420px] rounded-full border border-white/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#bef264] backdrop-blur-sm">
              <Sparkles size={13} /> Tu complejo multideportivo
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
              El movimiento <br />
              cambia <span className="text-[#bef264]">todo.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-emerald-100/80 sm:text-lg">
              Reserva canchas profesionales, asegura tu carril de nado o entrena en nuestras zonas especializadas. Sin esperas y con acceso digital inmediato.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#bef264] px-6 py-3.5 text-sm font-bold text-neutral-950 shadow-sm transition hover:bg-[#aee74e] active:scale-[0.99]"
              >
                Comenzar ahora <ArrowRight size={16} />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Explorar instalaciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de beneficios rápidos */}
      <section className="border-b border-neutral-100 bg-neutral-50 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="rounded-lg bg-emerald-100 p-2 text-[#0d3b2e]">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Reserva 100% digital</p>
                <p className="text-[11px] text-neutral-500">Confirmación y tiquete QR instantáneo</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="rounded-lg bg-emerald-100 p-2 text-[#0d3b2e]">
                <Shield size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Acceso seguro con token</p>
                <p className="text-[11px] text-neutral-500">Control de lectura óptica por escáner</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="rounded-lg bg-emerald-100 p-2 text-[#0d3b2e]">
                <Zap size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Suscripción y membresías</p>
                <p className="text-[11px] text-neutral-500">30% de descuento en todos los servicios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vitrina de Categorías y Servicios */}
      <section id="servicios" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-700 block mb-1">
                INSTALACIONES Y DISCIPLINAS
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                Espacios listos para tu entrenamiento
              </h2>
            </div>
            <p className="mt-3 md:mt-0 max-w-md text-xs text-neutral-500">
              Selecciona una categoría para consultar las sedes, especificaciones y disponibilidad horaria.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-neutral-950/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {cat.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-emerald-700 transition">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <Link
                      href="/portal/book"
                      className="inline-flex w-full items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-emerald-700"
                    >
                      Reservar turno <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-neutral-50 py-16 border-t border-neutral-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-neutral-900 sm:text-3xl">
            ¿Listo para reservar tu próxima sesión?
          </h2>
          <p className="mt-3 text-xs text-neutral-500 max-w-md mx-auto">
            Crea tu cuenta en segundos o ingresa a tu portal de cliente para gestionar tus reservas y membresías.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/register"
              className="rounded-xl bg-[#bef264] px-6 py-3 text-xs font-bold text-neutral-950 shadow-sm transition hover:bg-[#aee74e]"
            >
              Crear cuenta gratis
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-neutral-300 bg-white px-6 py-3 text-xs font-bold text-neutral-800 transition hover:bg-neutral-100"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}