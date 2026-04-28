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
PORT=5000
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

This is the complete file structure of the movieLand project.

```
movieLand/
│
├── .gitignore
├── README.md
│
├── backend/                          # Express.js Backend
│   ├── .gitignore
│   ├── db.js                         # Database connection setup
│   ├── package-lock.json
│   ├── package.json                  # Backend dependencies & scripts
│   ├── server.js                     # Backend entry point
│   │
│   ├── middleware/
│   │   └── auth.js                   # Authentication middleware
│   │
│   ├── models/
│   │   └── User.js                   # Mongoose User model
│   │
│   └── routes/
│       ├── auth.js                   # Authentication routes (login/register)
│       └── watchlist.js              # Watchlist routes
│
└── movieLand-frontend/               # React + Vite Frontend
    ├── .gitignore
    ├── eslint.config.js              # ESLint configuration
    ├── index.html                    # HTML entry point
    ├── package-lock.json
    ├── package.json                  # Frontend dependencies & scripts
    ├── vite.config.js                # Vite configuration
    │
    ├── public/
    │   └── vite.svg                  # Vite logo
    │
    └── src/
        ├── App.css                   # Global app styles
        ├── App.jsx                   # Main app component with routing
        ├── index.css                 # Global CSS
        ├── main.jsx                  # React entry point
        │
        ├── assets/                   # Static images/assets
        │   ├── movieLand.png
        │   ├── no-movie.png
        │   ├── no-profile-pic.jpeg
        │   ├── webicon.png
        │   └── webicon1.png
        │
        ├── Components/               # React components (organized by feature)
        │   ├── ScrollToTop.jsx       # Scroll to top utility
        │   │
        │   ├── About/
        │   │   ├── About.css
        │   │   └── About.jsx
        │   │
        │   ├── BengaliMovies/
        │   │   ├── BengaliMovies.css
        │   │   └── BengaliMovies.jsx
        │   │
        │   ├── Footer/
        │   │   ├── Footer.css
        │   │   └── Footer.jsx
        │   │
        │   ├── HindiMovies/
        │   │   ├── HindiMovies.css
        │   │   └── HindiMovies.jsx
        │   │
        │   ├── home/
        │   │   ├── Home.css
        │   │   ├── Home.jsx
        │   │   ├── HomeV2.css
        │   │   └── HomeV2.jsx
        │   │
        │   ├── HomeIndian/
        │   │   ├── HomeIndian.css
        │   │   ├── HomeIndian.jsx
        │   │   ├── HomeIndianV2.css
        │   │   └── HomeIndianV2.jsx
        │   │
        │   ├── Indian/
        │   │   ├── IndianMovies.css
        │   │   └── IndianMovies.jsx
        │   │
        │   ├── KanadaMovies/
        │   │   ├── kanadaMovies.css
        │   │   └── KanadaMovies.jsx
        │   │
        │   ├── LanguageBar/
        │   │   ├── LanguageBar.css
        │   │   ├── LanguageBar.jsx
        │   │   └── Languagebar.css
        │   │
        │   ├── LegalInfo/
        │   │   ├── LegalInfo.css
        │   │   └── LegalInfo.jsx
        │   │
        │   ├── Loader/
        │   │   ├── Loader.css
        │   │   ├── Loading.css
        │   │   └── Loading.jsx
        │   │
        │   ├── MalayalamMovies/
        │   │   ├── MalayalamMovies.css
        │   │   └── MalayalamMovies.jsx
        │   │
        │   ├── MovieDetails/
        │   │   ├── EpisodeDetails.css
        │   │   ├── EpisodeDetails.jsx
        │   │   ├── MovieDatails.jsx
        │   │   ├── MovieDetails.css
        │   │   ├── SeasonDetails.jsx
        │   │   └── TvDetails.jsx
        │   │
        │   ├── Movies/
        │   │   ├── MoviesGlobal.css
        │   │   ├── MoviesGlobal.jsx
        │   │   ├── MoviesGlobalV2.css
        │   │   ├── MoviesGlobalV2.jsx
        │   │   ├── TvGlobal.jsx
        │   │   └── TvGlobalV2.jsx
        │   │
        │   ├── Navbar/
        │   │   ├── Navbar.css
        │   │   └── Navbar.jsx
        │   │
        │   ├── Pages/
        │   │   ├── Login.css
        │   │   ├── Login.jsx
        │   │   ├── SignUp.css
        │   │   └── SignUp.jsx
        │   │
        │   ├── Popular/
        │   │   ├── Popular.css
        │   │   ├── Popular.jsx
        │   │   ├── PopularIndian.jsx
        │   │   ├── PopularTv.jsx
        │   │   ├── PopularTvHome.css
        │   │   └── PopularTvHome.jsx
        │   │
        │   ├── SessionExpiredModal/
        │   │   ├── SessionExpiredModal.css
        │   │   ├── SessionExpiredModal.jsx
        │   │   └── SessionHandler.jsx
        │   │
        │   ├── TamilMovies/
        │   │   ├── TamilMovies.css
        │   │   └── TamilMovies.jsx
        │   │
        │   ├── TeleguMovies/
        │   │   ├── TeleguMovies.css
        │   │   └── TeleguMovies.jsx
        │   │
        │   ├── TermsOfService/
        │   │   ├── TermsOfService.css
        │   │   └── TermsOfService.jsx
        │   │
        │   ├── Toprated/
        │   │   ├── TopRated.css
        │   │   ├── TopRated.jsx
        │   │   ├── TopRatedIndian.jsx
        │   │   └── TopRatedTv.jsx
        │   │
        │   ├── Trending/
        │   │   ├── Trending.css
        │   │   ├── Trending.jsx
        │   │   ├── TrendingIndian.jsx
        │   │   ├── TrendingTv.jsx
        │   │   ├── TrendingTvHome.css
        │   │   └── TrendingTvHome.jsx
        │   │
        │   ├── Upcoming/
        │   │   ├── AiringTodayTv.jsx
        │   │   ├── Upcoming.css
        │   │   ├── Upcoming.jsx
        │   │   └── UpcomingIndian.jsx
        │   │
        │   └── Watchlist/
        │       ├── Watchlist.css
        │       └── Watchlist.jsx
        │
        └── context/                  # React Context API
            ├── movieContext.js
            └── MovieState.jsx
```

## Key Observations

1. **Backend** (`backend/`): Express.js server with MongoDB (Mongoose) for user authentication and watchlist management.

2. **Frontend** (`movieLand-frontend/`): React + Vite application with feature-based component organization.

3. **Routing**: The app uses `react-router-dom` for client-side routing with routes for movies, TV shows, Indian language movies, watchlist, and auth pages.

4. **Dual Versions**: Several components have V2 versions (e.g., `Home.jsx` & `HomeV2.jsx`, `MoviesGlobal.jsx` & `MoviesGlobalV2.jsx`) suggesting UI redesigns or A/B testing.

5. **Indian Regional Content**: Dedicated components for Hindi, Bengali, Tamil, Telugu, Kannada, and Malayalam movies.

6. **TV Shows**: Separate routes and components for TV series with season and episode-level details.

## File Count Summary

| Category               | Count    |
| ---------------------- | -------- |
| Root Files             | 2        |
| Backend Files          | 9        |
| Frontend Config Files  | 6        |
| Frontend Public Assets | 1        |
| Frontend Source Files  | 95+      |
| **Total**              | **113+** |

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
