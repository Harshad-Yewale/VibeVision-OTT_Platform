import React, {useState} from 'react'
import "./ProductList.scss"
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import { Productrows } from '../../dummyData/DummyData.jsx'
import { DeleteOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'


function ProductList() {
  const [data, setData]= useState(Productrows)
    const handleData=(id)=>{
      setData(data.filter( item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Name', headerName: 'Name', width: 180, renderCell:(params)=>{
          return (
            <div className="ProductListUser">
            <img src={params.row.Img} alt=""/>
            {params.row.Name}
            </div>)
        }},
        { field: 'Stock', headerName: 'Stocks', width: 170 },
        {
          field: 'Status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'Price',
          headerName: 'Price',
          width: 130,
        },
        {
          field: 'Actions',
          headerName: 'Actions',
          width: 130,
          renderCell:(params)=>{
            return(
              <div className="ProductListAction">
                <Link to={"/Product/"+params.row.id}>
                <button className="ProductEditBtn">Edit</button>
                </Link> 
                <DeleteOutline className="ProductDelBtn" onClick={()=>{handleData(params.row.id)}}/>
              
              </div>
            )
          }
        },
        
      ];


  return (
    <div className='ProductList'>
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

export default ProductList
