import { configureStore } from '@reduxjs/toolkit';
import loginState from './loginStateSlice';
import homeOrSetting from './homeOrSettingSlice';
import garbageCanData from './garbageCanDataSlice';
import registerState from './registerStateSlice';

export const store = configureStore({
  reducer: {
    loginState,
    homeOrSetting,
    garbageCanData,
    registerState
  },
});
