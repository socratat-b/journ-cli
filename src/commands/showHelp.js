export function showHelp() {
  console.log(`
📝 Journ - Personal Journal CLI

Usage:
  journ <command> [options]

Commands:
  create <text>    Create a new journal entry for today
  list             List all journal entries
  read <date>      Read entry for specific date (YYYY-MM-DD)
  delete <date>    Delete entry for specific date

Options:
  --help, -h       Show this help message

Examples:
  journ create "Today I learned about CLI development"
  journ list
  journ read 2025-07-02
  journ delete 2025-07-01
  journ --help
`);
}
