# Journ CLI

A simple command-line journal manager built with Node.js to practice file system operations.

## Features

- [x] Create daily journal entries
- [x] List all entries
- [x] Read specific entries by date
- [x] Delete entries
- [x] View entry statistics (file size, last modified date)
- [x] Built-in help system (`--help`)
- [x] Automatic date-based file organization
- [x] Duplicate entry prevention
- [x] Global CLI installation

## Installation

```bash
git clone https://github.com/yourusername/journ-cli
cd journ-cli
npm install
chmod +x bin/journal
sudo npm link
```

## Usage

```bash
# Show help information
journ --help

# Create a new journal entry
journ create "Today was a great day! I learned about CLI development."

# List all journal entries
journ list

# Read a specific entry by date
journ read 2025-07-02

# Delete an entry
journ delete 2025-07-02

# View statistics for an entry
journ stat 2025-07-02
```

## Project Structure

```
journ-cli/
├── bin/
│   └── journal          # CLI executable
├── src/
│   └── commands/        # Command implementations
│       ├── create.js    # Create entry command
│       ├── read.js      # Read entry command
│       ├── list.js      # List entries command
│       ├── delete.js    # Delete entry command
│       └── stats.js     # View entry statistics command
├── entries/             # Journal entries storage
├── journal.js           # Main application router
├── package.json
└── README.md
```

## How It Works

- **One entry per day**: Each journal entry is saved as `YYYY-MM-DD.txt`
- **Automatic organization**: Files are stored in the `entries/` directory
- **Duplicate prevention**: Cannot create multiple entries for the same date
- **Global access**: Use `journ` command from anywhere after installation

## Learning Goals

This project practices:

- Node.js fs/promises module for file operations
- CLI development with process.argv and shebang
- Error handling with try/catch and error codes
- Modern ES modules (import/export)
- Package management and global installation
- File organization and path manipulation

## Commands

| Command      | Description                          | Example                      |
| ------------ | ------------------------------------ | ---------------------------- |
| `--help, -h` | Show help information and usage      | `journ --help`               |
| `create`     | Create a new journal entry for today | `journ create "My thoughts"` |
| `list`       | Show all available journal entries   | `journ list`                 |
| `read`       | Read a specific entry by date        | `journ read 2025-07-02`      |
| `delete`     | Delete an entry by date              | `journ delete 2025-07-02`    |
| `stat`       | View entry file statistics           | `journ stat 2025-07-02`      |

## Technical Details

- **Built with**: Node.js ES modules
- **File format**: Plain text (.txt)
- **Date format**: ISO date format (YYYY-MM-DD)
- **Storage**: Local file system in `entries/` directory
- **Global installation**: Uses npm link for development
