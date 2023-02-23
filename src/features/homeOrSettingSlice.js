import { createSlice } from "@reduxjs/toolkit";

const homeOrSettingSlice = createSlice({
    name: 'homeOrSetting',
    initialState: {homeSettingState: true}, //true - home || false - setting
    reducers: {
        changeHomeSettingState: state => {
            if(state.homeSettingState) state.homeSettingState = false;
            else state.homeSettingState = true;
        }
    }
})

export default homeOrSettingSlice.reducer;
export const {changeHomeSettingState} = homeOrSettingSlice.actions;
export const selectHomeSettingState = state => state.homeOrSetting.homeSettingState;