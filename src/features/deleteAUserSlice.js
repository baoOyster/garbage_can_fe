import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../api";

export const handleDeleteAUser = createAsyncThunk('deleteUser/handleDeleteAUser', async () => {
    try {
        const res = await deleteUser();
        console.log(res);
        if(res.status === 204) return true;
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
});

const deleteUserSlice = createSlice({
    name: 'deleteUser',
    initialState: {
        status: 'idle', // idle / pending / fulfilled / rejected
        deleteAUserState: false
    },
    reducers: {
        changeDeleteAUserState: (state, action) => {
            state.deleteAUserState = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(handleDeleteAUser.pending, state => {
            state.status = 'pending';
        })
        builder.addCase(handleDeleteAUser.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.deleteAUserState = action.payload;
        })
        builder.addCase(handleDeleteAUser.rejected, state => {
            state.status = 'rejected';
        }) 
    }
})

export default deleteUserSlice.reducer;
export const {changeDeleteAUserState} = deleteUserSlice.actions;
export const selectDeleteAUserState = state => state.deleteAUser.deleteAUserState;