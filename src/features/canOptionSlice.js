import { createSlice } from "@reduxjs/toolkit";

const canOptionSlice = createSlice({
    name: 'canOption',
    initialState: {
        id: "none",
        display: false
    },
    reducers: {
        changeDisplay: state => {
            if (state.display) {
                state.display = false;
            } else {
                state.display = true;
            }
        },
        changeId: (state, action) => {
            state.id = action.payload;
        }
    }
})

export default canOptionSlice.reducer;
export const {changeDisplay, changeId} = canOptionSlice.actions;
export const selectOptionDisplay = state => state.canOption.display;
export const selectCanId = state => state.canOption.id;