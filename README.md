# 📝 Full-Stack Todo Application  
**Spring Boot + React (Vite)**

A full-stack Todo application built with a Spring Boot REST API backend and a React (Vite) frontend.  
The app supports creating, updating, editing, completing, and deleting todos with a clean, responsive UI.

---

## 🚀 Tech Stack

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- H2 (in-memory database)
- Maven

### Frontend
- React (Vite)
- JavaScript
- Axios
- CSS (responsive layout + animations)

---

## ✨ Features

- Create new todos
- Inline edit todo titles
- Mark todos as complete / incomplete
- Delete todos
- Full-width responsive UI
- Clean professional color theme
- Smooth animations
- RESTful API integration

---

## 📂 Project Structure
```
todo/
├── backend/
│   └── todo-back/
│       ├── src/
│       ├── pom.xml
│       └── mvnw
│
└── frontend/
    └── todo-ui/
        ├── src/
        ├── package.json
        └── vite.config.js
├── README.md
```

## 🧪 Backend API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| PUT | `/api/todos/{id}` | Update a todo |
| DELETE | `/api/todos/{id}` | Delete a todo |


## ▶️ Run Locally (Development)

### 1️⃣ Backend

```bash
cd backend/todo-back
./mvnw spring-boot:run

Backend runs at:
http://localhost:8080
```

2️⃣ Frontend
```text
cd frontend/todo-ui
npm install
npm run dev

Frontend runs at:
http://localhost:5173
```
🌐 CORS Configuration
```
@CrossOrigin(origins = "http://localhost:5173")
```
