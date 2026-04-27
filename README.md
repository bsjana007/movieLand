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
- Fetch API
- CSS
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
npm init -y
npm i express cors dotenv mongoose express-validator bcryptjs jsonwebtoken
npm i nodemon
```

Create a `.env` file inside the backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start backend server:

```bash
nodemon server.js
```

Backend will run on:

```bash
http://localhost:5000
```

### Frontend Setup

Open a new terminal:

```bash
cd movieLand
npm install
npm create vite@latest
npm i react-router-dom
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
│
│
├── src/
│   ├── assets/                   # React frontend
│   ├── components/         # Reusable components
│   │   ├──About/
│   │   │  ├── About.jsx
│   │   │  └── About.css
│   │   ├──BengaliMovies/
│   │   │  ├── BengaliMovies.jsx
│   │   │  └── BengaliMovies.css
│   │   ├──Footer/
│   │   │  ├── Footer.jsx
│   │   │  └── Footer.css
│   │   ├──HindiMovies/
│   │   │  ├── HindiMovies.jsx
│   │   │  └── HindiMovies.css
│   │   ├──home/
│   │   │  ├── Home.jsx
│   │   │  └── Home.css
│   │   ├──HomeIndian/
│   │   │  ├── HomeIndian.jsx
│   │   │  └── HomeIndian.css
│   │   ├──Indian/
│   │   │  ├── IndianMovies.jsx
│   │   │  └── IndianMovies.css
│   │   ├──KanadaMovies/
│   │   │  ├── KanadaMovies.jsx
│   │   │  └── KanadaMovies.css
│   │   ├──LanguageBar/
│   │   │  ├── LanguageBar.jsx
│   │   │  └── LanguageBar.css
│   │   ├──Loader/
│   │   │  ├── Loader.jsx
│   │   │  └── Loader.css
│   │   ├──MalayalamMovies/
│   │   │  ├── MalayalamMovies.jsx
│   │   │  └── malayalamMovies.css
│   │   ├──MovieDetails/
│   │   │  ├── MovieDetails.jsx
│   │   │  ├── MovieDetails.css
│   │   │  ├── EpisodeDetails.jsx
│   │   │  ├── EpisodeDetails.css
│   │   │  ├── SeasonDetails.css
│   │   │  └── TvDetails.css
│   │   ├──Movies/
│   │   │  ├── MoviesGLoabl.jsx
│   │   │  ├── MoviesGLoabl.css
│   │   │  └── TvGlobal.css
│   │   ├──Navbar/
│   │   │  ├── Navbar.jsx
│   │   │  └── Navbar.css
│   │   ├──Pages/
│   │   │  ├── Login.jsx
│   │   │  ├── Login.css
│   │   │  ├── SignUp.jsx
│   │   │  └── SignUp.css
│   │   ├──Popular/
│   │   │  ├── Popular.jsx
│   │   │  ├── Popular.css
│   │   │  ├── PopularIndian.jsx
│   │   │  ├── PopularTv.jsx
│   │   │  ├── PopularTvHome.jsx
│   │   │  └── PopularTvHome.css
│   │   ├──TamilMocies/
│   │   │  ├── TamilMovies.jsx
│   │   │  └── TamilMovies.css
│   │   ├──TeleguMovies/
│   │   │  ├── TeleguMovies.jsx
│   │   │  └── TeleguMovies.css
│   │   ├──TopRated/
│   │   │  ├── Toprated.jsx
│   │   │  ├── ToprRatedIndian.jsx
│   │   │  ├── ToprRatedTv.jsx
│   │   │  └── TopRated.css
│   │   ├──Trending/
│   │   │  ├── Trending.jsx
│   │   │  ├── TrendingIndian.jsx
│   │   │  ├── TrendingTv.jsx
│   │   │  ├── TrendingTvHome.jsx
│   │   │  ├── TrendingTvHome.css
│   │   │  └── Trending.css
│   │   ├──Upcoming/
│   │   │  ├── Upcoming.jsx
│   │   │  ├── AiringToday.jsx
│   │   │  ├── UpcomingIndian.jsx
│   │   │  └── Upcoming.css
│   │   ├──Watchlist/
│   │   │  ├── Watchlist.jsx
│   │   │  └── Watchlist.css
│   │   │
│   │   └──ScrollToTop.jsx
│   │
│   ├──Context/
│   │   ├── MovieState.jsx
│   │   └── movieContext.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── index.html
├── vite.config.js
└── README.md
```

---

### Example API Endpoints

- GET /api/movies → Fetch all movies

- GET /api/movies/:id → Fetch single movie details

- GET /api/webseries → Fetch web series

- GET /api/episodes/:id → Fetch episode details

- GET /api/characters/:id → Fetch character details

(Adjust according to your actual backend routes)

---

## Author

Bhabani Sankar Jana<br/>
MERN Stack Developer | B.Tech CSE Student<br/>
Passionate about Full-Stack Development and building scalable web applications 🚀
