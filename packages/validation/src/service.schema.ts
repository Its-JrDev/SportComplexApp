import { z } from "zod";

// RF-03/RF-04 — catálogo
export const serviceSchema = z.object({
  name: z.string().min(2),
  categoryId: z.uuid(),
  capacity: z.number().int().positive(),
  isPool: z.boolean().default(false),
  modality: z.enum(["Publica", "Privada"]).optional(),
});

export type ServiceInput = z.infer<typeof serviceSchema>;
