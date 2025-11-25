import React from 'react'
import './SideBar.scss'
import {CottageOutlined, TimelineOutlined, TrendingUpOutlined, PeopleAltOutlined, MovieFilter, FormatListBulleted, BarChartOutlined,} from '@mui/icons-material'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <Paper elevation={3} className='sideBar'>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <div className="sideBarTitle">DashBoard</div>
          <ul className='sideBarList'>
          <Link to="./" className='Link'>
            <li className="listItem active">
              <CottageOutlined className='sideBarIcon '/>
              <span>Home</span>
            </li>
            </Link>
            <li className="listItem">
            <TimelineOutlined className='sideBarIcon'/>
            <span>Analytic</span>
            </li>
            <li className="listItem">
            <TrendingUpOutlined className='sideBarIcon'/>
            <span>Sales</span>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <div className="sideBarTitle">Quick Menu</div>
          <ul className='sideBarList'>
          <Link to="./Users" className='Link'>
            <li className="listItem ">
              <PeopleAltOutlined className='sideBarIcon'/>
              <span>Users</span>
            </li>
            </Link>
            <Link to="./Movies" className='Link'>
            <li className="listItem">
            < MovieFilter className='sideBarIcon'/>
            <span>Movies</span>
            </li>
            </Link>
            <Link to="./contentlists" className='Link'>
            <li className="listItem">
            <FormatListBulleted className='sideBarIcon'/>
            <span>content Lists</span>
            </li>
            </Link>
            <li className="listItem">
            <BarChartOutlined className='sideBarIcon'/>
            <span>Report</span>
            </li>
          </ul>
        </div>
      </div>
    </Paper>
  )
}

export default SideBar
