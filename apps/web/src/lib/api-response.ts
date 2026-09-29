export function ok<T>(data: T) {
  return Response.json({ success: true, data, timestamp: new Date().toISOString() });
}

export function fail(code: string, message: string, status = 400, details?: unknown) {
  return Response.json(
    { success: false, error: { code, message, details }, timestamp: new Date().toISOString() },
    { status },
  );
}
