import { createSlice } from "@reduxjs/toolkit";

const homeOrSettingSlice = createSlice({
    name: 'homeOrSetting',
    initialState: {homeSettingState: true}, //true - home || false - setting
    reducers: {
        changeHomeSettingState: (state, action) => {
            console.log(state.homeSettingState)
            state.homeSettingState = action.payload;
        }
    }
})

export default homeOrSettingSlice.reducer;
export const {changeHomeSettingState} = homeOrSettingSlice.actions;
export const selectHomeSettingState = state => state.homeOrSetting.homeSettingState;