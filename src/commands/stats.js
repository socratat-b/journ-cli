import { stat } from "fs/promises";

export async function showStat(filePath) {
  try {
    const stats = await stat(`entries/${filePath}`);

    console.log(
      `File Name:${filePath}\nFile Size: ${
        stats.size
      } bytes.\nLast Modified: ${stats.mtime.toLocaleDateString()}.\nIs a File: ${
        stats.isFile() ? "Yes." : "No."
      }`
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File does not exis.");
    } else {
      console.log("Something went wrong", error.message);
    }
  }
}
