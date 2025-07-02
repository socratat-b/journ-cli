import { createEntry } from "./src/commands/create.js";
import { listEntries } from "./src/commands/list.js";
import { readEntry } from "./src/commands/read.js";

const [, , command, ...args] = process.argv;

switch (command) {
  case "create":
    createEntry(args);
    break;
  case "list":
    listEntries();
    break;

  case "read":
    readEntry(args[0]);
    break;

  default:
    console.log("Lorem");
}
