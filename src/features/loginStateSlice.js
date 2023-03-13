import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api";

export const handleLogin = createAsyncThunk("loginState/handleLogin", 
    async ({username, password}) => {
    try {
        const res = await login(username, password);
        console.log(res.data);
        if(!res?.data) return false;
        if(res.data.success) return true;
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }

});

const loginStateSlice = createSlice({
    name: 'loginState',
    initialState: {
        status: 'idle', // idle / pending / fulfilled / rejected
        loginState: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(handleLogin.pending, state => {
            state.status = 'pending';
        })
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.loginState = action.payload;
        })
        builder.addCase(handleLogin.rejected, state => {
            state.status = 'rejected';
        })
    }
})

export default loginStateSlice.reducer;
export const selectLoginState = state => state.loginState.loginState;