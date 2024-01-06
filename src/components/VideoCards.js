import React from 'react'

const VideoCards = ({info}) => {

  const  { snippet , statistics} = info ; 
  const { channelTitle , title , thumbnails } = snippet ; 

  return (
    <div className="p-2 mt-5 ml-2  mr-4  w-72 ">
       <img alt="thumbnail" src = {thumbnails.medium.url} />
       <ul>
         <li className="font-bold">{title}</li>
         <li className="text-sm">{channelTitle}</li>
         <li>{statistics.viewCount} views</li>
       </ul>
    </div>
  )
}

export default VideoCards