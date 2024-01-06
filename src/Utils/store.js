// config my store
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import filterSlice from "./filterSlice";


const store = configureStore({
    
      reducer : {
        app : appSlice, 
        search : searchSlice,
        chat : chatSlice,
        filter : filterSlice,
      }
}) ; 

export default store ; 