import React, {useContext, useEffect} from 'react'
import "./MovieList.scss"
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import { DeleteOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'
import { MovieContext } from '../../context/movieContext/MovieContext.jsx';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls.js';


function MovieList() {
  

  const {movies,dispatch}=useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatch)
  },[dispatch])


  console.log(movies)
    const handleData=(item)=>{
        console.log(item._id)
        deleteMovie(item._id,dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'movie', headerName: 'Movies', width: 280, renderCell:(params)=>{
          return (
            <div className="MovieListUser">
            <img src={`/images/${params.row.imgSm}`} alt=""/>
            {params.row.title}
            </div>)
        }},
        { field: 'genre', headerName: 'Genre', width: 100 },
        { field: 'year', headerName: 'Year', width: 100 },
        { field: 'limit', headerName: 'Limit', width: 100 },
        { field: 'isSeries', headerName: 'IsSeries', width: 100 },
        {
          field: 'Actions',
          headerName: 'Actions',
          width: 130,
          renderCell:(params)=>{
            return(
              <div className="MovieListAction">
                <Link to={`/Movie/${params.row._id}`}>
                <button className="MovieEditBtn">Edit</button>
                </Link> 
                <DeleteOutline className="MovieDelBtn" onClick={()=>{handleData(params.row)}}/>
              
              </div>
            )
          }
        },
        
      ];


  return (
    <div className='MovieList'>
       <Paper sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={movies}
        disableRowSelectionOnClick
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowId={r=>r._id}
      />
      </Paper>
      
    </div>
  )
}

export default MovieList
