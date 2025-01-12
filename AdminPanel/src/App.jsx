import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";
import HomePage from "./pages/Homepage/HomePage";
import UsersList from "./pages/UsersList/UsersList";
import User from "./pages/Users/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Products from "./pages/Products/Products";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import "./App.scss";

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
                <Route path="/movies" element={<ProductList />} />
                <Route path="/product/:ProductId" element={<Products />} />
                <Route path="/newProduct" element={<NewProduct />} />
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
