/*
  #Big note: There are still missing features for sending request to register
             I will add this feature later after finishing the server
*/


import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { handleRegister, selectRegisterState } from '../../features/registerStateSlice';
import { isSixToThirtyTwo } from '../../utils/supportingFunction';
import { showPassword } from '../../utils/showPassword';
import './LoginRegister.css';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerState = useSelector(selectRegisterState);

  // Lấy dữ liêu từ form người dùng nhập
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recaptcha, setRecaptcha] = useState(false);
  // Error storage
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function onChangeRecaptcha(value) {
    setRecaptcha(value);
  }

  function startRegister(){
    // Doing the registration

    // Checking for username validation
    if(!isSixToThirtyTwo(username)){
      setUsernameError(true);
    }
    else setPasswordError(false);


    // Checking for password validation
    if(!isSixToThirtyTwo(password)){
      setPasswordError(true);
    }
    else setPasswordError(false);

    if(recaptcha && !usernameError && !passwordError){
      // Start registration
      dispatch(handleRegister({username, password}));
    }
  }

  function onChangeRecaptcha(value) {
    console.log("Captcha value:", value);
  }

  function redirectLogin(){
    // Dùng để chuyển hướng sang phần đăng nhập
    navigate('/login', { replace: true });
  }
  
  useEffect(() => {
    if(registerState) navigate('/garbage_can_fe/home', { replace: true });
  }, [registerState])

  return (
    <div className='loginRegister'>
        {/* Input người dùng */}
        <div className="inputForm">
            
            <label htmlFor="username">Tên Đăng Nhập:</label>

            {usernameError && <p className='errorMessage'>
              Tên đăng nhập bao gồm 6 đến 12 ký tự bao gồm chữ và số
              </p>}
            
            <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='Vd: baodeptraivodichvutru'
            onChange={({target}) => {
              setUsername(target.value);
            }}/>
        
        </div>

        <div className="inputForm">


            <label htmlFor="password">Mật Khẩu:</label>
            
            {passwordError && <p className='errorMessage'>
              Mật Khẩu bao gồm 6 đến 12 ký tự bao gồm chữ và số
              </p>}

            <input type="password" 
            name="password" 
            id="password" 
            placeholder='Vd: Bao@15022016'
            onChange={({target}) => {
              setPassword(target.value);
            }}/>
        
            <h3 className='underlinedBtn' onClick={() => showPassword("password")}>Ẩn/Hiện mật khẩu</h3>

        </div>

        {/* Các nút chức năng dùng cho thực hiện việc đăng ký */}
        {!recaptcha && <p className='errorMessage'>
              Vui lòng xác minh bạn không phải là robot!
              </p>}
        <ReCAPTCHA
          sitekey="6Lenx_QkAAAAALEqkyUpiZrQDBDUG7yFzKvcTslx"
          onChange={onChangeRecaptcha}
        />

        <div className="submitBlock">
          <div className="btn" onClick={startRegister}>Tạo Tài Khoản</div>
          <div className="underlinedBtn" onClick={redirectLogin}>Đăng nhập tài khoản</div>
        </div>
    </div>
  )
}

export default Register