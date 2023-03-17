import { createSlice } from "@reduxjs/toolkit";

const addCanSlice = createSlice({
    name: "addCan",
    initialState: {
        display: false
    },
    reducers: {
        changeDisplay: state => {
            if (state.display) {
                state.display = false;
            } else {
                state.display = true;
            }
        }
    }
})

export default addCanSlice.reducer;
export const {changeDisplay} = addCanSlice.actions;
export const selectAddCanDisplay = state => state.addCan.display;