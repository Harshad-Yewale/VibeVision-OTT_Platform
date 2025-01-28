import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";
import HomePage from "./pages/Homepage/HomePage";
import UsersList from "./pages/UsersList/UsersList";
import User from "./pages/Users/User";
import NewUser from "./pages/NewUser/NewUser";
import MovieList from "./pages/MovieList/MovieList";
import Movies from "./pages/Movies/Movies";
import NewMovie from "./pages/NewMovie/NewMovie";
import ContentList from "./pages/contentList/ContentList";
import Login from "./pages/login/login";
import { AuthContext } from "./context/authContext/AuthContext";
import "./App.scss";
import NewList from "./pages/newlist/NewList";
import List from "./pages/list/List"

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        {user && <TopBar />}
        <div className="container">
          {user && <SideBar />}
          <Routes>
            {/* Public Route */}
            <Route className="login"
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />

            {/* Protected Routes */}
            {user && (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UsersList />} />
                <Route path="/user/:UserId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/Movie/:id" element={<Movies />} />
                <Route path="/newMovie" element={<NewMovie />} />
                <Route path="/contentlists" element={<ContentList />} />
                <Route path="/List/:id" element={<List />} />
                <Route path="/newList" element={<NewList/>} />
               
              </>
            )}

            {/* Fallback Route */}
            <Route
              path="*"
              element={<Navigate to={user ? "/" : "/login"} replace />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
