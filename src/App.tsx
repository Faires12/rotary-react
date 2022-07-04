import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import { SnackProvider } from './components/snackProvider';

function App() {
  return (
    <SnackProvider>
<Routes>
    <Route path="/home/*" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
    </SnackProvider>
   
  );
}

export default App;
