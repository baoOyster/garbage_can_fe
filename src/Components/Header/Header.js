import React from 'react';
import './Header.css';
import FullLogo from '../../assets/images/FullLogo.svg';
import { useSelector } from 'react-redux';
import { selectLoginState } from '../../features/loginStateSlice';
import { selectHomeSettingState } from '../../features/homeOrSettingSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const loginState = useSelector(selectLoginState);
  const homeSettingState = useSelector(selectHomeSettingState);

  function redirectSetting(){
    navigate('/setting', {replace: true});
  }

  function redirectHome(){
    navigate('/home', {replace: true});
  }

  return (
    <header>
        <img src={FullLogo} alt='Logo' className='leftHeader'/>
        {loginState && <div className='rightHeader'>
            {!homeSettingState && <div className='homeSetting homeIcon' onClick={redirectHome}></div>}
            {homeSettingState && <div className='homeSetting settingIcon'onClick={redirectSetting}></div>}
            <div className='bellButton'></div>
        </div>}
    </header>
  )
}

export default Header