import { writeFile } from "fs/promises";
import path from "path";

export async function createEntry(content) {
  try {
    const filename = `${new Date().toISOString().split("T")[0]}.txt`;
    const pathname = path.join("entries", filename);

    const header = `Journal Entry - ${new Date().toLocaleDateString()}\n=======================================\n\n`;

    await writeFile(pathname, `${header}${content}`, { flag: "wx" });

    console.log("Journal created sucessfully");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("Entry for this date already exist");
    }
  }
}
