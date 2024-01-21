import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSlice"
import location from "./location";



const store=configureStore({

reducer:{
map:mapReducer,
location:location
}




})

export default store