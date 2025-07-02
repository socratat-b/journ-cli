import { createEntry } from "./src/commands/create.js";
import { deleteEntry } from "./src/commands/delete.js";
import { listEntries } from "./src/commands/list.js";
import { readEntry } from "./src/commands/read.js";
import { showHelp } from "./src/commands/showHelp.js";
import { showStat } from "./src/commands/stats.js";

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

    case "stat":
      showStat(args[0]);
      break;

    case "--help":
    case "-h":
    case "help":
      showHelp();
      break;

    default:
      console.log("Command not found!");
  }
};

main();
