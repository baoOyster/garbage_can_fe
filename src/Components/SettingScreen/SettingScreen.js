/*
    #Big note: Tôi chưa có tạo server nên việc gửi phản hồi đến server chưa thể hoàn thiện
               Tôi sẽ add phần đó sau =D
*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleDeleteAUser, selectDeleteAUserState } from '../../features/deleteAUserSlice';
import { changeHomeSettingState } from '../../features/homeOrSettingSlice';
import { changeLoginState } from '../../features/loginStateSlice';
import { handleLogout, selectLogoutState } from '../../features/logoutStateSlice';
import { changeDisplay } from '../../features/userCredentialSlice';
import { deleteCookie } from '../../utils/cookie';
import './SettingScreen.css';

const SettingScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutState = useSelector(selectLogoutState);
    const deleteAUserState = useSelector(selectDeleteAUserState);

    useEffect(() => {
        dispatch(changeHomeSettingState(false));
        if(logoutState) {
            dispatch(changeLoginState(false));
            navigate('/garbage_can_fe/login', {replace: true});
        }
        if(deleteAUserState) {
            dispatch(changeLoginState(false));
            navigate('/garbage_can_fe/login', {replace: true});
        }
    }, [logoutState, deleteAUserState])
    return (
        <div className='settingScreen'>
            <div className='setting'>
                <h1>Cài Đặt</h1>
                <h3 className='underlinedBtn' onClick={() => dispatch(changeDisplay())}>Thay đổi mật khẩu và tên đăng nhập</h3>
                <h3 className='underlinedBtn'>Đọc hướng dẫn sử dụng</h3>
                <h3 className='underlinedBtn'>Hỗ trợ</h3>
                <h3 className='underlinedBtn' onClick={() => {
                    dispatch(handleDeleteAUser())
                }}>Xóa nick</h3>
                <div className='btn' onClick={() => {
                    dispatch(handleLogout());
                }}>Đăng Xuất</div>
            </div>
        </div>
    )
}

export default SettingScreen