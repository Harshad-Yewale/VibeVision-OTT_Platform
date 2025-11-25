import React ,{useState,useEffect}from 'react'
import { Link, useParams,} from "react-router-dom";
import "./List.scss";
import { Paper } from '@mui/material';
import "../contentList/ContentList"
import axios from 'axios';
import { ListContext } from '../../context/listContext/ListContext';
import { updateList } from '../../context/listContext/apiCalls';
import { useContext } from 'react';

function Products() {
  const { id } = useParams();  
  const [list, setList] = useState(null);
  const [updatedList, setUpdateList] = useState(null);
  const {dispatch}= useContext(ListContext)
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("/lists/find/"+id, {
          headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setList(res.data);
        setUpdateList(res.data);
      } catch (err) { 
        console.log(err);
      }
    }
    getList();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateList((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit=(e)=>{
     updateList(id,updatedList, dispatch)
  }
  if(list){
  return (
    <div className='Products'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newList" className='Link'>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <Paper  elevation={3} className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">{list.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">type:</span>
                      <span className="productInfoValue">{list.type}</span>
                  </div>
              </div>
          </div>
      </Paper>
      <Paper elevation={3} className="productBottom">
        <form className="productForm" onSubmit={handleSubmit}>
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" value={updatedList.title || ''} name="title" onChange={handleChange}  />
            <label>Type</label>
            <input type="text" value={updatedList.type || ''} name="year" onChange={handleChange}  />
            <label>Genre</label>
            <input type="text" value={updatedList.genre || ''} name="genre" onChange={handleChange}  />
            </div>
              <div className="productFormRight">
                  <button type='submit' className="productButton">Update</button>
              </div>
          </form>
      </Paper>
    </div>
  )
}
 }
export default Products
