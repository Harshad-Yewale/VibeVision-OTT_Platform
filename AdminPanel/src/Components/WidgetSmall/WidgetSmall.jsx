import React from 'react'
import "./WidgetSmall.scss"
import { Visibility } from '@mui/icons-material'
import { Paper } from '@mui/material'

function WidgetSmall() {
  return (
    <Paper elevation={3} className='widgetSmall'>
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="../../../images/profile.jpg" alt="user Logo" className="widgetSmallProfileImg" />
          <div className="widgetSmallUserInfo">
            <span className="widgetSmalluserName">Harshad Yewale</span>
            <span className="widgetSmalljobTitle">Software Enginear</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='icon'/>
            <span className="Display">Display</span>
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="../../../images/profile.jpg" alt="user Logo" className="widgetSmallProfileImg" />
          <div className="widgetSmallUserInfo">
            <span className="widgetSmalluserName">Harshad Yewale</span>
            <span className="widgetSmalljobTitle">Software Enginear</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='icon'/>
            <span className="Display">Display</span>
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="../../../images/profile.jpg" alt="user Logo" className="widgetSmallProfileImg" />
          <div className="widgetSmallUserInfo">
            <span className="widgetSmalluserName">Harshad Yewale</span>
            <span className="widgetSmalljobTitle">Software Enginear</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='icon'/>
            <span className="Display">Display</span>
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src="../../../images/profile.jpg" alt="user Logo" className="widgetSmallProfileImg" />
          <div className="widgetSmallUserInfo">
            <span className="widgetSmalluserName">Harshad Yewale</span>
            <span className="widgetSmalljobTitle">Software Enginear</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='icon'/>
            <span className="Display">Display</span>
          </button>
        </li>
      </ul>
    </Paper>
  )
}

export default WidgetSmall
