import React, { useState } from 'react'
import './UsersList.scss'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import { Userrows } from '../../dummyData/DummyData.jsx'
import { DeleteOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'


function UsersList() {
  const [data, setData]= useState(Userrows)
  const handleData=(id)=>{
    setData(data.filter( item=>item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'User', headerName: 'User', width: 130, renderCell:(params)=>{
      return (
        <div className="UserListUser">
        <img src={params.row.Avatar} alt=""/>
        {params.row.Username}
        </div>)
    }},
    { field: 'Email', headerName: 'Email', width: 170 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'Transaction',
      headerName: 'Transaction',
      width: 130,
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 130,
      renderCell:(params)=>{
        return(
          <div className="UserListAction">
            <Link to={"/User/"+params.row.id}>
            <button className="UserEditBtn">Edit</button>
            </Link> 
            <DeleteOutline className="UserDelBtn" onClick={()=>{handleData(params.row.id)}}/>
          
          </div>
        )
      }
    },
    
  ];
  return (
    <div className='UserList'>
      <Paper sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
      </Paper>
    </div>
  )
}

export default UsersList
