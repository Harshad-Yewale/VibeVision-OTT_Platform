import React,{useState} from 'react'
import "./WidgetSmall.scss"
import { Visibility } from '@mui/icons-material'
import { Paper } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'

function WidgetSmall() {
  
  const [newUsers,setNewUsers]=useState([])

  useEffect(()=>{
    const getNewUsers=async()=>{
      try{
        const res=await axios.get("users?new=true",{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2U4NmI4N2U5MmVjM2FiN2RhMDljMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjUxMzA1NCwiZXhwIjoxNzM2OTQ1MDU0fQ.KwEB0y7lOPB8e6ThGdMq0Nj50Kw26bd6hWO6ZQTAjKo",
          },
        })
        setNewUsers(res.data);
      }
      catch(err){
        console.log(err)
      } 
    }
    getNewUsers()
  }
  ,[])

  return (
    <Paper elevation={3} className='widgetSmall'>
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        {newUsers.map((newUsers)=>(
        <li className="widgetSmallListItem">
          <img src={newUsers.profilePic || "https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="} alt="user Logo" className="widgetSmallProfileImg" />
          <div className="widgetSmallUserInfo">
            <span className="widgetSmalluserName">{newUsers.username}</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='icon'/>
            <span className="Display">Display</span>
          </button>
        </li>
        ))}
      </ul>
    </Paper>
  )
}

export default WidgetSmall
