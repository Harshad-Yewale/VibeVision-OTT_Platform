import React ,{useState,useEffect}from 'react'
import { Link, useLocation, useParams,} from "react-router-dom";
import "./Products.scss";
import { Publish } from "@mui/icons-material";
import { Paper } from '@mui/material';
import "../ProductList/ProductList"
import axios from 'axios';

function Products() {
    const { id } = useParams();  
  const [movie, setMovie] = useState(null);

  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/"+id, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2U4NmI4N2U5MmVjM2FiN2RhMDljMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjQxMjcwMiwiZXhwIjoxNzM2ODQ0NzAyfQ.-Sd2YSi4b0u9F1aLrKb5ujf-t7nURflb_vH70e9zKuk",
          },
        });
        setMovie(res.data);
      } catch (err) { 
        console.log(err);
      }
    }
    getMovie();
  }, [id]);

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
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input type="text" placeholder={movie.title} />
                  <label>Year</label>
                  <input type="text" placeholder={movie.year} />
                  <label>Genre</label>
                  <input type="text" placeholder={movie.genre} />
                  <label>Limit</label>
                  <input type="text" placeholder={movie.limit} />
                  <label>trailer</label>
                  <input type="text" placeholder={movie.trailer} />
                  <label>video</label>
                  <input type="file" placeholder={movie.video} />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </Paper>
      
    </div>

  )
  
}
 }

export default Products
