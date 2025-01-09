import React from 'react'
import "./ListItem.scss"
import {PlayArrow, Add, ThumbUpOutlined, ThumbDownAltOutlined} from '@mui/icons-material';

function ListItem() {
  return (
    <div className='ListItem'>
      <img src='../../../images/m.jpg' alt='poster'/>
      <div className="item-info">
        <div className="icon">
          <PlayArrow/>
          <Add/>
          <ThumbUpOutlined/>
          <ThumbDownAltOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 54 mins</span>
          <span className="limit">16+</span>
          <span>2018</span>
        </div>
        <div className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="genere">Action</div>
      </div>
    </div>
  )
}

export default ListItem
