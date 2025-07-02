import { writeFile } from "fs/promises";
import path from "path";

export async function createEntry(content) {
  const filename = `${new Date().toISOString().split("T")[0]}.txt`;
  const pathname = path.join("entries", filename);

  const header = `Journal Entry - ${new Date().toLocaleDateString()}\n=======================================\n\n\n`;

  await writeFile(pathname, `${header}${content}`);

  console.log("Journal created sucessfully");
}
