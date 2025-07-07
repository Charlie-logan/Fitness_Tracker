
# Personal Task Tracker

A responsive personal task management application built with React, TypeScript, and Tailwind CSS. It allows users to create, edit, delete, filter, and search for their tasks. All data is persisted in the browser's local storage.

This project was built as a front-end assessment, focusing on clean code, modern React practices, and a great user experience.

[![Light Mode Screenshot](https://i.imgur.com/your-light-mode-screenshot.png "Light Mode")](https://your-live-demo-url)
_Light Mode & Dark Mode UI_
[![Dark Mode Screenshot](https://i.imgur.com/your-dark-mode-screenshot.png "Dark Mode")](https://your-live-demo-url)

## ✨ Live Demo



---

## 🚀 Features

-   **👤 Simple Authentication**: Enter a username to start, which is stored locally.
-   **📝 Full CRUD for Tasks**:
    -   **Create**: Add new tasks with a title, description, priority, and due date.
    -   **Read**: View all your tasks in a clean, organized list.
    -   **Update**: Edit existing tasks inline.
    -   **Delete**: Remove tasks with a confirmation step.
-   **✅ Toggle Completion**: Mark tasks as complete or pending with a single click.
-   **💾 Local Storage Persistence**: Your username and tasks are saved in the browser, so your data is there when you return.
-   **🔍 Powerful Filtering & Search**:
    -   Filter tasks by **All**, **Pending**, or **Completed** status.
    -   Instantly search tasks by title or description.
-   **🎨 Feature-Rich Tasks**:
    -   Assign **High**, **Medium**, or **Low** priority.
    -   Add optional **due dates**, with a visual indicator for overdue tasks.
-   **🌙 Dark Mode**: A sleek, eye-friendly dark mode that respects your system preference and can be toggled manually.
-   **📱 Responsive Design**: A seamless experience on desktop, tablet, and mobile devices.
-   **✅ Accessible Modals**: Modals are used for creating/editing tasks and confirming deletions.

---

## 🛠️ Technologies Used

-   **React**: Core front-end library (using functional components and hooks).
-   **TypeScript**: For static typing and improved code quality.
-   **Vite**: Next-generation front-end tooling for a fast development experience.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/personal-task-tracker.git
    cd personal-task-tracker
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    This will start the Vite development server.

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` (or the URL provided in your terminal). The application should now be running.

### Available Scripts

-   `npm start`: Starts the development server.
-   `npm run build`: Bundles the app for production.
-   `npm run preview`: Serves the production build locally.

---

## 📁 Project Structure

The project follows a standard component-based architecture to keep the code organized and maintainable.

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── auth/Login.tsx
│   │   ├── tasks/         # Task-related components
│   │   └── ui/            # Generic UI components (Modal, Header, etc.)
│   ├── hooks/             # Custom React hooks (useLocalStorage, useDarkMode)
│   ├── App.tsx            # Root component
│   ├── constants.ts       # Global constants
│   ├── index.tsx          # Main entry point
│   └── types.ts           # TypeScript type definitions
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

