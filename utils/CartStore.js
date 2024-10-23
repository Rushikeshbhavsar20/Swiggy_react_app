import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
const Cartstore = configureStore({
      reducer:{
        mycart:cartReducer,
      }
});


export default Cartstore