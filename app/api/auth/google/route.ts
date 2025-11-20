import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code } = body;

    return NextResponse.json({
      message: "Backend OAuth endpoint reached.",
      received_code: code || null,
      next_step:
        "Google token exchange not yet implemented. This endpoint is a scaffold.",
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Invalid request format.",
        details: err?.message || null,
      },
      { status: 400 }
    );
  }
}
