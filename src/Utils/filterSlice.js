import { createSlice } from "@reduxjs/toolkit";


    const filterSlice = createSlice({

        name : "filter" , 

        initialState : {
           arr : "", 
        },

        reducers : {
           
            addData : (state,action) => { state.arr = action.payload } 
        }
    })


export const { addData } = filterSlice.actions ; 

export default filterSlice.reducer ; 