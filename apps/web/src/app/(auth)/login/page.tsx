"use client";

export default function LoginPage() {
  return (
    <main>
      <h1>Iniciar sesión</h1>
      {/* TODO(feature/auth-provider-email): form Zod + Google OAuth (RF-01) */}
      <form>
        <label>
          Correo <input name="email" type="email" required />
        </label>
        <label>
          Contraseña <input name="password" type="password" required />
        </label>
        <button type="submit">Entrar</button>
      </form>
      <button type="button">Continuar con Google</button>
    </main>
  );
}
