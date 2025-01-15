import React, {useContext, useEffect, useState} from 'react'
import "./contentList.scss"
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import { DeleteOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'
import { ListContext } from '../../context/listContext/ListContext.jsx';
import { deleteList, getLists } from '../../context/listContext/apiCalls.js';


function ContentList() {
  

  const {lists,dispatch}=useContext(ListContext)

  useEffect(()=>{
    getLists(dispatch)
  },[dispatch])


  console.log(lists)
    const handleData=(item)=>{
      deleteList(item._id,dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 170 },
        { field: 'genre', headerName: 'Genre', width: 100 },
        { field: 'type', headerName: 'Type', width: 100 },
        {
          field: 'Actions',
          headerName: 'Actions',
          width: 130,
          renderCell:(params)=>{
            return(
              <div className="ProductListAction">
                <Link to={`/List/${params.row._id}`}>
                <button className="ProductEditBtn">Edit</button>
                </Link> 
                <DeleteOutline className="ProductDelBtn" onClick={()=>{handleData(params.row)}}/>
              
              </div>
            )
          }
        },
        
      ];


  return (
    <div className='ProductList'>
       <Paper sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={lists}
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

export default ContentList
