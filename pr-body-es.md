## Resumen

Implementa **TSK-BE-03** (SCRUM-95): Hashing Argon2id, token temporal de 6 dígitos y rate limiting de reenvío para activación de cuenta (HU-03 / RF-02).

### Cambios

#### Seguridad (`packages/core/src/security/`)
- **`token.ts`** (nuevo): utilidades de verificación
  - `generateVerificationCode()` — 6 dígitos CSPRNG
  - `hashSecret()` / `verifySecret()` — Argon2id (memoryCost=19456, timeCost=2, parallelism=1) equivalente a costo ≥ 12
  - `TOKEN_TTL_MS = 15min`, `RESEND_COOLDOWN_MS = 60s`
  - `isTokenExpired()` — rechaza códigos >15:01 min
  - `isResendAllowed()` — rate limit validado contra `creado_en`
- **`README.md`** (nuevo): docs de API, parámetros y ejemplos

#### Validación (`packages/validation/`)
- `auth.schema.ts`: `registerSchema` (email, password 8-72, nombre 1-120), `resendSchema` (email), `verifySchema` (email + código 6 dígitos regex)

#### Repositorio (`packages/db/src/repositories/`)
- **`verification-tokens.ts`** (nuevo): `createToken`, `findLatestByUsuarioId`, `markUsed` (soft invalidate con `usado_en`)
- **`README.md`** (nuevo): esquema, exports, patrones de uso, decisiones de diseño

#### API Routes (`apps/web/src/app/api/auth/`)
- **POST `/api/auth/register`**: crea Usuario `PENDIENTE` (password Argon2id, rol CLIENTE), genera código 6 dígitos, persiste **solo hash** con `expira_en = creado_en + 15min`
- **POST `/api/auth/resend`**: valida rate limit 60s contra `creado_en` (HTTP 429), invalida token anterior, emite nuevo
- **POST `/api/auth/verify`**: verifica hash vs código, rechaza expirados (15:01 min → 400) e inválidos (401), éxito → `usado_en` + usuario `ACTIVO`

#### Build configs (packages core, validation, db, ui)
- `tsconfig.json`: `declaration: true`, `outDir: "dist"`, `rootDir: "src"` para emitir `.d.ts`
- `package.json`: `main/types` apuntan a `dist/`, script `build` = `tsc`

#### Dependencias
- `@node-rs/argon2` añadido a `@sportcomplex/core` (pure TS, sin builds nativos)

### Criterios de aceptación (TSK-BE-03)
- ✅ Token nunca se persiste en claro
- ✅ Código de hace 15:01 min se rechaza
- ✅ Segundo reenvío dentro de 60s devuelve HTTP 429

### Verificación
Todos pasan:
- `pnpm lint` ✓
- `pnpm typecheck` ✓
- `pnpm build` ✓