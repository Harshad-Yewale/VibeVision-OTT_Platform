import React, { useState, useEffect, useContext } from 'react';

import './NewList.scss';

import { getMovies } from '../../context/movieContext/apiCalls';

import { MovieContext } from '../../context/movieContext/MovieContext';

import { ListContext } from '../../context/listContext/ListContext';

import { createList } from '../../context/listContext/apiCalls';

import { useNavigate } from 'react-router-dom';


function NewList() {

  const [list, setList] = useState({});

  const navigate = useNavigate();

  const { dispatch } = useContext(ListContext);

  const { movies, dispatch: movieDispatch } = useContext(MovieContext);


  useEffect(() => {

    getMovies(movieDispatch);

  }, [movieDispatch]);


  const handleSelect = (e) => {

    const selectedValues = Array.from(
      e.target.selectedOptions
    ).map(option => option.value);


    setList(prev => ({
      ...prev,
      content: selectedValues,
    }));

  };


  const handleChange = (e) => {

    const { name, value } = e.target;

    setList(prev => ({
      ...prev,
      [name]: value,
    }));

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    createList(list, dispatch);

    navigate("/contentlists");

  };


  return (

    <div className="newProduct">

      <h1 className="addProductTitle">New List</h1>

      <form className="addProductForm" onSubmit={handleSubmit}>

        <div className="formleft">

          <div className="addProductItem">

            <label>Title</label>

            <input
              type="text"
              name="title"
              placeholder="Avengers"
              onChange={handleChange}
              required
            />

          </div>


          <div className="addProductItem">

            <label>Genre</label>

            <input
              type="text"
              name="genre"
              placeholder="genre"
              onChange={handleChange}
              required
            />

          </div>


          <div className="addProductItem">

            <label>MovieList Or SeriesList</label>

            <select
              name="type"
              onChange={handleChange}
              required
            >

              <option value="">Select Type</option>

              <option value="Movie">Movie</option>

              <option value="Series">Series</option>

            </select>

          </div>

        </div>


        <div className="formright">

          <div className="addProductItem">

            <label>
              Content (press Ctrl and select options)
            </label>

            <select
              multiple
              name="content"
              className="content"
              onChange={handleSelect}
            >

              {Array.isArray(movies) &&
                movies.map(movie => (

                  <option
                    key={movie._id}
                    value={movie._id}
                  >
                    {movie.title}
                  </option>

                ))
              }

            </select>

          </div>

        </div>


        <button
          type="submit"
          className="addProductButton"
        >
          Create
        </button>

      </form>

    </div>

  );

}

export default NewList;
