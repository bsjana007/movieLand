# 🎬 MovieLand

<div align="center">
  <h3>A MERN Stack Movie & Web Series Information Platform</h3>
  <p>
    Discover movies, web series, episodes, and character details in one modern, responsive web application.
  </p>
</div>

---

## 🧠 Overview

**MovieLand** is a full-stack MERN application that allows users to explore:

- 🎥 Movie details
- 📺 Web series information
- 📂 Episode breakdowns
- 🎭 Character details

The project is built using **React (Frontend)**, **Node.js & Express (Backend)**, and **MongoDB (Database)**. It focuses on clean UI design, scalable architecture, and dynamic API-based rendering.

---

## ✨ Features

- 🔎 Search movies and web series
- 📄 Detailed information pages
- 📺 Episode-level breakdown
- 🎭 Character profile view
- ⚡ Fast and responsive interface
- 📱 Mobile-friendly design
- 🔄 REST API integration

---

## 🛠 Tech Stack

### 🔹 Frontend

- React.js
- React Router DOM
- Axios / Fetch API
- CSS / Tailwind (if used)
- Vite (Build Tool)

### 🔹 Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### 🔹 Other Tools

- REST APIs
- JSON-based data handling
- Git & GitHub

---

## 🚀 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/bsjana007/movieLand.git
```

### Backend Setup

```bash
cd movieLand/backend
npm install
```

Create a .env file inside the backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start backend server:

```bash
npm start
```

Backend will run on:

```bash
http://localhost:3000
```

### Backend Setup

Open a new terminal:

```bash
cd movieLand
npm install
npm run dev
```

Frontend will run on:

```code
http://localhost:5173
```

---

### 📁 Folder Structure

```code
movieLand/
│
├── backend/                  # Express backend
│   ├── controllers/         # Business logic
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   └── server.js            # Backend entry point
│
├── public/                  # Static files
│   └── index.html
│
├── src/                     # React frontend
│   ├── components/         # Reusable components
│   ├── pages/              # Page-level components
│   ├── services/           # API services
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

### Example API Endpoints

GET /api/movies → Fetch all movies

GET /api/movies/:id → Fetch single movie details

GET /api/webseries → Fetch web series

GET /api/episodes/:id → Fetch episode details

GET /api/characters/:id → Fetch character details
(Adjust according to your actual backend routes)

---

## Author

Bhabani Sankar Jana
MERN Stack Developer | B.Tech CSE Student
Passionate about Full-Stack Development and building scalable web applications 🚀
