import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api";
import { setCookie } from "../utils/cookie";

export const handleLogin = createAsyncThunk("loginState/handleLogin", 
    async ({username, password}) => {
    try {
        const res = await login(username, password);
        console.log(res);
        if(!res?.data) return false;
        setCookie('jwt', res.data.token, 1);
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
    reducers: {
        changeLoginState: (state, action) => {
            state.loginState = action.payload;
        }
    },
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
export const {changeLoginState} = loginStateSlice.actions;
export const selectLoginState = state => state.loginState.loginState;