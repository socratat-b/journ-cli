import { createEntry } from "./src/commands/create.js";
import { deleteEntry } from "./src/commands/delete.js";
import { listEntries } from "./src/commands/list.js";
import { readEntry } from "./src/commands/read.js";

const [, , command, ...args] = process.argv;

const main = async () => {
  switch (command) {
    case "create":
      await createEntry(args[0]);
      break;
    case "list":
      await listEntries();
      break;

    case "read":
      await readEntry(args[0]);
      break;

    case "del":
      await deleteEntry(args[0]);
      break;

    default:
      console.log("Command not found!");
  }
};

main();
