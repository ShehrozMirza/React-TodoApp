<div align="center">

# ✅ React Todo App

**A beautiful, feature-rich todo list built with React + Vite**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-264de4?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](#) · [Report Bug](https://github.com/ShehrozMirza/React-TodoApp/issues) · [Request Feature](https://github.com/ShehrozMirza/React-TodoApp/issues)

</div>

---

## 📖 About

A clean and modern Todo List application built from scratch with **React 19** and **Vite**. Designed with a focus on usability, smooth animations, and a polished UI — all without any external UI libraries.

---

## Screenshot
<img width="600" height="600" alt="image" src="https://github.com/user-attachments/assets/4d432eb7-7f6a-47e8-9ad2-6c45930015a5" />


## ✨ Features

| Feature | Description |
|---|---|
| ➕ **Add Todos** | Create tasks with a title, priority level, and optional due date |
| ✅ **Complete Todos** | Click the circular checkbox to mark tasks done |
| ✏️ **Inline Edit** | Double-click any task to edit it in place |
| 🗑️ **Delete** | Remove tasks with the hover-reveal delete button |
| 🔴🟡🟢 **Priority Levels** | Tag each task as High, Medium, or Low priority |
| 📅 **Due Dates** | Set a due date — overdue tasks are highlighted in red |
| 🔍 **Search** | Live search filters tasks as you type |
| 🔃 **Sort** | Sort by Default, Priority, Name, or Due Date |
| 🗂️ **Filter Tabs** | View All, Active, or Completed tasks with live counts |
| 📊 **Progress Bar** | Animated bar shows your overall completion percentage |
| 🧹 **Clear Completed** | One-click removal of all completed tasks |
| 💾 **Persistence** | Todos are saved to `localStorage` — survive page refresh |
| 🎞️ **Animations** | Smooth slide-in animation for every new task |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ShehrozMirza/React-TodoApp.git

# 2. Navigate into the project
cd React-TodoApp

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Built With

- **[React 19](https://react.dev)** — UI library with hooks
- **[Vite 8](https://vite.dev)** — Lightning-fast build tool
- **[CSS Modules](https://github.com/css-modules/css-modules)** — Scoped component styles
- **localStorage API** — Client-side data persistence
- **`crypto.randomUUID()`** — Unique IDs for each todo

---

## 📁 Project Structure

```
src/
├── App.jsx                      # Root component
├── App.css                      # Global styles & background
├── main.jsx                     # React DOM entry point
└── Components/
    ├── Header.jsx               # App header with title
    ├── header.module.css
    ├── Todo.jsx                 # State container (localStorage + filter)
    ├── Form.jsx                 # Add task form (text, priority, due date)
    ├── form.module.css
    ├── TodoList.jsx             # List with search, sort, filter, progress bar
    ├── todolist.module.css
    ├── TodoItem.jsx             # Individual task row with edit & delete
    └── todoitem.module.css
```

---

## 🎨 Design Highlights

- **Purple gradient background** (`#667eea → #764ba2`)
- **Frosted glass header** with `backdrop-filter: blur`
- **White cards** with deep shadows for depth
- **Color-coded priority badges** — red / amber / green pills
- **Green gradient checkbox** with glow on completion
- **Action buttons reveal on hover** for a clean, uncluttered list
- **Smooth progress bar** transitions with `cubic-bezier` easing

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the source files |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 👤 Author

**Shehroz Mirza**

[![GitHub](https://img.shields.io/badge/GitHub-ShehrozMirza-181717?style=for-the-badge&logo=github)](https://github.com/ShehrozMirza)

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

Made with ❤️ and React

</div>
