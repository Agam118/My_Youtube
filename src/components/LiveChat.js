import List from "./List"
import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import {YOU_TUBE_DATA} from "../Utils/contants"
import VideoContainerForWatchPage from "./VideoContainerForWatchPage"



const LiveChat = () => {

  
  const [ set , setShow] = useState(false) ; 
  const [ videos , setVideos] = useState([]) ; 
 
  // Create API Polling 
  // i want to render it once 
  // so i use useeffect 

  useEffect(()=>{
      
    handler() ; 

  },[]) ; 

  async function handler()
  {
      const data = await fetch(YOU_TUBE_DATA) ; 

      const json = await data.json() ; 
      
      setVideos(json.items) ; 
  }

  return (
    <div className="w-[500px]"> 
    <div className="flex h-[8%] cursor-pointer" onClick={() => {setShow(!set)}}>
        <img
            className="w-10 h-8 px-1 ml-3 mb-1"
            alt="chat-icon"
            src="https://www.svgrepo.com/show/529481/chat-round-dots.svg"
          /> 
        <span className="font-bold text-xl">Live Chat</span>
    </div>
    {
       set && <List /> 
    }

    <div className="m-8">
    {
        videos.map( ( info ) => { return <Link to={"/watchpage?v="+info.id}><VideoContainerForWatchPage key={info.id} info={info}/></Link>})  
     }
     </div>
 
    </div>
  )
}

export default LiveChat