import { useState } from 'react'
import './App.scss'
import Home from "../src/pages/home/Home"
import WatchPage from './pages/WatchPage/WatchPage'
import Register from './pages/Register/Register'
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from './authContext/AuthContext'

function App() {
  const {user}=useContext(AuthContext);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home  />:<Navigate to="/Login" replace />} />
        <Route path="/Register" element={! user ? <Register />:<Navigate to="/" replace />} />
        <Route path="/Login" element={!user ? <Login />:<Navigate to="/" replace />} />
        <Route path="/Movie" element={user ? <Home type="Movie" />:<Navigate to="/Login" replace />} />
        <Route path="/Series" element={user ? <Home type="Series" />:<Navigate to="/Login" replace />}/>
        <Route path="/WatchPage" element={user ? <WatchPage />:<Navigate to="/Login" replace />} />
      </Routes>
    </Router>
  </>
)
}

export default App
