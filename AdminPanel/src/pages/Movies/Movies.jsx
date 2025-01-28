import React ,{useState,useEffect}from 'react'
import { Link, useParams,} from "react-router-dom";
import "./Movies.scss";
import { Paper } from '@mui/material';
import "../MovieList/MovieList"
import axios from 'axios';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { updateMovie  } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';

function Movies() {
    const { id } = useParams();  
  const [movie, setMovie] = useState(null);
  const [updatedMovie, setUpdateMovie] = useState(null);
  const {dispatch}= useContext(MovieContext)
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/"+id, {
          headers: {
            token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
        setUpdateMovie(res.data);
      } catch (err) { 
        console.log(err);
      }
    }
    getMovie();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(updatedMovie)

  const handleSubmit=(e)=>{
     updateMovie(id,updatedMovie, dispatch)
  }

  if(movie){
  return (
    
    <div className='movies'>
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie/Series</h1>
        <Link to="/NewMovie" className='Link'>
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <Paper  elevation={3} className="movieTop">
          <div className="movieTopRight">
              <div className="movieInfoTop">
                  <img src={ `/images/${movie.imgSm}`} alt="movie Img" className="movieInfoImg" />
                  <span className="movieName">{movie.title}</span>
              </div>
              <div className="movieInfoBottom">
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">id:</span>
                      <span className="movieInfoValue">{movie._id}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">Genre:</span>
                      <span className="movieInfoValue">{movie.genre}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">Limit:</span>
                      <span className="movieInfoValue">{movie.limit}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">is_Series:</span>
                      <span className="movieInfoValue">{movie.isSeries?"yes":"no"}</span>
                  </div>
              </div>
          </div>
      </Paper>
      <Paper elevation={3} className="movieBottom">
        <form className="movieForm" onSubmit={handleSubmit}>
          <div className="movieFormLeft">
            <label>Movie Title</label>
            <input type="text" value={updatedMovie.title || ''} name="title" onChange={handleChange} />
            <label>Description</label>
            <input type="text" value={updatedMovie.desc || ''} name="desc" onChange={handleChange} />
            <label>Year</label>
            <input type="text" value={updatedMovie.year || ''} name="year" onChange={handleChange} />
            <label>Genre</label>
            <input type="text" value={updatedMovie.genre || ''} name="genre" onChange={handleChange} />
            <label>Limit</label>
            <input type="text" value={updatedMovie.limit || ''} name="limit" onChange={handleChange}/>
             <label>Duration</label>
            <input type="text" value={updatedMovie.duration || ''} name="duration" onChange={handleChange} />
              <label>isSeries ?</label>
              <select name="isSeries" id="isSeries" onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            <label>Trailer</label>
            <input type="text" value={updatedMovie.trailer || ''} name="trailer" onChange={handleChange} />
            <label>Video</label>
            <input type="text" value={updatedMovie.video || ''} name="video" onChange={handleChange} />
            </div>
              <div className="movieFormRight">
                  <div className="movieUpload">
                      <img src={`/images/${movie.img}`} alt="" className="movieUploadImg" />
                      <label htmlFor="file">
                      </label>
                      <input type="text" placeholder='movie Banner' name='img'  onChange={handleChange} />
                  </div>
                  <div className="movieUpload">
                      <img src={`/images/${movie.imgTitle}`} alt="" className="movieUploadImg" />
                      <label htmlFor="file">
                      </label>
                      <input type="text" placeholder='movie title' name='imgTitle'  onChange={handleChange} />
                  </div>
                  <div className="movieUpload">
                      <img src={`/images/${movie.imgSm}`} alt="" className="movieUploadImg" />
                      <label htmlFor="file">
                      </label>
                      <input type="text" placeholder='movieposter' name='imgSm' onChange={handleChange} />
                  </div>
                  <button type='submit' className="movieButton">Update</button>
              </div>
          </form>
      </Paper>
      
    </div>

  )
  
}
 }

export default Movies
