import React, { useState, useContext } from 'react';

import './NewMovie.scss';

import { createMovie } from '../../context/movieContext/apiCalls';

import { MovieContext } from '../../context/movieContext/MovieContext';


function NewMovie() {

  const [movie, setMovie] = useState({});

  const { dispatch } = useContext(MovieContext);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setMovie(prev => ({
      ...prev,
      [name]: value,
    }));

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    createMovie(movie, dispatch);

  };


  return (

    <div className="newMovie">

      <h1 className="addMovieTitle">New Movie</h1>

      <form className="addMovieForm" onSubmit={handleSubmit}>

        <div className="addMovieItem">
          <label>Image</label>
          <input
            type="text"
            name="img"
            placeholder="Avengers-banner.jpg"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Title Image</label>
          <input
            type="text"
            name="imgTitle"
            placeholder="Avengers-title.jpg"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Poster Image</label>
          <input
            type="text"
            name="imgSm"
            placeholder="Avengers-poster.jpg"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Avengers"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="description"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="duration"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Year</label>
          <input
            type="text"
            name="year"
            placeholder="year"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="genre"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Age Limit</label>
          <input
            type="text"
            name="limit"
            placeholder="Age limit"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Trailer id</label>
          <input
            type="text"
            name="trailer"
            placeholder="your movie trailer id"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Movie</label>
          <input
            type="text"
            name="video"
            placeholder="video path"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Is Series</label>
          <select
            name="isSeries"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="addMovieButton"
        >
          Create
        </button>

      </form>

    </div>

  );

}

export default NewMovie;
