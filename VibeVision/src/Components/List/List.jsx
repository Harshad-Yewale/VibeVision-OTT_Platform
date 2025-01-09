import React, { useRef, useState } from 'react'
import"../List/List.scss"
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../ListItem/ListItem' 

function List() {
  const listRef=useRef()
  let [slideNumber , setSlideNumber] = useState(0)
  let [isMoved, setIsMoved] = useState(false)

  let moveSlider=(direction)=>{
    setIsMoved(true);
    const initialPos=listRef.current.getBoundingClientRect().x 
    console.log(initialPos)

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
      <span className='category-title'>Popular</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined className='Arrows left' onClick={()=>moveSlider("left")} style={{display: !isMoved && 'none'}}/>
        <div className="container" ref={listRef}>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className='Arrows right'  onClick={()=>moveSlider("right")}/>
      </div>
    </div>
  )
}

export default List
