import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <>
    <div className="flex p-2">
    <img
        className="w-8 h-8"
        alt="profile-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
     <div className="ml-2 flex">
     <div className="pr-2">{name}</div>
     <div className="font-normal">{message}</div>
     </div>
    </div>
    </>
  )
}

export default ChatMessage