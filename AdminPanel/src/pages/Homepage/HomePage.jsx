import React, { useMemo, useState, useEffect } from 'react'
import './HomePage.scss'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import Chart from '../../Components/Chart/Chart'
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall'
import axios from 'axios'


function HomePage() {

  const MONTHS=useMemo(()=>[
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ],[])
  
  const [userStats,setUserStats]=useState([])
  
  useEffect(() => {

  const getStats = async () => {

    try {

      const res = await axios.get("/api/users/stats", {

        headers: {
          token:
            "Bearer " +
            JSON.parse(localStorage.getItem("user")).accessToken,
        },

      });


      const statsList = Array.isArray(res.data)
        ? res.data.sort((a, b) => a._id - b._id)
        : [];


      const formattedStats = statsList.map((item) => ({

        name: MONTHS[item._id - 1],

        "New Users": item.total,

      }));


      setUserStats(formattedStats);

    } catch (err) {

      console.log(err);

    }

  };


  getStats();

}, [MONTHS]);


  return (
    <div className='Home'>
        <FeaturedInfo/>
        <Chart data={userStats} Title={"User Analytics"} grid dataKey={"New Users"}/>
        <div className="widgets">
          <WidgetSmall/>
        </div>
    </div>
  )
}

export default HomePage
