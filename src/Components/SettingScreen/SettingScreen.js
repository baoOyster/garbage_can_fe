import React from 'react';
import { useDispatch } from 'react-redux';
import { changeHomeSettingState } from '../../features/homeOrSettingSlice';
import { changeLoginState } from '../../features/loginStateSlice';
import './SettingScreen.css';

const SettingScreen = () => {
    const dispatch = useDispatch();
    dispatch(changeLoginState(true));
    dispatch(changeHomeSettingState());
    return (
        <div className='setting'></div>
    )
}

export default SettingScreen