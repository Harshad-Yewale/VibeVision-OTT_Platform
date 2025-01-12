import React, { useMemo, useState, useEffect } from 'react'
import './HomePage.scss'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import Chart from '../../Components/Chart/Chart'
import { userData } from '../../dummyData/DummyData'
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../Components/WidgetLarge/WidgetLarge'
import axios from 'axios'


function HomePage() {

  const MONTHS=useMemo(()=>[
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ],[])
  
  const [userStats,setUserStats]=useState([])
  
  useEffect(()=>{
    const getStats=async()=>{
      try{
        const res=await axios.get("users/stats",{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2U4NmI4N2U5MmVjM2FiN2RhMDljMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjUxMzA1NCwiZXhwIjoxNzM2OTQ1MDU0fQ.KwEB0y7lOPB8e6ThGdMq0Nj50Kw26bd6hWO6ZQTAjKo",
          },
        })
        console.log(res.data)
        const statsList=res.data.sort((a,b)=>{
          return a._id-b._id
        })  
        statsList.map((item)=>{
          return setUserStats((prev)=>[
            ...prev,{name:MONTHS[item._id-1], "New Users":item.total}
          ])
        })
      }
      catch(err){
        console.log(err)
      }
    }
    getStats()
  }
  ,[])

  return (
    <div className='Home'>
        <FeaturedInfo/>
        <Chart data={userStats} Title={"User Analytics"} grid dataKey={"New Users"}/>
        <div className="widgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default HomePage
