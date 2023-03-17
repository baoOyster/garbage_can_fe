import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { selectAddCanDisplay } from '../../features/addCanSlice';
import { selectOptionDisplay } from '../../features/canOptionSlice';
import Header from '../Header/Header';
import AddCan from '../Home/AddCan/AddCan';
import CanOption from '../Home/AddCan/CanOption';
import Home from '../Home/Home';
import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
import SettingScreen from '../SettingScreen/SettingScreen';
import './App.css';

function App() {
  const addCanDisplay = useSelector(selectAddCanDisplay);
  const canOptionDisplay = useSelector(selectOptionDisplay);

  return (
    <div className="App">
      <Header />
      {addCanDisplay && <AddCan />}
      {canOptionDisplay && <CanOption />}
      <div className="mainContent">
        <Routes>
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
