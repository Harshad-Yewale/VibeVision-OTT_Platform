import React, { useState } from 'react'
import './Navbar.scss';
import {Search,Person2Outlined,KeyboardArrowDownOutlined} from '@mui/icons-material';
import { padding } from '@mui/system';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll=()=>{
    setIsScrolled(window.scrollY ===0 ? false : true);
    return ()=> window.onscroll==null;
  }

  return (
    <div className={isScrolled ? 'Navbar Scrolled' : 'Navbar'}>
      <div className='container'>
        <div className="leftSection">
          <img className='logo' src='../../images/logo.png' alt='logo'></img>
          <span>HomePage</span>
          <span>Movies</span>
          <span>Series</span>
          <span>New-and-Popular</span>
          <span>My List</span>
        </div>
        <div className="rightSection">
          
          <Search className='icon'/>
          
          <div className="profile">
          <Person2Outlined className='icon'/>
          <KeyboardArrowDownOutlined className='icon'/>
          <div className="options">
             <span style={{paddingBottom:'4px', borderBottom:'1px solid white'}} >Settings</span>
             <span style={{paddingBottom:'4px', borderBottom:'1px solid white'}} >Log Out</span>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
