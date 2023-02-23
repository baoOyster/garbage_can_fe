import React from 'react';
import './Header.css';
import FullLogo from '../../assets/images/FullLogo.svg';
import { useSelector } from 'react-redux';
import { selectLoginState } from '../../features/loginStateSlice';
import { selectHomeSettingState } from '../../features/homeOrSettingSlice';

const Header = () => {
  const loginState = useSelector(selectLoginState);
  const homeSettingState = useSelector(selectHomeSettingState);

  return (
    <header>
        <img src={FullLogo} alt='Logo' className='leftHeader'/>
        {loginState && <div className='rightHeader'>
            {homeSettingState && <div className='homeSetting homeIcon'></div>}
            {!homeSettingState && <div className='homeSetting settingIcon'></div>}
            <div className='bellButton'></div>
        </div>}
    </header>
  )
}

export default Header