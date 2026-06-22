import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json();

    if (!imageUrl) {
      return NextResponse.json({ message: "No imageUrl" }, { status: 400 });
    }

    const filePath = path.join(
      process.cwd(),
      "public",
      imageUrl.replace(/^\/+/, ""),
    );

    await fs.unlink(filePath);

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete" }, { status: 500 });
  }
}
