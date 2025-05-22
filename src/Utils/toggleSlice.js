import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:"Toggle",
    initialState:{
        theme:false},
    reducers:{
        changeTheme : (state) =>{
            state.theme = !state.theme
        }
    }
})
export const {changeTheme} = toggleSlice.actions
export default toggleSlice.reducer