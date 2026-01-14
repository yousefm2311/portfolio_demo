import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { ok: false, error: "file_missing" },
        { status: 400 }
      );
    }

    const extension = path.extname(file.name || "").toLowerCase() || ".png";
    if (!allowedExtensions.has(extension)) {
      return NextResponse.json(
        { ok: false, error: "invalid_type" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });

    const filename = `${randomUUID()}${extension}`;
    const filepath = path.join(uploadsDir, filename);
    await writeFile(filepath, buffer);

    return NextResponse.json({ ok: true, url: `/uploads/${filename}` });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "upload_failed" },
      { status: 500 }
    );
  }
}
