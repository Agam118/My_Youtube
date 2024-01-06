import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {RemoveMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import ReactPlayer from 'react-player/youtube'
import { MY_API_KEY } from '../Utils/contants';
import WatchVideoInfo from './WatchVideoInfo';




// things to understand from this 

// if we click on watch page 
// my side bar should close 
// but do this only once 


const WatchPage = () => {

 // this specify work will be completed only once

  const [SearchParams] = useSearchParams() ; 

  const id = SearchParams.get("v") ; 

  const dispatch = useDispatch() ; 

  const [ videoInfo , setVideoInfo ] = useState()
  const [ channelInfo , setChannelInfo ] = useState()
  const [ tags, setTags ] = useState()


  useEffect(()=>{
	dispatch(RemoveMenu("a"))
	window.scrollTo(0,0)
	const getVideoInfoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${MY_API_KEY}`
	fetchVideoInfo(getVideoInfoUrl)
  },[id])

  const fetchVideoInfo = async(url) => {
	const data  = await fetch(url)
	const jsonData = await data.json()
	// console.log(jsonData?.items[0])
	setVideoInfo(jsonData?.items[0])
	setTags(jsonData?.items[0]?.snippet.tags)
	fetchChannelInfo(jsonData?.items[0]?.snippet?.channelId)
  }
  
  const fetchChannelInfo = async ( channelId ) => {
	const YOUTUBE_CHANNEL_INFO_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${MY_API_KEY}`
	const data = await fetch(YOUTUBE_CHANNEL_INFO_URL)
	const jsonData = await data.json()
	// console.log(jsonData?.items[0])
	setChannelInfo(jsonData?.items[0])
  }

  if(!tags || !videoInfo || !channelInfo) return null

  
  return (
    <div className="overflow-hidden">
    <div className="flex">
     <div className="w-[1200px] h-[600px]">
     <ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							controls
							width="100%"
							height="100%"
							style={{ backgroundColor: "#000000" }}
							playing={true}
						/>
      <WatchVideoInfo videoData={videoInfo} desc={videoInfo?.snippet?.description} channelInfo = {channelInfo}  />
      <CommentContainer />
      </div>
      <div>
      <LiveChat />
      </div>
     </div>
     
    </div>
  )
};

export default WatchPage