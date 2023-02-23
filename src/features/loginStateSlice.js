import { createSlice } from "@reduxjs/toolkit";

const loginStateSlice = createSlice({
    name: 'loginState',
    initialState: {
        loginState: false
    },
    reducers: {
        changeLoginState: (state, action) => {
            state.loginState = action.payload;
        }
    }
})

export default loginStateSlice.reducer;
export const { changeLoginState } = loginStateSlice.actions;
export const selectLoginState = state => state.loginState.loginState;