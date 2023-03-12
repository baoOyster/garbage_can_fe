/*
  #Big note: There are still missing features for sending request to register
             I will add this feature later after finishing the server
*/

import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLoginState } from '../../features/loginStateSlice';
import './LoginRegister.css';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(changeLoginState(false))

  function onChangeRecaptcha(value) {
    console.log("Captcha value:", value);
  }

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
        <ReCAPTCHA
          sitekey="Your client site key"
          onChange={onChangeRecaptcha}
        />
        <div className="submitBlock">
          <div className="btn">Tạo Tài Khoản</div>
          <div className="underlinedBtn" onClick={redirectLogin}>Đăng nhập tài khoản</div>
        </div>
    </div>
  )
}

export default Register