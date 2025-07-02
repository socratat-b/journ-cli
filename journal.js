import { createEntry } from "./src/commands/create.js";

const [, , command, ...args] = process.argv;

switch (command) {
  case "create":
    createEntry(args);
    break;

  default:
    console.log("Lorem");
}
