import { configureStore } from "@reduxjs/toolkit";
import ToggleReducer from './toggleSlice'
const appStore = configureStore({
    reducer:{
       Toggle:ToggleReducer,
    }
})
export default appStore