import { NextResponse } from "next/server";
import { deleteProject, getProjectBySlug, updateProject } from "@/lib/projects";

const resolveParams = async (params) =>
  typeof params?.then === "function" ? await params : params;

export async function GET(request, { params }) {
  const resolvedParams = await resolveParams(params);
  const slug = resolvedParams?.slug;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, data: project });
}

export async function PUT(request, { params }) {
  try {
    const resolvedParams = await resolveParams(params);
    const slug = resolvedParams?.slug;
    const payload = await request.json();
    const project = await updateProject(slug, payload);
    return NextResponse.json({ ok: true, data: project });
  } catch (error) {
    const message = error?.message || "unknown_error";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const resolvedParams = await resolveParams(params);
  const slug = resolvedParams?.slug;
  const removed = await deleteProject(slug);
  if (!removed) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
