import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

      name : "search" , 

      initialState : {
         
      }, 

      reducers : {
         
          searchCatche :  ( state , action) => { 
              
               state : Object.assign( state , action.payload); 
               // assign will merge 2 obejcts and create single objects 
           } 
      }

}) 

export const {searchCatche} = searchSlice.actions ; 

export default searchSlice.reducer ; 