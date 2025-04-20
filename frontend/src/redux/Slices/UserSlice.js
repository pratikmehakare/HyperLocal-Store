import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(state,action) => {
            state.push(action.payload);
        },
        removeUser:(state,action) => {
            return state.filter((item) => item._id !== action.payload);
        },
    }
});

export const {addUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;