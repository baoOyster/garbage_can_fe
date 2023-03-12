import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../api";

const getCanData = createAsyncThunk('garbageCanData/getCanData', async() => {
    const res = await fetchData();
    console.log(res.data);
    return res.data;
});

const garbageCanDataSlice = createSlice({
    name: "garbageCanData",
    initialState: {
        status: 'idle', // idle / pending / fulfilled / rejected
        result: [],
        showMode: "everything" // everything / empty / full
    },
    reducers: {
        changeShowMode: (state, action) => {
            state.showMode = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(getCanData.pending, state => {
            state.status = 'pending';
        });
        builder.addCase(getCanData.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.result = action.payload;
        });
        builder.addCase(getCanData.rejected, (state, action) => {
            state.status = 'rejected';
            console.log(action.payload);
        });
    }
});

export default garbageCanDataSlice.reducer;
export const selectGCData = state => state.garbageCanData.result;
export const selectShowMode = state => state.garbageCanData.showMode;
export const {changeShowMode} = garbageCanDataSlice.actions;
export {getCanData};
