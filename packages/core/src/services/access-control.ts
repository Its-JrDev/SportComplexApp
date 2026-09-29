// RN-06 ventana [HoraInicio, HoraFin] + RN-05 ciclo EMITIDO→USADO + puesto/consulta (RF-13/RF-14)

export type AccessDecision =
  | { allowed: true; consume: boolean }
  | { allowed: false; code: "SERVICE_MISMATCH" | "WINDOW_EXPIRED" | "ALREADY_USED" | "INVALID_STATE" };

export function decideAccess(opts: {
  now: Date;
  start: Date;
  end: Date;
  ticketStatus: "EMITIDO" | "USADO";
  ticketServiceId: string;
  postServiceId: string | null; // null = modo consulta
}): AccessDecision {
  if (opts.postServiceId === null) {
    // Modo consulta: informativo, nunca consume (RN-05)
    return { allowed: true, consume: false };
  }
  if (opts.ticketServiceId !== opts.postServiceId) return { allowed: false, code: "SERVICE_MISMATCH" };
  if (opts.ticketStatus !== "EMITIDO") return { allowed: false, code: "ALREADY_USED" };
  if (opts.now < opts.start || opts.now > opts.end) return { allowed: false, code: "WINDOW_EXPIRED" };
  return { allowed: true, consume: true };
}
