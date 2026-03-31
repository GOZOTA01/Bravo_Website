import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CATALOGS_DIR = path.join(process.cwd(), "catalogs");

export async function GET(
  _req: Request,
  { params }: { params: { file: string } },
) {
  const requested = params.file ?? "";

  // Prevent path traversal by enforcing that the resolved path stays within `catalogs/`.
  const basename = path.basename(requested);
  if (basename !== requested || requested.includes("/") || requested.includes("\\")) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(CATALOGS_DIR, basename);
  const resolvedDir = path.resolve(CATALOGS_DIR);
  const resolvedFile = path.resolve(filePath);

  if (!resolvedFile.startsWith(resolvedDir + path.sep) && resolvedFile !== resolvedDir) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const data = await fs.readFile(resolvedFile);
    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${basename}"`,
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

