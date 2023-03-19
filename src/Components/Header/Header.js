import React, { useEffect } from 'react';
import './Header.css';
import FullLogo from '../../assets/images/FullLogo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginState, selectLoginState } from '../../features/loginStateSlice';
import { selectHomeSettingState } from '../../features/homeOrSettingSlice';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector(selectLoginState);
  const homeSettingState = useSelector(selectHomeSettingState);

  function redirectSetting(){
    navigate('/garbage_can_fe/setting', {replace: true});
  }

  function redirectHome(){
    navigate('/garbage_can_fe/home', {replace: true});
  }

  useEffect(() => {
    if(getCookie('jwt')){
      dispatch(changeLoginState(true));
    }
  }, [])

  return (
    <header>
        <img src={FullLogo} alt='Logo' className='leftHeader'/>
        {loginState && <div className='rightHeader'>
            {!homeSettingState && <div className='homeSetting homeIcon' onClick={redirectHome}></div>}
            {homeSettingState && <div className='homeSetting settingIcon'onClick={redirectSetting}></div>}
        </div>}
    </header>
  )
}

export default Header