import { z } from "zod";

// RF-01/RF-02 — credenciales y activación
export const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(72),
});

export const verifySchema = z.object({
  token: z.string().min(16),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type VerifyInput = z.infer<typeof verifySchema>;
