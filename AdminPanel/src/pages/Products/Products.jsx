import React ,{useState,useEffect}from 'react'
import { Link, useParams,} from "react-router-dom";
import "./Products.scss";
import { Paper } from '@mui/material';
import "../ProductList/ProductList"
import axios from 'axios';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { updateMovie  } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';

function Products() {
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
    
    <div className='Products'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/NewProduct" className='Link'>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <Paper  elevation={3} className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movie.img} alt="movie Img" className="productInfoImg" />
                  <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{movie._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{movie.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Limit:</span>
                      <span className="productInfoValue">{movie.limit}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">is_Series:</span>
                      <span className="productInfoValue">{movie.isSeries?"yes":"no"}</span>
                  </div>
              </div>
          </div>
      </Paper>
      <Paper elevation={3} className="productBottom">
        <form className="productForm" onSubmit={handleSubmit}>
          <div className="productFormLeft">
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
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                      </label>
                      <input type="text" placeholder='movie Banner' name='img'  onChange={handleChange} />
                  </div>
                  <div className="productUpload">
                      <img src={movie.imgTitle} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                      </label>
                      <input type="text" placeholder='movie title' name='imgTitle'  onChange={handleChange} />
                  </div>
                  <div className="productUpload">
                      <img src={movie.imgSm} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                      </label>
                      <input type="text" placeholder='movieposter' name='imgSm' onChange={handleChange} />
                  </div>
                  <button type='submit' className="productButton">Update</button>
              </div>
          </form>
      </Paper>
      
    </div>

  )
  
}
 }

export default Products
