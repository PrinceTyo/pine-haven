import fs from "fs/promises";
import path from "path";

export async function deleteImage(imageUrl: string) {
  try {
    const fileName = imageUrl.split("/").pop();

    if (!fileName) return;

    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    await fs.unlink(filePath);
  } catch (error) {
    console.log("Delete image error:", error);
  }
}
