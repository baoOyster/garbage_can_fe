import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register } from "../api";

export const handleRegister = createAsyncThunk(
    'registerState/handleRegister', 
    async({username, password}) => {
        try {
            const res = await register(username, password);
            console.log(res.data);
            if(!res?.data) return false;
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
        
        builder.addCase(builder.pending, state => {
            state.status = 'pending';
        })

        
        builder.addCase(builder.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.registerState = action.payload;
        })


        builder.addCase(builder.rejected, state => {
            state.status = 'rejected';
        })

    }
})

export default registerStateSlice.reducer;
export const selectRegisterState = state => state.registerState.registerState;