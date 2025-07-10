import React from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import AccSettings from './components/AccSettings';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
   <>
    <Routes>
       <Route index  element={<Welcome/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/account' element={<AccSettings/>} />
    </Routes>
    <BottomNav/>
   </>
  )
}

export default App

