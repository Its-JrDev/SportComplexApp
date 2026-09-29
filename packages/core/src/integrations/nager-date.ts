import ky from "ky";

// Cliente Nager.Date CO con timeout 2.5s + fallback a HolidayCache (ARCHITECTURE §9.4)
const BASE = process.env.NAGER_DATE_BASE_URL ?? "https://date.nager.at/api/v3";

export interface NagerHoliday {
  date: string; // YYYY-MM-DD
  localName: string;
  name: string;
}

export async function fetchColombiaHolidays(year: number): Promise<NagerHoliday[]> {
  return ky.get(`${BASE}/PublicHolidays/${year}/CO`, { timeout: 2500 }).json<NagerHoliday[]>();
}

export function isDateHoliday(dateISO: string, holidays: NagerHoliday[]): boolean {
  return holidays.some((h) => h.date === dateISO);
}
