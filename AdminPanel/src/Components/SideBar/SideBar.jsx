import React from 'react'
import './SideBar.scss'
import {CottageOutlined, TimelineOutlined, TrendingUpOutlined, PeopleAltOutlined, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined, EmailOutlined, FeedbackOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, ReportGmailerrorredOutlined} from '@mui/icons-material'
import { Paper } from '@mui/material'
import { Link , NavLink} from 'react-router-dom'

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
            
            <Link to="./Products" className='Link'>
            <li className="listItem">
            <StorefrontOutlined className='sideBarIcon'/>
            <span>Products</span>
            </li>
            </Link>
        
            <li className="listItem">
            <AttachMoneyOutlined className='sideBarIcon'/>
            <span>Transaction</span>
            </li>
            <li className="listItem">
            <BarChartOutlined className='sideBarIcon'/>
            <span>Report</span>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <div className="sideBarTitle">Notification</div>
          <ul className='sideBarList'>
            <li className="listItem ">
              <EmailOutlined className='sideBarIcon'/>
              <span>Mail</span>
            </li>
            <li className="listItem">
            <FeedbackOutlined className='sideBarIcon'/>
            <span>Feedback</span>
            </li>
            <li className="listItem">
            <ChatBubbleOutlineOutlined className='sideBarIcon'/>
            <span>Message</span>
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <div className="sideBarTitle">Staff</div>
          <ul className='sideBarList'>
            <li className="listItem ">
              <WorkOutlineOutlined className='sideBarIcon'/>
              <span>Manage</span>
            </li>
            <li className="listItem">
            <TimelineOutlined className='sideBarIcon'/>
            <span>Analytics</span>
            </li>
            <li className="listItem">
            <ReportGmailerrorredOutlined className='sideBarIcon'/>
            <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </Paper>
  )
}

export default SideBar
