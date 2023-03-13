/*
  #Big note: There are still missing features for sending request to register
             I will add this feature later after finishing the server
*/

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { selectLoginState } from '../../features/loginStateSlice';
import { handleLogin } from '../../features/loginStateSlice';
import { isSixToThirtyTwo } from '../../utils/supportingFunction';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector(selectLoginState); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function redirectRegister(){
    // Dùng để chuyển hướng sang phần đăng ký 
    navigate('/register', { replace: true });
  }

  function startLogin(){
    // Dùng để đăng nhập

        // Check if the username is valid
        if(!isSixToThirtyTwo(username)) {
          setUsernameError(true);
        }
        else setUsernameError(false);
        
        
        // Check if the password is valid
        if(!isSixToThirtyTwo(password)) {
          setPasswordError(true);
        }
        else setPasswordError(false);
    
        if(!usernameError && !passwordError){
          // Start login
          dispatch(handleLogin(username, password));
        }
       
  }

  useEffect(() => {
    if(loginState) navigate('/home', { replace: true });
  }, [loginState])

  return (
    <div className='loginRegister'>
        
        {/* Username section */}
        <div className="inputForm">
          
          <label for="username">Tên Đăng Nhập:</label>
          
          {usernameError && <p className='errorMessage'>
            Tên đăng nhập phải có từ 6 đến 32 chữ cái gồm số và chữ
            </p>}

          <input type="text" 
          name="username" 
          id="username" 
          placeholder='Vd: baodeptraivodichvutru'
          onChange={({target}) => {
            setUsername(target.value);
          }}/>
        
        </div>

        {/* Password section */}
        <div className="inputForm">

          <label for="password">Mật Khẩu:</label>
          
          {passwordError && <p className='errorMessage'>
            Mật khẩu phải gồm có từ 6 đến 32 chữ cái gồm số và chữ
            </p>}

          <input type="password" 
          name="password" 
          id="password" 
          placeholder='Vd: Bao@15022016'
          onChange={({target}) => {
            setPassword(target.value);
          }}/>
        
        </div>

        {/* The submit section */}
        <div className='submitBlock'>
          
          <div className="btn" 
          onClick={startLogin}>Truy Cập</div>
          
          <div className="underlinedBtn" 
          onClick={redirectRegister}>Đăng Ký Tài Khoản</div>
        
        </div>
    </div>
  )
}

export default Login