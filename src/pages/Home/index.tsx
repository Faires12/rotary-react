import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navigation from '../../components/Navigation';
import Apoiadores from '../Apoiadores';
import Campains from '../Campains';
import Hemonucleos from '../Hemonucleos';
import InitialPage from '../InitialPage';


const Home = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<InitialPage/>}/>
    <Route path="/campanhas" element={<Campains/>}/>
    <Route path="/apoiadores" element={<Apoiadores/>}/>
    <Route path="/hemonucleos" element={<Hemonucleos/>}/>
   </Routes>
   <Navigation/>
   </> 
  );
}

export default Home;