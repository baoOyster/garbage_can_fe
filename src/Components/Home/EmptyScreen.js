import React from 'react'
import { useDispatch } from 'react-redux'
import { changeDisplay } from '../../features/addCanSlice';

const EmptyScreen = () => {
  const dispatch = useDispatch();

  return (
    <div className='emptyScreen'>
        <h1>BẠN CHƯA CÓ THÙNG RÁC NÀO...</h1>
        <div className="trashBlock" onClick={() => dispatch(changeDisplay())}>
          <div className='addIcon trashBlockIcon'></div>
          Thêm thùng rác  
        </div>
        <h3 className='underlinedBtn'>Hướng dẫn sử dụng</h3>  
    </div>
    )
}

export default EmptyScreen