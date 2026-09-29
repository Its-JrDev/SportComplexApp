import { z } from "zod";

// RF-13/RF-14 — lectura QR + turno
export const accessScanSchema = z.object({
  ticketId: z.uuid(),
  signature: z.string().min(32),
  postServiceId: z.uuid().nullable(), // null = modo consulta
});

export type AccessScan = z.infer<typeof accessScanSchema>;
