import React, { useContext } from 'react'
import './TopBar.scss'

import {
  NotificationsNoneOutlined,
  LanguageOutlined,
  SettingsOutlined
} from '@mui/icons-material'

import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext/AuthContext'

function TopBar() {

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {

    dispatch({ type: "LOGOUT" });

    localStorage.removeItem("user");

  };

  return (

    <Paper
      className='TopBar'
      elevation={4}
      style={{ backgroundColor: "black", color: "white" }}
    >

      <div className="TopBarWrapper">

        {/* LEFT SECTION */}

        <div className="leftSection">

          <Link to="/" className='Link'>

            <img
              src="/images/logo.png"
              alt="logo"
            />

          </Link>

          <span>Admin-Dashboard</span>

        </div>

        {/* RIGHT SECTION */}

        <div className="rightSection">

          <div className="rightSectionWrapper">

            <div className='icon'>
              <NotificationsNoneOutlined />
              <span className='badge'>2</span>
            </div>

            <div className='icon'>
              <LanguageOutlined />
              <span className='badge'>2</span>
            </div>

            <div className='icon'>
              <SettingsOutlined />
            </div>

            <img
              className='Aavtar'
              src="/images/profile.jpg"
              alt="Avatar"
            />

            <button
              className='logout'
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </Paper>

  )
}

export default TopBar
