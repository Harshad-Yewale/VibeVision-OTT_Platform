import { useState , useEffect } from 'react'
import './Featured.scss'
import {PlayArrow, InfoOutlined} from '@mui/icons-material';
import axios from 'axios';
function Featured({type}) {

  const [content, setContent] = useState({});

  useEffect(() => {
    const getFeatured = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFeatured();
  } , [type]);
  console.log(content);
  
  return (
    <div className='featured'> 
    {type && (
      <div className="category">
        <span>{type === "Movie"? "Movie" : "Series"}</span>
        <select name='Genre' id='genre'>
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="rommance">Rommance</option>
          <option value="sci-Fi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
    )}    
    <div className="Container">
       <img  src={content.img} alt='banner' />
      <div className="info">
        <img src={content.imgTitle} alt="title" />
        <span className='desc'>
          {content.desc}
        </span>
        <div className="buttons">
          <button className='playButton'> <PlayArrow/> <span>Play Now</span></button>
          <button className='Info'><InfoOutlined/> <span>info</span> </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured
