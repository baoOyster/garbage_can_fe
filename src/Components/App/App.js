import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectAddCanDisplay } from '../../features/addCanSlice';
import { selectOptionDisplay } from '../../features/canOptionSlice';
import { selectUserCredentialDisplayState } from '../../features/userCredentialSlice';
import Header from '../Header/Header';
import AddCan from '../Home/AddCan/AddCan';
import CanOption from '../Home/AddCan/CanOption';
import ChangeUserCredential from '../Home/AddCan/ChangeUserCredential';
import Home from '../Home/Home';
import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
import SettingScreen from '../SettingScreen/SettingScreen';
import './App.css';

function App() {
  const addCanDisplay = useSelector(selectAddCanDisplay);
  const canOptionDisplay = useSelector(selectOptionDisplay);
  const userCredentialsDisplay = useSelector(selectUserCredentialDisplayState);

  return (
    <div className="App">
      <Header />
      {addCanDisplay && <AddCan />}
      {canOptionDisplay && <CanOption />}
      {userCredentialsDisplay && <ChangeUserCredential />}
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Navigate replace to="/garbage_can_fe/login" />} />
          <Route path="/garbage_can_fe/login" element={<Login />} />
          <Route path="/garbage_can_fe/register" element={<Register />} />
          <Route path="/garbage_can_fe/setting" element={<SettingScreen />} />
          <Route path="/garbage_can_fe/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
