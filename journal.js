import { createEntry } from "./src/commands/create.js";
import { listEntries } from "./src/commands/list.js";

const [, , command, ...args] = process.argv;

switch (command) {
  case "create":
    createEntry(args);
    break;
  case "list":
    listEntries();
    break;
  default:
    console.log("Lorem");
}
