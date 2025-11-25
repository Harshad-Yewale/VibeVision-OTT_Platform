import React, { useEffect,useState } from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/Featured/Featured';
import List from '../../Components/List/List';
import axios from 'axios';

function Home({type}) {

  const [lists, setLists] = useState([]);
  let [genre, setGenre] = useState(null);
  const user=JSON.parse(localStorage.getItem("user"))
  const username=user.username
  
  
  if (genre === "All" ) {
    setGenre(null)
  }
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type:""}${genre ? "&genre=" + genre: ""}`, {
          headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
          }
        });
        setLists(res.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getRandomLists();
  }, [type , genre]);

  return (
    <div className="home">
      <Navbar/>
      <Featured type={type} setGenre={setGenre} />
      {lists?lists.map((list) => (
          <List key={list.id} list={list} />
      )):"<h1>nothing to show</h1>"}
    </div>
  )
}

export default Home
