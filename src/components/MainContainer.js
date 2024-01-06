import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="w-[90%]">
    <div className=" p-2 sticky bg-white top-16">
    <ButtonList />
    </div>
    <VideoContainer />
    </div>
  )
}

export default MainContainer