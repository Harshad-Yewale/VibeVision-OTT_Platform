import React, { useState,useEffect } from 'react';
import './NewMovie.scss';
import { createMovie } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';

function NewMovie() {
  const [movie, setMovie] = useState(null);

  const {dispatch}= useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleSubmit=(e)=>{
    createMovie(movie,dispatch)

  }
  
  console.log(movie)

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input type="text" placeholder="Avengers-banner.jpg" name="img" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Title Image</label>
          <input type="text" placeholder='Avengers-title.jpg' name="imgTitle" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Poster Image</label>
          <input type="text" placeholder='Avengers-poster.jpg' name="imgSm" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input type="text" placeholder="Avengers" name="title" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Duration</label>
          <input type="text" placeholder="duration" name="duration" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Year</label>
          <input type="text" placeholder="year" name="year" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Age Limit</label>
          <input type="text" placeholder="Age limit" name="limit" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Trailer id</label>
          <input type="text" placeholder='your movie trailer id' name="trailer" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Movie</label>
          <input type="text" placeholder='video path'  name="video" onChange={handleChange} />
        </div>
        <div className="addMovieItem">
          <label>Is Series</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addMovieButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default NewMovie;
