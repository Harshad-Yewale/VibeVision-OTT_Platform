import { useState , useEffect } from 'react'
import './Featured.scss'
import {PlayArrow, InfoOutlined} from '@mui/icons-material';
import axios from 'axios';
import {Link} from "react-router-dom"
import WatchPage from "../../pages/WatchPage/WatchPage.jsx"
function Featured({type, setGenre}) {

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
  
  if (movie) {
  return (
   
    <div className='featured'> 
    {type && (
      <div className="category">
        <span>{type === "Movie"? "Movie" : "Series"}</span>
        <select name='Genre' id='genre' onChange={e=>setGenre(e.target.value) }>
          <option value="All">All</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
          <option value="animation">Animation</option>
        </select>
      </div>
    )}    
    <div className="Container">
       <img  src={`http://localhost:8080/${movie.img}`} alt='banner' />
      <div className="info">
        <img src={`http://localhost:8080/${movie.imgTitle}`} alt="title" />
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
else {
  return <div className="nofeatured">NOTHING TO SHOW  :(</div>
}
}

export default Featured
