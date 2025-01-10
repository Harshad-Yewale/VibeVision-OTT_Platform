import React, { useRef, useState } from 'react'
import"../List/List.scss"
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../ListItem/ListItem' 
import { Paper } from '@mui/material'

function List({list}) {
 
  const listRef=useRef()
  let [slideNumber , setSlideNumber] = useState(0)
  let [isMoved, setIsMoved] = useState(false)
 

  let moveSlider=(direction)=>{
    setIsMoved(true);
    const initialPos=listRef.current.getBoundingClientRect().x 

    if (direction === "left" && slideNumber>=0) {
      slideNumber--;
      listRef.current.style.transform=`translateX(${230+initialPos}px)`
      
    }
    if (direction === "right" && slideNumber<4) {
      slideNumber++;
      listRef.current.style.transform=`translateX(${-230+initialPos-20}px)`;  
    }
  }

  


  return (
    <div className='List'>
      <span className='category-title'>{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined className='Arrows left' onClick={()=>moveSlider("left")} style={{display: !isMoved && 'none'}}/>
        <Paper elevation={2} rounded className="container" ref={listRef}>
        {list.content.map((item) => (
            <ListItem key={item.id} item={item} />
        ))}
          
        </Paper>
        <ArrowForwardIosOutlined className='Arrows right'  onClick={()=>moveSlider("right")}/>
      </div>
    </div>
  )
}

export default List
