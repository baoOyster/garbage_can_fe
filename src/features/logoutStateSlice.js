import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logout } from "../api";

export const handleLogout = createAsyncThunk('logout/handleLogout', async () => {
    try {
        const res = await logout();
        console.log(res);
        if(res.status = 204) return true;
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
});

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        status: 'idle', // idle / pending / fulfilled / rejected
        logoutState: false
    },
    reducers: {
        changeLogoutState: (state, action) =>{
            state.logoutState = action.payload;
        } 
    },
    extraReducers: builder => {
        builder.addCase(handleLogout.pending, state => {
            state.status = 'pending';
        })
        builder.addCase(handleLogout.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.logoutState = action.payload;
        })
        builder.addCase(handleLogout.rejected, state => {
            state.status = 'rejected';
        }) 
    }
})

export default logoutSlice.reducer;
export const {changeLogoutState} = logoutSlice.actions;
export const selectLogoutState = state => state.logoutState.logoutState;