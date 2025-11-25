import React, { useState } from 'react'
import './Navbar.scss';
import {Search,Person2Outlined,KeyboardArrowDownOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch}=useContext(AuthContext)
  const user=JSON.parse(localStorage.getItem("user"))
  const username=user.username;

  window.onscroll=()=>{
    setIsScrolled(window.scrollY ===0 ? false : true);
     return ()=> window.onscroll==null;
  }
  const refreshPage=()=>{
    window.location.reload();
  }
  return (
    <>
    <div className={isScrolled ? 'Navbar Scrolled' : 'Navbar'}>
      <div className='container'>
        <div className="leftSection">
          <img className='logo' src='http://localhost:8080/logo.png' alt='logo'></img>
          <Link  to="/"   className='Link'>
          <span>HomePage</span>
          </Link>
          <Link to="/Movie"  className=' Link'>
          <span className='navbarmainLinks'>Movies</span>
          </Link>
          <Link to="/Series"  className=' Link'>
          <span className='navbarmainLinks'>Series</span>
          </Link>
        </div>
        <div className="rightSection">
          <Search className='icon'/>
          <div className="profile">
          <Person2Outlined className='icon'/>
          <span className='user'>{username}</span>
          <KeyboardArrowDownOutlined className='icon'/>
          <div className="options">
             <span style={{paddingBottom:'4px', borderBottom:'1px solid white'}}  onClick={()=>{dispatch(logout())}} >Log Out</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Navbar
