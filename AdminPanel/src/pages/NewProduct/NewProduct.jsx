import React, { useState,useEffect } from 'react';
import './NewProduct.scss';

function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setter(file); // Update the state with the selected file
    }
  };

  useEffect(() => {
    if (img) {
      console.log('Image uploaded:', img);
    }
  }, [img]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={handleFileChange(setImage)} />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" name="imgTitle" onChange={handleFileChange(setImageTitle)} />
        </div>
        <div className="addProductItem">
          <label>Poster Image</label>
          <input type="file" id="imgSm" name="imgSm" onChange={handleFileChange(setImgSm)} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Avengers" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="desc" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="duration" name="duration" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input type="text" placeholder="Age limit" name="limit" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Trailer id</label>
          <input type="text" id="trailer" name="trailer" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Movie</label>
          <input type="file" id="video" name="video" onChange={handleFileChange(setVideo)} />
        </div>
        <div className="addProductItem">
          <label>Is Series</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
