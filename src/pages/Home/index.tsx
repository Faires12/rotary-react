import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navigation from '../../components/Navigation';
import InitialPage from '../InitialPage';


const Home = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<InitialPage/>}/>
    
   </Routes>
   <Navigation/>
   </> 
  );
}

export default Home;