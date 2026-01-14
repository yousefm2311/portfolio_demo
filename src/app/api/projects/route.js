import { NextResponse } from "next/server";
import { createProject, getProjects } from "@/lib/projects";

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json({ ok: true, data: projects });
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const project = await createProject(payload);
    return NextResponse.json({ ok: true, data: project }, { status: 201 });
  } catch (error) {
    const message = error?.message || "unknown_error";
    const status = message === "slug_exists" ? 409 : 400;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
