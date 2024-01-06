import React from 'react'

const VideoContainerForWatchPage = ({info}) => {
    const  { snippet , statistics} = info ; 
    const { channelTitle , title , thumbnails } = snippet ; 
  
    return (
      <div className="p-2 mt-3 w-[400px] shadow-lg">
         <img alt="thumbnail" src = {thumbnails.medium.url} className="w-[380px] mr-2"/>
         <div className="w-[400px]">
         <ul>
           <li className="font-bold">{title}</li>
           <li className="text-sm">{channelTitle}</li>
           <li>{statistics.viewCount} views</li>
         </ul>
         </div>
      </div>
    )
}

export default VideoContainerForWatchPage