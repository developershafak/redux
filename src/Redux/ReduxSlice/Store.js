import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter.Slice";
import PostalReducer from "./Postal.Slice";




const store = configureStore({
   reducer:{
    counter:CounterReducer,
    postal:PostalReducer,   
   }
   
})


export default store