import React from 'react'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
import './FeaturedInfo.scss'
import { Paper } from '@mui/material'

function FeaturedInfo() {
  return (
    <div className='Featured'>
      <Paper elevation={3}>
      <div className="FeaturedItem">
        <span className="FeaturedTitle">
          Revenue
        </span>
        <div className="FeaturedMoneyContainer">
           <span className="FeaturedMoney">$2,415</span>        
           <span className="FeaturedMoneyRate">
            -11.4 <ArrowDownward className='FeaturedIcon negative' />
           </span>
        </div>
        <span className="FeaturedSub">Compared to last month</span>
      </div>
      </Paper>
      <Paper elevation={3}>
      <div className="FeaturedItem">
        <span className="FeaturedTitle">
          Sales
        </span>
        <div className="FeaturedMoneyContainer">
           <span className="FeaturedMoney">$2,435</span>        
           <span className="FeaturedMoneyRate">
            -1.4 <ArrowDownward className='FeaturedIcon negative'/>
           </span>
        </div>
        <span className="FeaturedSub">Compared to last month</span>
      </div>
      </Paper>
      <Paper elevation={3}>
      <div className="FeaturedItem">
        <span className="FeaturedTitle">
          Cost
        </span>
        <div className="FeaturedMoneyContainer">
           <span className="FeaturedMoney">$2,225</span>        
           <span className="FeaturedMoneyRate">
            2.4 <ArrowUpward className='FeaturedIcon'/>
           </span>
        </div>
        <span className="FeaturedSub">Compared to last month</span>
      </div>
      </Paper>
    </div>
  )
}

export default FeaturedInfo
