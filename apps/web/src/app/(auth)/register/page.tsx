'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Activity, ArrowLeft, ArrowRight } from 'lucide-react'
import { roleHome, type Role } from '@sportcomplex/core'
import { registerSchema } from '@sportcomplex/validation'

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const result = registerSchema.safeParse({ name, email, password })
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Datos inválidos.')
      return
    }

    setLoading(true)
    try {
      const role: Role = 'Cliente'
      const nextParam = searchParams.get('next')
      const targetUrl =
        nextParam && nextParam.startsWith('/') && !nextParam.startsWith('//')
          ? nextParam
          : roleHome[role]

      router.push(targetUrl)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al registrar la cuenta.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-white font-sans antialiased text-neutral-900">
      {/* Columna lateral izquierda (Verde deportivo con ondas concéntricas de fondo) */}
      <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#0d3b2e] p-12 text-white lg:flex lg:p-16">
        <div className="z-10 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#bef264] text-neutral-950 shadow-sm">
            <Activity size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SportComplex</span>
        </div>

        <div className="z-10 my-auto py-10">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#bef264]">
            TU ESPACIO, TU MOMENTO
          </span>
          <h2 className="mt-4 text-5xl font-black leading-[1.1] tracking-tight text-white xl:text-6xl">
            El movimiento<br />cambia <span className="text-[#bef264]">todo.</span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-emerald-100/70 max-w-sm">
            Bienvenido a una comunidad que se mueve contigo.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[520px] w-[520px] rounded-full border border-white/5 opacity-40" />
          <div className="absolute h-[380px] w-[380px] rounded-full border border-white/10 opacity-30" />
          <div className="absolute h-[240px] w-[240px] rounded-full border border-white/10 opacity-20" />
          <Activity size={220} strokeWidth={0.8} className="text-[#bef264] opacity-20" />
        </div>

        <div className="z-10 text-xs italic text-emerald-200/50">
          “La mejor inversión es la que haces en ti.”
        </div>
      </aside>

      {/* Columna derecha: Formulario */}
      <main className="flex flex-1 items-center justify-center bg-white px-6 py-12 lg:px-20">
        <div className="w-full max-w-md">
          {/* Volver al inicio */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 transition hover:text-neutral-900"
            >
              <ArrowLeft size={14} /> Volver al inicio
            </Link>
          </div>

          {/* Encabezado */}
          <div className="mb-7">
            <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 block mb-1.5">
              EMPIEZA HOY
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Crea tu cuenta.
            </h1>
            <p className="mt-1.5 text-xs text-neutral-500">
              Un paso más cerca de tu próxima aventura.
            </p>
          </div>

          {/* Botón de Google */}
          <button
            type="button"
            onClick={() => alert('El registro con Google estará disponible próximamente.')}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white py-3 text-xs font-semibold text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.99]"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.14z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            Continuar con Google
          </button>

          {/* Divisor */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-100" />
            </div>
            <span className="relative bg-white px-3 text-[11px] text-neutral-400 font-medium">
              o con tu correo
            </span>
          </div>

          {error && (
            <div className="mb-4 rounded-xl border border-red-100 bg-red-50 p-3 text-xs text-red-600">
              {error}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-700">
                Nombre completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre y apellido"
                className="w-full rounded-xl border border-neutral-200 bg-[#f9fafb] px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-700">
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@correo.com"
                className="w-full rounded-xl border border-neutral-200 bg-[#f9fafb] px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-700">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full rounded-xl border border-neutral-200 bg-[#f9fafb] px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            {/* Botón principal Lima */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#bef264] py-3.5 text-sm font-bold text-neutral-950 shadow-sm transition hover:bg-[#aee74e] active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? 'Creando cuenta...' : 'Crear mi cuenta'} <ArrowRight size={16} />
            </button>
          </form>

          {/* Enlace al login */}
          <div className="mt-8 text-center text-xs text-neutral-500">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="font-bold text-neutral-950 hover:underline">
              Ingresar
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}