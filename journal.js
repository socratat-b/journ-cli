import { createEntry } from "./src/commands/create.js";
import { deleteEntry } from "./src/commands/delete.js";
import { listEntries } from "./src/commands/list.js";
import { readEntry } from "./src/commands/read.js";

const [, , command, ...args] = process.argv;

switch (command) {
  case "create":
    createEntry(args[0]);
    break;
  case "list":
    listEntries();
    break;

  case "read":
    readEntry(args[0]);
    break;

  case "del":
    deleteEntry(args[0]);
    break;

  default:
    console.log("Command not found!");
}
