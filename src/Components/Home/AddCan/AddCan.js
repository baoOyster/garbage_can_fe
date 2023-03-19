import React, { useState } from 'react';
import './CanForm.css';
import { useDispatch } from 'react-redux';
import { addSmartCan } from '../../../api';
import { changeDisplay } from '../../../features/addCanSlice';
import { showPassword } from '../../../utils/showPassword';

const AddCan = () => {
    const [canId, setCanId] = useState('');
    const dispatch = useDispatch();

    return (
        <div className='greyBackground'>
            <div className='canForm'>
                <div className='cancelCanForm' onClick={() => dispatch(changeDisplay())}></div>
                <div className='canFormDetail'>
                    <label htmlFor='canIdInput'>Id thùng rác:</label>
                    <input id='canIdInput' 
                    type="password"
                    placeholder='Vd: 2322343424'
                    onChange={({target}) => setCanId(target.value)}
                    />
                    <h3 className='underlinedBtn' onClick={() => showPassword("canIdInput")}>Ẩn/Hiện canId</h3>
                    <div className="btn" 
                    onClick={() => {addSmartCan(canId)}}>Thêm thùng rác</div>
                </div>
            </div>
        </div>
  )
}

export default AddCan