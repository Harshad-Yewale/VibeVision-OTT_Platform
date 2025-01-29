import React from 'react'
import './TopBar.scss'
import {NotificationsNoneOutlined, LanguageOutlined, SettingsOutlined} from '@mui/icons-material'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AuthContext} from '../../context/authContext/AuthContext'
import { useContext } from 'react'

function TopBar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user"); 
  };
  return (
    <Paper className='TopBar' elevation={4} style={{backgroundColor:"black",color:"white"}} >
      <div className="TopBarWrapper">
        <div className="leftSection"> 
          <Link to='./' className='Link'>
            <img src='http://localhost:8080/logo.png' alt='logo'/>
            </Link>
            <span>Admin-Dashboard</span>
        </div>
        <div className="rightSection">
          <div className="rightSectionWrapper">
            <div className='icon'>
            <NotificationsNoneOutlined />
            <span className='badge'>2</span>
            </div>
            <div className='icon'>
            <LanguageOutlined className='icon'/>
            <span className='badge'>2</span>
            </div>
            <div className='icon'>
            <SettingsOutlined className='icon'/>
            </div>
            <img className='Aavtar' src='http://localhost:8080/profile.jpg' alt='Avtar'/>
            <button className='logout' onClick={handleLogout}>Logout</button>
          </div>
        </div>
       </div>
    </Paper>
  )
}

export default TopBar
