import React, { useContext, useEffect } from 'react'
import "./MovieList.scss"

import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { DeleteOutline } from "@mui/icons-material"

import { Link } from 'react-router-dom'

import { MovieContext } from '../../context/movieContext/MovieContext.jsx'
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls.js'


function MovieList() {

  const { movies, dispatch } = useContext(MovieContext)


  useEffect(() => {

    getMovies(dispatch)

  }, [dispatch])


  const handleDelete = (item) => {

    deleteMovie(item._id, dispatch)

  }


  const columns = [

    { field: '_id', headerName: 'ID', width: 200 },

    {
      field: 'movie',
      headerName: 'Movie',
      width: 280,

      renderCell: (params) => (

        <div className="MovieListUser">

          <img
            src={`/images/${params.row.imgSm}`}
            alt=""
          />

          {params.row.title}

        </div>

      )
    },

    { field: 'genre', headerName: 'Genre', width: 120 },

    { field: 'year', headerName: 'Year', width: 100 },

    { field: 'limit', headerName: 'Limit', width: 100 },

    { field: 'isSeries', headerName: 'Series', width: 100 },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,

      renderCell: (params) => (

        <div className="MovieListAction">

          <Link to={`/movies/${params.row._id}`}>

            <button className="MovieEditBtn">
              Edit
            </button>

          </Link>

          <DeleteOutline
            className="MovieDelBtn"
            onClick={() => handleDelete(params.row)}
          />

        </div>

      )
    }

  ]


  return (

    <div className='MovieList'>

      <Paper sx={{ height: 600, width: '100%' }}>

        <DataGrid

          rows={Array.isArray(movies) ? movies : []}

          columns={columns}

          getRowId={(row) => row._id}

          pageSizeOptions={[5, 10]}

          checkboxSelection

          disableRowSelectionOnClick

          sx={{ border: 0 }}

        />

      </Paper>

    </div>

  )

}

export default MovieList
