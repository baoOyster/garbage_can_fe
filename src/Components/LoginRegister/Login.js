/*
  #Big note: There are still missing features for sending request to register
             I will add this feature later after finishing the server
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLoginState } from '../../features/loginStateSlice';
import './LoginRegister.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(changeLoginState(false));

  function redirectRegister(){
    // Dùng để chuyển hướng sang phần đăng ký
    navigate('/register', { replace: true });
  }

  return (
    <div className='loginRegister'>
        <div className="inputForm">
          <label for="username">Tên Đăng Nhập:</label>
          <input type="text" name="username" id="username" placeholder='Vd: baodeptraivodichvutru'/>
        </div>
        <div className="inputForm">
          <label for="password">Mật Khẩu:</label>
          <input type="password" name="password" id="password" placeholder='Vd: Bao@15022016'/>
        </div>
        <div className='submitBlock'>
          <div className="btn">Truy Cập</div>
          <div className="underlinedBtn" onClick={redirectRegister}>Đăng Ký Tài Khoản</div>
        </div>
    </div>
  )
}

export default Login