import React from 'react'
import Button from './Button'

const list = ["All" , "Mixes" , "Music" , "JavaScript","ComputerScience" , "BollywoodMusic" , "Mantras","Lofi","IndianpopMusic","Soundtracks","Motivation","Podcasts","React.js","Node.js"] ;

const ButtonList = () => {
 
  return (
      <div className="flex w-[100%]">
      {
        list.map((arr) => { return <Button name={arr} />})
      }
      </div>
  );
}

export default ButtonList