import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOU_TUBE_DATA } from '../Utils/contants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Filter(names , videos)
{  
    // there is list of 7 restraunt it will return list containing  name as searchInp   
       const no = videos ; 
        
        videos = videos.filter((info) => info.snippet.title.includes(names)) 

        console.log(names) ; 

        if(videos.length == 0)
        {
           return no ; 
        }

        return videos ; 
}

const VideoContainer = () => {
   
  const [ videos , setVideos] = useState([]) ; 

  const [ filtervideo , setFilterVideo] = useState([]) ; 

  const names = useSelector((store) => store.filter.arr) ; 

  useEffect(()=>{
     
    handler() ; 

  },[]) ; 

  async function handler()
  {
      const data = await fetch(YOU_TUBE_DATA) ; 

      const json = await data.json() ; 
      
      setVideos(json.items) ; 

      setFilterVideo(json.items) ; 

  }

   useEffect(
    () =>{   
    if(names != "")
    {
      setFilterVideo(Filter(names,videos)) ; 
    }
    else{
     setFilterVideo(videos) ; 
  }},[names]) 

    return (
      <div className="flex flex-wrap m-5">
      {   
          filtervideo.map( ( info ) => { return (
             <Link to={"/watchpage?v="+info.id}>
              <VideoCards key={info.id} info={info}/>
              </Link>
           )})  
       }
       </div>
    )

}


export default VideoContainer