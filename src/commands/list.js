import { readdir } from "fs/promises";

export async function listEntries() {
  try {
    const files = await readdir("entries");

    if (files.length === 0) {
      console.log("Folder is currently empty!");
    } else {
      console.log(`List of entries: ${files}`);
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Entries folder does not exist!");
    } else {
      console.log(error.message);
    }
  }
}
