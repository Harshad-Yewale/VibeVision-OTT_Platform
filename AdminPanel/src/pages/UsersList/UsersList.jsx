import React, { useContext, useEffect, useState } from 'react'
import './UsersList.scss'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import { DeleteOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserContext.jsx';
import { deleteUser, getUsers } from '../../context/UserContext/apiCalls.js';


function UsersList() {
  
  const { users, dispatch } = useContext(UserContext);
  console.log(users);

  useEffect(() => {
    console.log('Fetching users...');
    getUsers(dispatch);
  }, [dispatch]);

  const formattedUsers = users.map((user) => ({
    id: user._id,
    ...user,
  }));

  const handleData=(id)=>{
     deleteUser(id,dispatch)
  }



  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'User', headerName: 'User', width: 130, renderCell:(params)=>{
      return (
        <div className="UserListUser">
         <img src={params.row.Avatar|| "https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="} alt=""/> 
        {params.row.username}
        </div>)
    }},

    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'isAdmin', headerName: 'Admin?', width: 100,renderCell: (params) => {
      return <span>{params.row.isAdmin ? 'Yes' : 'No'}</span>;
      }
    },

    { field: 'createdAt', headerName: 'Register Date', width: 150,
      renderCell: (params) => {
      const date = new Date(params.row.createdAt);
      const formattedDate = date.toISOString().split('T')[0];
      return <span>{formattedDate}</span>;
    } },

    { field: 'updatedAt', headerName: 'Last Update Date', width: 150,
      renderCell: (params) => {
      const date = new Date(params.row.createdAt);
      const formattedDate = date.toISOString().split('T')[0];
      return <span>{formattedDate}</span>;
    } },
    
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 100,
      renderCell:(params)=>{
        return(
          <div className="UserListAction">
            {params.row.isAdmin ? " " :<DeleteOutline className="UserDelBtn" onClick={()=>{handleData(params.row.id)}}/>}
          </div>
        )
      }
    },
    
  ];
  return (
    <div className='UserList'>
      <Paper sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={formattedUsers}
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
