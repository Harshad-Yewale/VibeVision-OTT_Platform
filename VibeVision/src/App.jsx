import { useState } from 'react'
import './App.scss'
import Home from "../src/pages/home/Home"
import WatchPage from './pages/WatchPage/WatchPage'
import Register from './pages/Register/Register'
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const user=true;
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home />:<Navigate to="/Register" replace />} />
        <Route path="/Register" element={! user ? <Register />:<Navigate to="/" replace />} />
        <Route path="/Login" element={!user ? <Login />:<Navigate to="/" replace />} />
        {
          user && (
            <>
            <Route path="/Movie" element={<Home type="Movie"/>} />
            <Route path="/Series" element={<Home type="Series" />} />
            <Route path="/WatchPage" element={<WatchPage />} />
            </>
          )
        }
      </Routes>
    </Router>
  </>
)
}

export default App
