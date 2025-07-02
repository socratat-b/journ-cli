import { unlink } from "fs/promises";
import path from "path";

export async function deleteEntry(filename) {
  const pathname = path.join("entries", filename);

  try {
    await unlink(pathname);
    console.log("✅ File deleted successfully");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found!");
    } else if (error.code === "EACCES") {
      console.log("Permission denied to delete this file.");
    } else {
      console.log("Something went wrong", error.message);
    }
  }
}
