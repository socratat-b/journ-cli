import { readFile } from "fs/promises";

export async function readEntry(filename) {
  const pathname = "entries";
  try {
    const content = await readFile(`${pathname}/${filename}`, "utf-8");
    console.log("File content:", content);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File does not exist!");
    }
  }
}
