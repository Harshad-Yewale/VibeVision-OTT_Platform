import React from 'react'
import './HomePage.scss'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import Chart from '../../Components/Chart/Chart'
import { userData } from '../../dummyData/DummyData'
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../Components/WidgetLarge/WidgetLarge'

function HomePage() {
  return (
    <div className='Home'>
        <FeaturedInfo/>
        <Chart data={userData} Title={"User Analytics"} grid dataKey={"Active Users"}/>
        <div className="widgets">
          <WidgetSmall/>
          <WidgetLarge/>
        </div>
    </div>
  )
}

export default HomePage
