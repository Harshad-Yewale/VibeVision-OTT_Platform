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
