import { z } from "zod";

// RF-05/RF-08 — ventana y bloqueo validados también en API (defensa en borde)
export const bookingRequestSchema = z.object({
  serviceId: z.uuid(),
  startTime: z.iso.datetime(),
  endTime: z.iso.datetime(),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
