import React from 'react'
import { Link } from "react-router-dom";
import "./Products.scss";
import Chart from "../../Components/Chart/Chart"
import {ProductsData} from "../../dummyData/DummyData"
import { Publish } from "@mui/icons-material";
import { Paper } from '@mui/material';

function Products() {
  return (
    <div className='Products'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/NewProduct" className='Link'>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <Paper  elevation={3} className="productTop">
          <div className="productTopLeft">
              <Chart data={ProductsData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="../../../images/profile.jpg" alt="logo" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </Paper>
      <Paper elevation={3} className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="../../../images/profile.jpg" alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </Paper>
      
    </div>
  )
}

export default Products
