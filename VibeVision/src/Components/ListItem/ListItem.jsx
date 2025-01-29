import React, { useEffect , useState} from 'react'
import "./ListItem.scss"
import {PlayArrow, Add, ThumbUpOutlined, ThumbDownAltOutlined, ThumbUp , ThumbDown} from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem( {item}) {
  const [movie, setMovie] = useState({});
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false); 

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/"+item, {
          headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        
        setMovie(res.data);
      } catch (err) { 
        console.log(err);
      }
    }
    getMovie();
  }, [item]);

  if (!movie) {
    return <div className="ListItem"><h1>Loading...</h1></div>; 
  }

  const handleLike = () => {
      setLiked((prev) => !prev); 
      setDisliked(false); 
    };
  
    const handleDislike = () => {
      setDisliked((prev) => !prev); 
      setLiked(false); 
    };
 
  return (
    <div className='ListItem'>
      <img src={`http://localhost:8080/${movie.imgSm}`} alt='poster'/>
      <div className="item-info">
      <span className='title'>{movie.title}</span>
        <div className="icon">
          
        <Link to="/watchPage" state={{ movie }} className="Link">
          <PlayArrow/>
          </Link>
          <Add/>
          {liked ? (
            <ThumbUp onClick={handleLike} style={{ color: 'white', cursor: 'pointer' }} />
          ) : (
            <ThumbUpOutlined onClick={handleLike} style={{ cursor: 'pointer' }} />
          )}
          {disliked ? (
            <ThumbDown onClick={handleDislike} style={{ color: 'white', cursor: 'pointer' }} />
          ) : (
            <ThumbDownAltOutlined onClick={handleDislike} style={{ cursor: 'pointer' }} />
          )}
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className="limit">{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
          {movie.desc}
        </div>
        <div className="genere">{movie.genre}</div>
      </div>
    </div>
  )
}

export default ListItem
