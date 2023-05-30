/*
  Vì tôi chưa có hoàn thiện xong phần server nên chưa có thể nào hoàn thiện xong phần chuyển giao
  giữa trang home và setting một cách hoàn chỉnh và vì vậy tôi sẽ sửa nó sau
*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCanData, selectGCData } from '../../features/garbageCanDataSlice';
import { changeHomeSettingState } from '../../features/homeOrSettingSlice';
import DataScreen from './DataScreen';
import EmptyScreen from './EmptyScreen';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const garbageCansData = useSelector(selectGCData)

  useEffect(() => {
    dispatch(changeHomeSettingState(true));
    dispatch(getCanData())
  }, [])

  if(garbageCansData == "error") navigate('/garbage_can_fe/login', { replace: true });

  // const garbageCansData = null;
  return (
    <div className='home'>
      {garbageCansData.length <= 0 && <EmptyScreen />}
      {garbageCansData.length > 0 && <DataScreen />}
    </div>
  )
}

export default Home