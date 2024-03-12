import React from 'react'
import { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";



const App = () => {
  const api = `AIzaSyB55gxMGXSrtf7WdrW1g_y_5idhl8Mx7Ls`
  const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB55gxMGXSrtf7WdrW1g_y_5idhl8Mx7Ls`
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");



  useEffect (()=>{
  async function data2 () {
      const name = await fetch(url)
      const num = await name.json()
      console.log(num)
      setData(num.items)

    }
    data2()
  },[])
  
  const mySearch = async()=>{
    const url2 =`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB55gxMGXSrtf7WdrW1g_y_5idhl8Mx7Ls&q=${search}`
    const name = await fetch(url2)
    const num = await name.json()
    console.log(num)
    setData(num.items)

  }
  
  return (
    <div>
    <nav>
    <div className='container'>
      <i><HiBars3/></i>
      <div className='you'>
        <img src="public/image1-removebg-preview.png" alt="" />
        <h1>YouTube</h1>
      </div>
      <div className='main'>
      <div className='item'>
        <input placeholder='Search' type="text" onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={mySearch}><IoIosSearch fontSize={20} style={{background:'transparent'}}/></button>    
      </div>
      <div className='icon'>
        <i><MdKeyboardVoice fontSize={25} style={{background:'transparent'}}/></i>
        
      </div>
      </div>
      <div className='icon1'>
      <i><MdOutlineVideoCall fontSize={30} style={{background:'transparent'}}/></i>
      <i><FaRegBell /></i>
      <h1>H</h1>
      </div>
    </div>
    </nav>


  <div className='main1'> 
    <div className='menu'>
      <p><MdHomeFilled fontSize={20}/>Home</p>
      <p><SiYoutubeshorts fontSize={20}/>Shorts</p>
      <p><MdOutlineSubscriptions fontSize={20}/>Subscriptions</p>
      <p><MdOutlineVideoLibrary fontSize={20}/>You</p>
    </div>


      <div className='mainitem'>
      {data.map((e)=>{
        const {snippet} = e
        return(
          <>
          <div className='item1'>
          <img src={snippet.thumbnails.default.url} alt="" />
          <h1>{snippet.title}</h1>
          <p>{snippet.description}</p>
          </div>

          </>
        )
      })}
      </div> 
      </div>


    </div>
  )
}

export default App
