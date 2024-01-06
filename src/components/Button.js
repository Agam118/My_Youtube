import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({name}) => {
  return (
    
    <button className="p-2 bg-gray-300 rounded-lg w-full mr-3 h-[40px] hover:bg-black hover:text-white">
    <Link to={`/results?search_query=${name}`}>
      {name}
    </Link>
    </button>
  
  );
}

export default Button ; 