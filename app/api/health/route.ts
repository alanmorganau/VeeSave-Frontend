export async function GET() {
  return Response.json({ status: "ok", route: "/api/health" });
}
