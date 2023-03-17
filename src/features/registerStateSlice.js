import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "../api";
import { setCookie } from "../utils/cookie";

export const handleRegister = createAsyncThunk(
    'registerState/handleRegister', 
    async({username, password}) => {
        try {
            const res = await register(username, password);
            console.log(res.data);
            if(!res?.data) return false;
            setCookie('jwt', res.data.token, 1);
            if(res.data.success) return true;
            return false
        } catch (error) {
            console.log(error);
            return false;
        }
    });

const registerStateSlice = createSlice({
    name: 'registerState',
    initialState: {
        status: 'idle', // idle / pending / fulfilled / rejected
        registerState: false
    },
    reducers: {},
    extraReducers: builder => {
        
        builder.addCase(handleRegister.pending, state => {
            state.status = 'pending';
        })

        
        builder.addCase(handleRegister.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.registerState = action.payload;
        })


        builder.addCase(handleRegister.rejected, state => {
            state.status = 'rejected';
        })

    }
})

export default registerStateSlice.reducer;
export const selectRegisterState = state => state.registerState.registerState;