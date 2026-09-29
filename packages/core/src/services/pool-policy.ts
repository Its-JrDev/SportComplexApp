// RN-02: lunes mantenimiento; si lunes festivo (Nager.Date CO) → abre y traslada a martes.

export function isPoolMaintenanceDay(
  dateBogota: Date,
  isMondayHoliday: boolean,
): { blocked: boolean; reason?: "MANTENIMIENTO_LUNES" | "MANTENIMIENTO_TRASLADADO_MARTES" } {
  const day = dateBogota.getDay(); // 0 dom … 1 lun, 2 mar
  if (day === 1 && !isMondayHoliday) return { blocked: true, reason: "MANTENIMIENTO_LUNES" };
  if (day === 2 && isMondayHoliday) return { blocked: true, reason: "MANTENIMIENTO_TRASLADADO_MARTES" };
  return { blocked: false };
}
