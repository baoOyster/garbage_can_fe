import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeDisplay as changeDisplayAddCan } from '../../features/addCanSlice';
import { changeId, changeDisplay } from '../../features/canOptionSlice';
import { changeShowMode, selectGCData, selectShowMode } from '../../features/garbageCanDataSlice';
const DataScreen = () => {
  const navigate = useNavigate();
  const showMode = useSelector(selectShowMode);
  const garbageCansData = useSelector(selectGCData);
  const dispatch = useDispatch();

  function openOption(canId){
    console.log(canId)
    dispatch(changeId(canId));
    dispatch(changeDisplay());
  }

  function referShowMode(){
    if(showMode === "everything"){
      return garbageCansData.map((box, index) => {
        console.log(box.is_full);
        return (<div key={index} className='trashBlock' 
      onClick={() => openOption(box._id.toString())}>
      <h2>{box.name}</h2>
      {box.is_full && <div className='fullTrash trashBlockIcon'></div>}
      {box.is_full && <h2>Đầy</h2>}
      {!box.is_full && <div className='emptyTrash trashBlockIcon'></div>}
      {!box.is_full && <h2>Rỗng</h2>}
      {`#${index}`}
    </div>)})
    }else if(showMode === "empty"){
      return garbageCansData.map((box, index) => {
      if(!box.is_full){
        return (<div key={index} className='trashBlock'
        onClick={() => openOption(box._id.toString())}>
          <h2>{box.name}</h2>
          <div className='emptyTrash trashBlockIcon'></div>
          {`#${index}`}
        </div>)
      }
      })
    }else{
      return garbageCansData.map((box, index) => {
        if(box.is_full){
          return (<div key={index} className='trashBlock'
          onClick={() => openOption(box._id.toString())}>
            <h2>{box.name}</h2>
            <div className='fullTrash trashBlockIcon'></div>
            {`#${index}`}
          </div>)
        }
        })
    }
  }

  function showModeVietText() {
    if(showMode === "everything"){
      return "Toàn bộ"
    }else if(showMode === "empty"){
      return "Rỗng"
    }else{
      return "Đầy"
    }
  }
  
  return (
    <div className='cansDataScreen'>
        <div className='cansDataScreenLeft'>
          {referShowMode()}
          <div className="trashBlock" onClick={() => dispatch(changeDisplayAddCan())}>
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
          <h3 className='underlinedBtn' onClick={() => {navigate('/garbage_can_fe/setting', {replace: true})}}>Hướng dẫn sử dụng</h3>
        </div>
      </div>
  )
}

export default DataScreen