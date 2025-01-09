import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import "./WatchPage.scss"

function WatchPage() {
  return (
    <div className='WatchPage'>
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      <video autoPlay controls loop controlsList='Audio' progress src='../../../images/trailer.mp4'/>
      
    </div>
  )
}

export default WatchPage
