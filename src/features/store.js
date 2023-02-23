import { configureStore } from '@reduxjs/toolkit';
import loginState from './loginStateSlice';
import homeOrSetting from './homeOrSettingSlice';

export const store = configureStore({
  reducer: {
    loginState,
    homeOrSetting
  },
});
