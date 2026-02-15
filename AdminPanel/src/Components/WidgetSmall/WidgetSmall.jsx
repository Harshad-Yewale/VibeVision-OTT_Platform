import React, { useState, useEffect } from 'react'
import "./WidgetSmall.scss"
import { Visibility } from '@mui/icons-material'
import { Paper } from '@mui/material'
import API from '../../../../VibeVision/api'   // USE YOUR API INSTANCE

function WidgetSmall() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {

    const getNewUsers = async () => {

      try {

        const res = await API.get("/users?new=true")

        console.log("Users response:", res.data)

        // ensure array
        if (Array.isArray(res.data)) {
          setNewUsers(res.data)
        } else if (Array.isArray(res.data.users)) {
          setNewUsers(res.data.users)
        } else {
          setNewUsers([])
        }

      } catch (err) {

        console.log(err)

      }

    }

    getNewUsers()

  }, [])

  return (

    <Paper elevation={3} className='widgetSmall'>

      <span className="widgetSmallTitle">New Join Members</span>

      <ul className="widgetSmallList">

        {Array.isArray(newUsers) && newUsers.map((user) => (

          <li className="widgetSmallListItem" key={user._id}>

            <img
              src={user.profilePic || "/images/default.png"}
              alt="user Logo"
              className="widgetSmallProfileImg"
            />

            <div className="widgetSmallUserInfo">
              <span className="widgetSmalluserName">{user.username}</span>
            </div>

            <div className="widgetSmallUserInfo">
              <span className="widgetSmalluserName">{user.email}</span>
            </div>

            <button className="widgetSmallButton">
              <Visibility className='icon' />
              <span className="Display">Display</span>
            </button>

          </li>

        ))}

      </ul>

    </Paper>

  )
}

export default WidgetSmall
