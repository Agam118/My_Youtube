import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({

   name : "chat" , 

   initialState : {
    messages : [] ,
   }, 

   reducers : {
      
        addMessage : (state,action) => {
             state.messages.splice(20,1) ; 
             // only 10 will add after that remove one -- splice function 
             state.messages.unshift(action.payload) ; 
        },
   }

})

export const { addMessage} = chatSlice.actions ; 
export default chatSlice.reducer ; 