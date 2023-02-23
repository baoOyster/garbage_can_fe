import React from 'react';
import { useDispatch } from 'react-redux';
import { changeHomeSettingState } from '../../features/homeOrSettingSlice';
import { changeLoginState } from '../../features/loginStateSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(changeLoginState(true));
  dispatch(changeHomeSettingState(true));
  return (
    <div className='home'></div>
  )
}

export default Home