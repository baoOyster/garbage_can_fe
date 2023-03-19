import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../api';
import { changeDisplay } from '../../../features/userCredentialSlice';
import { showPassword } from '../../../utils/showPassword';
import './CanForm.css';

const ChangeUserCredential = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='greyBackground'>
                <div className='canForm'>
                    <div className='cancelCanForm' onClick={() => dispatch(changeDisplay())}></div>
                    <div className='canFormDetail'>
                        {/* Old password */}
                        <label htmlFor='oldPassword'>Mật khẩu cũ:</label>
                        <input id='oldPassword' 
                        type="password"
                        placeholder='Vd: 159801'
                        onChange={({target}) => setOldPassword(target.value)}
                        />
                        <h3 className='underlinedBtn' onClick={() => showPassword("oldPassword")}>Ẩn/Hiện mật khẩu</h3>
                        
                        {/* Username */}
                        <label htmlFor='username'>Tên đăng nhập mới :</label>
                        <input id='username' 
                        type="text"
                        placeholder='Vd: toixincamon2306'
                        onChange={({target}) => setUsername(target.value)}
                        />

                        {/* Password */}
                        <label htmlFor='password'>Mật khẩu mới:</label>
                        <input id='password' 
                        type="password"
                        placeholder='Vd: 159801'
                        onChange={({target}) => setPassword(target.value)}
                        />
                        <h3 className='underlinedBtn' onClick={() => showPassword("password")}>Ẩn/Hiện mật khẩu</h3>

                        {/* Submit button */}
                        <div className='btn'
                        onClick={() => {updateUser(oldPassword, username, password)}}>Thay đổi tên đăng nhập và mật khẩu</div>
                    </div>
                </div>
            </div>
    )
}

export default ChangeUserCredential