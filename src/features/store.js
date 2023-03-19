import { configureStore } from '@reduxjs/toolkit';
import loginState from './loginStateSlice';
import homeOrSetting from './homeOrSettingSlice';
import garbageCanData from './garbageCanDataSlice';
import registerState from './registerStateSlice';
import addCan from './addCanSlice';
import canOption from './canOptionSlice';
import userCredential from './userCredentialSlice';
import logoutState from './logoutStateSlice';
import deleteAUser from './deleteAUserSlice';

export const store = configureStore({
  reducer: {
    loginState,
    homeOrSetting,
    garbageCanData,
    registerState,
    addCan,
    canOption,
    userCredential,
    logoutState,
    deleteAUser
  },
});
