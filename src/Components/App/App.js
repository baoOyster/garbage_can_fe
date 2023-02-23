import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
import SettingScreen from '../SettingScreen/SettingScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setting" element={<SettingScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
