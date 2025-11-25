import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react';
import "./WatchPage.scss";
import { useLocation, useNavigate } from 'react-router-dom';

function WatchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state.movie;
  let trailer="";
  let movieVideo="";
  if (movie.trailer===movie.video) {
     trailer = "https://www.youtube.com/embed/" + movie.trailer;
  }
  else{
    movieVideo=`http://localhost:8080/${movie.video}`;
  }
  
  return (
    <div className="WatchPage">
      <div className="back" onClick={() => navigate(-1)}> 
        <ArrowBackOutlined />
        Home
      </div>
      <h2 className='title'>Now Playing : {movie.title}</h2>
      <div className="video-container">
        {
          movieVideo?
          <video autoPlay progress controls src={movieVideo} className="video"></video>
        :
        <iframe
          width="100%"
          height="100%"
          src={`${trailer}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    }
      </div>
    </div>
  );
}

export default WatchPage;
