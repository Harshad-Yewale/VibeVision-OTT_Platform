import React from "react"
import TopBar from "./Components/TopBar/TopBar"
import SideBar from "./Components/SideBar/SideBar"
import "./App.scss"
import HomePage from "./pages/Homepage/HomePage"
import Chart from "./Components/Chart/Chart"
import { BrowserRouter as Router, Routes, Route } from "react-router";
import UsersList from "./pages/UsersList/UsersList"
import User from "./pages/Users/User"
import NewUser from "./pages/NewUser/NewUser"
import ProductList from "./pages/ProductList/ProductList"
import Products from "./pages/Products/Products"
import NewProduct from "./pages/NewProduct/NewProduct"

function App() {
  

  return (
    <div className="App">
      
      
        <Router>
        <TopBar/>
        <div className="container"> 
          <SideBar/>
          <Routes> 
           <Route path="/" element={<HomePage/>}/>
           <Route path="/users" element={<UsersList/>}/>
           <Route path="/User/:UserId" element={<User/>}/>
           <Route path="/NewUser" element={<NewUser/>}/>
           <Route path="/Products" element={<ProductList/>}/>
           <Route path="/Product/:ProductId" element={<Products/>}/>
           <Route path="/NewProduct" element={<NewProduct/>}/>
          </Routes>
          </div>
        </Router>
      </div>
    
  )
}

export default App
