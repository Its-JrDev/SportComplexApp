import { fail } from "@/lib/api-response";

export async function POST() {
  return fail("NOT_IMPLEMENTED", "Auth callback pendiente (feature/auth-provider-email)", 501);
}
