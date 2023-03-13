/*
    #Big note: Tôi chưa có tạo server nên việc gửi phản hồi đến server chưa thể hoàn thiện
               Tôi sẽ add phần đó sau =D
*/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeHomeSettingState } from '../../features/homeOrSettingSlice';
import './SettingScreen.css';

const SettingScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeHomeSettingState(false));
    }, [])
    return (
        <div className='settingScreen'>
            <div className='setting'>
                <h1>Cài Đặt</h1>
                <h3 className='underlinedBtn'>Đọc hướng dẫn sử dụng</h3>
                <div className="sendingSupportBlock">
                    <label for="sendSupportBlock" className='underlinedBtn'>Đặt câu hỏi</label>
                    <textarea id='sendSupportBlock' placeholder='Đây là nơi bạn có thể liên hệ, phản hỏi sản phẩm của chúng tôi'/>
                    <div className='btn'>Gửi</div>
                </div>
                <h3 className='underlinedBtn'>Hỗ trợ</h3>
                <div className='btn'>Đăng Xuất</div>
            </div>
        </div>
    )
}

export default SettingScreen