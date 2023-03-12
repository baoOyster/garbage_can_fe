/*
  Vì tôi chưa có hoàn thiện xong phần server nên chưa có thể nào hoàn thiện xong phần chuyển giao
  giữa trang home và setting một cách hoàn chỉnh và vì vậy tôi sẽ sửa nó sau
*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeShowMode, getCanData, selectGCData, selectShowMode } from '../../features/garbageCanDataSlice';
import { changeHomeSettingState } from '../../features/homeOrSettingSlice';
import { changeLoginState } from '../../features/loginStateSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const garbageCansData = useSelector(selectGCData);
  const showMode = useSelector(selectShowMode);
  const hiddenMenu = document.querySelector('.hiddenMenu');

  function referShowMode(){
    if(showMode == "everything"){
      return garbageCansData.map((box, index) => <div key={index} className='trashBlock'>
      {box.isFull && <div className='fullTrash trashBlockIcon'></div>}
      {box.isFull && <h2>Đầy</h2>}
      {!box.isFull && <div className='emptyTrash trashBlockIcon'></div>}
      {!box.isFull && <h2>Rỗng</h2>}
      {`#${index}`}
    </div>)
    }else if(showMode == "empty"){
      return garbageCansData.map((box, index) => {
      if(!box.isFull){
        return (<div key={index} className='trashBlock'>
          <div className='emptyTrash trashBlockIcon'></div>
          {`#${index}`}
        </div>)
      }
      })
    }else{
      return garbageCansData.map((box, index) => {
        if(box.isFull){
          return (<div key={index} className='trashBlock'>
            <div className='fullTrash trashBlockIcon'></div>
            {`#${index}`}
          </div>)
        }
        })
    }
  }

  function showModeVietText() {
    if(showMode == "everything"){
      return "Toàn bộ"
    }else if(showMode == "empty"){
      return "Rỗng"
    }else{
      return "Đầy"
    }
  }

  useEffect(() => {
    dispatch(changeLoginState(true));
    dispatch(changeHomeSettingState(true));
    dispatch(getCanData())
  }, [])

  // const garbageCansData = null;
  return (
    <div className='home'>
      {garbageCansData.length <= 0 && <div className='emptyScreen'>
        <h1>BẠN CHƯA CÓ THÙNG RÁC NÀO...</h1>
        <div className="trashBlock">
          <div className='addIcon trashBlockIcon'></div>
          Thêm thùng rác  
        </div>
        <h3 className='underlinedBtn'>Hướng dẫn sử dụng</h3>  
      </div>}
      {garbageCansData.length > 0 && <div className='cansDataScreen'>
        <div className='cansDataScreenLeft'>
          {referShowMode()}
          <div className="trashBlock">
            <div className='addIcon trashBlockIcon'></div>
            Thêm thùng rác  
        </div>
        </div>
        <div className='cansDataScreenRight'>
          <div className="showMode">{showModeVietText()} <div className='showAllIcon'></div></div>
          <div className="hiddenMenu">
            <div className="cansMode underlinedBtn" onClick={() => {dispatch(changeShowMode('everything'))}}>Toàn bộ</div>
            <div className="cansMode underlinedBtn" onClick={() => {dispatch(changeShowMode('empty'))}}>Rỗng</div>
            <div className="cansMode underlinedBtn" onClick={() => {dispatch(changeShowMode('full'))}}>Đầy</div>
          </div>
          <h3 className='underlinedBtn' onClick={() => {navigate('/setting', {replace: true})}}>Hướng dẫn sử dụng</h3>
        </div>
      </div>}
    </div>
  )
}

export default Home