'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Activity, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { roleHome, type Role } from '@sportcomplex/core'
import { loginSchema } from '@sportcomplex/validation'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // 1. Validación en cliente con el contrato Zod oficial
    const validation = loginSchema.safeParse({ email, password })
    if (!validation.success) {
      setError(validation.error.issues[0]?.message ?? 'Por favor verifica los datos ingresados.')
      return
    }

    setLoading(true)
    try {
      // 2. Petición real al endpoint /api/auth conectado a la base de datos
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
      })

      const result = await res.json()

      // 3. Manejo de errores devueltos por el backend (credenciales incorrectas, etc.)
      if (!res.ok || !result.success) {
        setError(result.error?.message || 'Correo o contraseña incorrectos.')
        return
      }

      // 4. Redirección según el rol retornado desde la BD ('Cliente', 'Administrador', etc.)
      const role: Role = result.data.user.role
      const nextParam = searchParams.get('next')
      const targetUrl =
        nextParam && nextParam.startsWith('/') && !nextParam.startsWith('//')
          ? nextParam
          : roleHome[role]

      router.push(targetUrl)
      router.refresh()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al conectar con el servidor.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-white font-sans antialiased text-neutral-900">
      {/* Columna lateral izquierda (Verde deportivo con ondas concéntricas) */}
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
            Bienvenido a una comunidad que se mueve contigo. Gestiona tus reservas y bienestar en un solo lugar.
          </p>
        </div>

        {/* Ondas concéntricas de fondo */}
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

      {/* Columna derecha: Formulario de inicio de sesión */}
      <main className="flex flex-1 items-center justify-center bg-white px-6 py-12 lg:px-20">
        <div className="w-full max-w-md">
          {/* Volver */}
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
              QUÉ BUENO TENERTE DE VUELTA
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Ingresa a tu espacio.
            </h1>
            <p className="mt-1.5 text-xs text-neutral-500">
              Tu próximo momento de bienestar te espera.
            </p>
          </div>

          {/* Mensaje de Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-3.5 text-xs text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Correo electrónico
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@correo.com"
                className="w-full rounded-xl border border-neutral-200 bg-[#f9fafb] px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-neutral-700">
                  Contraseña
                </label>
                <Link
                  href="/verify"
                  className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full rounded-xl border border-neutral-200 bg-[#f9fafb] px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#bef264] py-3 text-sm font-bold text-neutral-950 shadow-sm transition hover:bg-[#aee74e] active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  Ingresar <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Enlace hacia el registro */}
          <div className="mt-8 text-center text-xs text-neutral-500">
            ¿Aún no tienes cuenta?{' '}
            <Link
              href="/register"
              className="font-bold text-neutral-950 hover:underline"
            >
              Regístrate aquí
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}