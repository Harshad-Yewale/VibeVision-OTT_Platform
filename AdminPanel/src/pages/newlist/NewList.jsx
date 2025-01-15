import React, { useState,useEffect } from 'react';
import './NewList.scss';
import {  getMovies } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { createList } from '../../context/listContext/apiCalls';
import { useNavigate } from 'react-router-dom';

function NewList() {
  const [list, setList] = useState(null);
  const Navigate=useNavigate();

  const {dispatch}= useContext(ListContext)
  const {movies,dispatch: movieDispatch}=useContext(MovieContext)

  useEffect(()=>{
    getMovies(movieDispatch)
  },[movieDispatch])

  const handleSelect = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    console.log(selectedValues)
    setList((prev) => ({
      ...prev,
      content: selectedValues,
    }));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };



  const handleSubmit=(e)=>{
    createList(list,dispatch)
    Navigate("/contentlists")
  }
  

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formleft">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Avengers" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label> MovieList Or SeriesList</label>
          <select name="type" id="type"  onChange={handleChange}>
            <option >Type</option>
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
          </div>
          </div>
          <div className="formright">
          <div className="addProductItem">
          <label>Content(press Ctrl and select options)</label>
          <select multiple name="content" id="content" className='content' onChange={handleSelect}>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default NewList;
