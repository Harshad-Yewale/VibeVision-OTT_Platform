import { useState , useEffect } from 'react'
import './Featured.scss'
import {PlayArrow, InfoOutlined} from '@mui/icons-material';
import axios from 'axios';
import {Link} from "react-router-dom"
import WatchPage from "../../pages/WatchPage/WatchPage.jsx"
function Featured({type},{setGenre}) {

  const [movie, setmovie] = useState({});

  useEffect(() => {
    const getFeatured = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`);
        setmovie(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFeatured();
  } , [type]);
  
  
  return (
    <div className='featured'> 
    {type && (
      <div className="category">
        <span>{type === "Movie"? "Movie" : "Series"}</span>
        <select name='Genre' id='genre' onChange={e=>setGenre(e.target.value) }>
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
       <img  src={movie.img} alt='banner' />
      <div className="info">
        <img src={movie.imgTitle} alt="title" />
        <span className='desc'>
          {movie.desc}
        </span>
        <div className="buttons">
         <Link to="/watchPage" state={{ movie }} className="Link">
          <button className='playButton'> <PlayArrow/> <span>Play Now</span></button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured
