import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";

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
    await stat(resolvedFile);
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }

  const stream = createReadStream(resolvedFile);
  const webStream = Readable.toWeb(stream);

  return new NextResponse(webStream as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${basename}"`,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
