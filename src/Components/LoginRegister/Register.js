/*
  #Big note: There are still missing features for sending request to register
             I will add this feature later after finishing the server
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLoginState } from '../../features/loginStateSlice';
import './LoginRegister.css';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(changeLoginState(false))

  function redirectLogin(){
    // Dùng để chuyển hướng sang phần đăng nhập
    navigate('/login', { replace: true });
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
        <div className='inputForm'>
            <label for="registerCode">Mã Đăng Ký Tài Khoản:</label>
            <input type="password" name="registerCode" id="registerCode" placeholder="Đoạn mã trên có ở mỗi chiếc thùng rác!" />
        </div>
        <div className="submitBlock">
          <div className="btn">Tạo Tài Khoản</div>
          <div className="underlinedBtn" onClick={redirectLogin}>Đăng nhập tài khoản</div>
        </div>
    </div>
  )
}

export default Register