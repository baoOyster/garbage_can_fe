import { createSlice } from "@reduxjs/toolkit";

const userCredentialSlice = createSlice({
    name: 'userCredential',
    initialState: {
        display: false
    },
    reducers: {
        changeDisplay: state => {
            if (state.display){
                state.display = false;
            } else state.display = true;
        }
    }
})

export default userCredentialSlice.reducer;
export const {changeDisplay} = userCredentialSlice.actions;
export const selectUserCredentialDisplayState = state => state.userCredential.display;