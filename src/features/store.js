import { configureStore } from '@reduxjs/toolkit';
import loginState from './loginStateSlice';
import homeOrSetting from './homeOrSettingSlice';
import garbageCanData from './garbageCanDataSlice';

export const store = configureStore({
  reducer: {
    loginState,
    homeOrSetting,
    garbageCanData
  },
});
