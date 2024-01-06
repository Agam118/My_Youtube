import React from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch , useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generate, generateSentence } from '../Helper';
import { useState , useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';


const List = () => {


  // Create API Polling 
  // i want to render it once 
  // so i use useeffect 

  const dispatch = useDispatch() ; 

  const [ change , changeValue] = useState("") ; 

  const selector = useSelector( (store) => store.chat.messages) ; 

  useEffect(()=>{

  // to create polling set interval 
  const i = setInterval(() => { 

      dispatch(
        addMessage({
        name : generate() , 
        message : generateSentence() , 
      })) ; 

   } , 600) ; 


   return () => clearInterval(i) ; 

  },[]) ; 


  return (
    <div>
    <div className="ml-2 p-2 border border-black font-bold shadow-md h-[500px] bg-gray-200 overflow-y-scroll flex flex-col-reverse">
     {
       selector.map((element,i) => (
           <ChatMessage key={i} name={element.name} message={element.message}/>
           ))
     }
   </div>
    <div className="overflow-hidden flex mt-1">
       <input type="text" className=" h-9 w-[500px] ml-2 mt-2 border border-neutral-950 shadow-md pl-2" value={change} onChange={(e) => { changeValue(e.target.value)}}/>
       <button className="bg-amber-500  w-[50px] p-1 ml-2 mt-2 cursor-pointer from-neutral-50 rounded-md shadow-lg" 
       onClick={(e) => { 
        
        e.preventDefault() ; 
        
        dispatch(
        addMessage({
        name : "Agam" , 
        message : change , 
      })); 
      changeValue("") ; }}><FaPaperPlane className="ml-3"></FaPaperPlane>
      </button>
    </div>
    </div>
  )
}

export default List