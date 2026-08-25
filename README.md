# Kanban Board Application

A simple, responsive frontend Kanban board for organizing tasks across workflow stages. Create tasks, track progress, and move work from one stage to another using an easy-to-use visual workflow.

## Overview

This project demonstrates the core functionality of a Kanban board in a modern frontend application. It is suitable for personal task tracking, small project planning, and learning how to build interactive interfaces with component-based frontend development.

## Features

- Create and manage tasks
- Organize tasks into Kanban columns
- Move tasks through the workflow
- Keep work structured and easy to track
- View the current state of work at a glance
- Use a responsive layout on different screen sizes

## Typical Workflow

Tasks can be organized into workflow stages such as:

1. **To Do** — Work that has not started yet.
2. **In Progress** — Work that is currently being completed.
3. **Done** — Completed work.

The columns can be used to visualize priorities, identify blocked work, and understand overall progress.

## Getting Started

### Prerequisites

- Node.js 18 or newer recommended
- npm, which is included with Node.js

### Installation

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install dependencies:

	```bash
	npm install
	```

4. Start the development server:

	```bash
	npm run dev
	```

5. Open the local URL shown in the terminal.

The development server usually runs at `http://localhost:5173`, although the exact URL may vary depending on the project configuration and available ports.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the generated build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |

> Available commands may change as the project evolves. Check `package.json` for the complete list of scripts.

## Using the Board

1. Add a task using the task creation control.
2. Enter a clear title and any relevant task details.
3. Place the task in the appropriate workflow column.
4. Move the task as work progresses.
5. Review the board regularly to keep task status accurate.

Keep task titles short and actionable. For larger pieces of work, use the description or split the work into smaller tasks where supported.

## Project Structure

```text
├── public/             # Public static assets
├── src/                # Application source code
│   ├── components/     # Reusable UI components
│   │   ├── Board/      # Board and column components
│   │   ├── TaskCard/   # Task card components
│   ├── App.*           # Application root component
│   └── main.*          # Frontend entry point
├── index.html          # HTML entry document
├── package.json        # Dependencies and npm scripts
├── package-lock.json   # Locked dependency versions
└── README.md           # Project documentation
```

## Development Notes

- Keep components focused on a single responsibility.
- Prefer reusable UI components for cards, columns, and controls.
- Keep task state updates predictable and easy to follow.
- Test the board after adding, editing, moving, or removing tasks.
- Verify layouts at both desktop and mobile widths.

## Troubleshooting

### Dependencies do not install

Confirm that Node.js and npm are installed, then try removing the local dependency directory and lockfile before running `npm install` again if the project permits regenerating the lockfile.

### The development server does not start

Check that the required port is available and review the terminal output for configuration or dependency errors. Running `npm install` again may resolve an incomplete installation.

### Changes are not visible

Save the edited files and refresh the browser. If necessary, stop and restart the development server.

## Contributing

1. Create a feature branch.
2. Make your changes.
3. Test the application locally.
4. Confirm that the production build completes successfully.
5. Open a pull request with a concise description of the changes.

When contributing, keep changes focused, follow the existing project style, and include screenshots or notes for significant visual updates.

## Future Improvements

Potential enhancements include:

- Task editing and deletion
- Drag-and-drop task movement
- Task labels, priorities, and due dates
- Search and filtering
- Persistent storage
- User authentication and shared boards
- Dark mode and additional accessibility improvements

## Accessibility

Use meaningful labels and clear visual states when extending the application. Interactive controls should be keyboard accessible, provide visible focus states, and maintain sufficient color contrast.

## Live Link

[Live Link](https://fantastic-bubblegum-122a3b.netlify.app/)

## License

This project is for educational and demonstration purposes.
