# ✅ To-Do App

A simple and efficient **task management application** built using the **MEAN Stack**, enabling users to create, update, mark complete, and delete tasks with persistent data storage via a local **MongoDB** setup.

---

## 🚀 Features

- **Full CRUD Functionality:** Create, Read, Update, and Delete tasks.
- **Local Data Persistence:** Uses **MongoDB (local setup)** for reliable task storage.
- **Real-Time Updates:** Automatically reflects changes on the UI after any operation.
- **Task Management:** Users can mark tasks as complete or clear all completed tasks.
- **RESTful API Design:** Built using **Express.js** for a clean and modular backend.
- **Responsive Frontend:** Designed with **Angular** for an intuitive and dynamic user experience.

---

## 🧰 Tech Stack

**Frontend:** Angular
**Backend:** Node.js, Express.js
**Database:** MongoDB (Local Setup)
**ORM:** Mongoose

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone [https://github.com/Gokulanandr/todo-app.git](https://github.com/Gokulanandr/todo-app.git)
cd todo-app
```

### 2\. Install Dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd ../frontend
npm install
```

### 3\. Configure MongoDB (Local Setup)

Make sure MongoDB is installed and running locally on your machine.
Default local connection string:

`mongodb://127.0.0.1:27017/todoapp`

Create a `.env` file inside the **backend** directory and add:

```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
```

### 4\. Run the Application

Open two terminals to start both the backend and frontend servers.

**Backend:**

```bash
cd backend
npm start
```

**Frontend (Angular):**

```bash
cd frontend
ng serve
```

The app will be running at:

```
Frontend → http://localhost:4200
Backend  → http://localhost:4000
```

---

## 🧩 API Endpoints

### 🔹 Get All Tasks

**GET** `/api/todos`
Fetches all tasks sorted by creation date (newest first).

### 🔹 Create Task

**POST** `/api/todos`
Creates a new task.
_Body: `{ "title": "Task name" }`_

### 🔹 Update Task (Edit/Toggle Complete)

**PATCH** `/api/todos/:id`
Updates the title or completion status of a task.
_Body: `{ "title": "New title", "completed": true }`_

### 🔹 Delete Task

**DELETE** `/api/todos/:id`
Deletes a specific task by ID.

### 🔹 Delete All Completed Tasks

**DELETE** `/api/todos`
Removes all tasks marked as completed.

---

## 🧠 How It Works

1.  The backend exposes RESTful APIs using Express.js to handle task creation, updates, and deletions.
2.  Data is stored locally in MongoDB for persistence, managed via Mongoose.
3.  The Angular frontend communicates with the backend to display and manage tasks in real-time.

---

## 💡 Future Enhancements

- Add user authentication and task ownership.
- Include due dates and task prioritization.
- Implement drag-and-drop task reordering.
- Add progress tracking and analytics dashboard.

---

## 🧑‍💻 Author

**Gokul Anand R**

📧 [gokul26.anand@gmail.com](mailto:gokul26.anand@gmail.com) |
🔗 [LinkedIn](https://www.linkedin.com/in/gokulanandr) |
💻 [GitHub](https://github.com/Gokulanandr) |

---

```

```
