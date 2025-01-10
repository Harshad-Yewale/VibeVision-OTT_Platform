import React, { useEffect,useState } from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/Featured/Featured';
import List from '../../Components/List/List';
import axios from 'axios';

function Home({type}) {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type:""}${genre ? "&genre=" + genre: ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2U4NmI4N2U5MmVjM2FiN2RhMDljMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjQxMjcwMiwiZXhwIjoxNzM2ODQ0NzAyfQ.-Sd2YSi4b0u9F1aLrKb5ujf-t7nURflb_vH70e9zKuk "
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
      <Featured type={type} />
      {lists.map((list) => (
      <List key={list.id} list={list} />
      ))}
    </div>
    

    
  )
}

export default Home
