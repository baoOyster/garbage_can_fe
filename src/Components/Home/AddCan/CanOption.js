import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCanName, changeFullState, discardACan } from '../../../api';
import { changeDisplay, selectCanId } from '../../../features/canOptionSlice';
import { showPassword } from '../../../utils/showPassword';
import './CanForm.css';

const CanOption = () => {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    const canId = useSelector(selectCanId);

    return (
        <div className='greyBackground'>
            <div className='canForm'>
                <div className='cancelCanForm' onClick={() => dispatch(changeDisplay())}></div>
                <div className='canFormDetail'>
                    <label htmlFor='canName'>Thay đổi tên thùng rác:</label>
                    <input id='canName' 
                    type="password"
                    placeholder='Vd: Thùng rác số 5'
                    onChange={({target}) => setName(target.value)}
                    />
                    <h3 className='underlinedBtn' onClick={() => showPassword("canName")}>Ẩn/Hiện tên thùng rác</h3>
                    <div className="btn" 
                    onClick={() => {changeCanName(canId, name)}}>Thay đổi tên thùng rác</div>
                    <div className="btn middleBtnInOptionForm"
                    onClick={() => {changeFullState(canId, true)}}>Chuyển đổi chế độ đầy của thùng rác</div>
                    <div className="btn"
                    onClick={() => {discardACan(canId)}}>Xóa thùng rác</div>
                </div>
            </div>
        </div>
    )
}

export default CanOption