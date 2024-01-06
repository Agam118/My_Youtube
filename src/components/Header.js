import { useDispatch, useSelector } from "react-redux";
import { RemoveMenu, toggleMenu } from "../Utils/appSlice";
import { useState , useEffect } from "react";
import { searchCatche } from "../Utils/searchSlice";
import { addData } from "../Utils/filterSlice";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () =>{  
      
     const dispatch = useDispatch() ; 

     const [ val , changeVal] = useState("") ; 

     const [ showres , Setshowres] = useState(false) ; 

     const [bval , changebval] = useState([]) ; 

     const [ toggle , changeToggle] = useState("true") ;

     const [isListening, setIsListening] = useState(false);

     const newChar =  "b" ; 

     const toggleMenuHandler = () =>{ 
         
        dispatch(toggleMenu());
        dispatch(RemoveMenu(newChar)) ; 
        changeToggle(!toggle) ; 
     };
     
     const catche = useSelector( (store) => store.search) ; 

    const showbun = () =>{ 
      return (
      <img 
        className="h-11 pl-5 pt-3 cursor-pointer"
        alt ="menu" 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
        onClick={() => toggleMenuHandler()}>
      </img>
     ) ; 
    }

    const showcross = () =>{  
     return (
      <img
             className="h-9 pt-5 pl-5 cursor-pointer"
             alt = "cross" 
             src = "data:image/png;base64,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"
             onClick={() => toggleMenuHandler()}
       >
     </img>
    ); 
    }

    useEffect( () => { 
     
     const timer = setTimeout( () => {
      if(catche[bval])
      {
        changebval(catche[bval]) ; 
      }
      else
      {
        dataHandler() ; 
      }
    }
    , 200) ; 

     return () =>{ 
       clearTimeout(timer) ; 
     }

  },[val] ) ; 

  useEffect(() => {
    let recognition;

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const startListening = () => {
      recognition = new SpeechRecognition(); // for Webkit-based browsers
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        changeVal(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error(event.error);
        setIsListening(false);
      };

      recognition.start();
    };

    const stopListening = () => {
      recognition.stop();
      setIsListening(false);
    };

    if (isListening) {
      startListening();
    }
    }
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isListening]);

  async function dataHandler() 
  {
     const data = await fetch("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + val) ; 

     const json  = await data.json() ; 
     
     changebval(json[1]) ;

     dispatch(searchCatche(bval , json[1])) ; 
  }
  
    return ( 
         <div className="flex justify-between shadow-lg z-10 sticky  top-0 bg-white h-[64px]">
            <div className="flex">
              {toggle ? showbun() : showcross()} 
           <img
              className="h-14 cursor-pointer"
              alt = "logo" 
              src = "data:image/png;base64,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"
            >
           </img>
           </div>

           <div className="w-1/3">
           <div className=" mt-3 flex">
            <input className="px-5 w-[100%] border border-gray-400 hover:border-blue-800 rounded-l-full" type="text" value={val} 
            
            onChange={ (e) =>{     
                 changeVal(e.target.value) ; 
            }}
            
            onFocus = { 
              () => Setshowres(true)  
            }

            onBlur = {
               () => Setshowres(false)
            }
            
            /> 
           <button className="border border-gray-400 p-1 rounded-r-full" onClick={() => { changeVal("") }}><Link to={"/results?search_query="+val}>Search</Link></button>
           <div className="">
           <div className="cursor-pointer p-2 ml-3 rounded-full  bg-gray-300 " onClick={() =>{setIsListening(!isListening);}}>{!isListening ? <div className=""><FaMicrophone className="color-black"/></div>:<><div>
           <div className="bg-black w-[15px] h-[15px] rounded-full animate-ping"></div>
           </div></>}
           </div>
           </div>
           </div>
           { showres && <div className="fixed bg-white w-[29.4%] shadow-lg rounded-lg border border-gray-100">
             <ul>
              {
                   bval.map((ptr) => (
                     <li className="px-5 pt-2 hover:bg-gray-200">{ptr}</li>
               ))
              }
             </ul>
           </div>}
           </div>

           <img 
              className="h-10 pt-2"
              alt = "user"
              src = "data:image/png;base64,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"  
            >
           </img>

         </div>
        
      ) ; 
}

export default Header ; 

