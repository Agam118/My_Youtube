import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({

     name : "app" , 

     initialState : {
         isMenuOpen : true , 
         charA : '' ,
     }, 

     reducers : {
         
        toggleMenu : (state) =>{ 

            state.isMenuOpen = !state.isMenuOpen ; 
        },

        CloseMenu : (state) =>{  
            state.isMenuOpen = false ; 
        },

        RemoveMenu : (state,action) =>{ 
            state.charA = action.payload ; 
        }
     },

}) ; 

export const { toggleMenu , CloseMenu , RemoveMenu } = appSlice.actions ;
export default appSlice.reducer ;  

// fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=hello")




// decided to use redux 
// for global state management 

// download 
// reduxjs/toolkit 
// react-redux // breidge between react and redux 

// store // main object 
// configureStore 


// cartSlice // logical division of our section 
// creatSlice 