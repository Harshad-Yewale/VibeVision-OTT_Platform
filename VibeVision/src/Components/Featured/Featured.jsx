import React from 'react'
import './Featured.scss'
import {PlayArrow, InfoOutlined} from '@mui/icons-material';
function Featured({type}) {
  
  return (
    <div className='featured'> 
    {type && (
      <div className="category">
        <span>{type === "Movies"? "Movies" : "Series"}</span>
        <select name='Genre' id='genre'>
          <option>Genre</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Horror">Horror</option>
          <option value="Rommance">Rommance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
          <option value="Drama">Drama</option>
          <option value="Documentary">Documentary</option>
        </select>
      </div>
    )}    
       <img  src='https://sm.mashable.com/mashable_in/seo/3/38983/38983_u23h.jpg' alt='banner' />
      <div className="info">
        <img src='../../../images/intersteller-tit.png' alt="title" />
        <span className='desc'>
        When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.
        </span>
        <div className="buttons">
          <button className='playButton'> <PlayArrow/> <span>Play Now</span></button>
          <button className='Info'><InfoOutlined/> <span>info</span> </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
