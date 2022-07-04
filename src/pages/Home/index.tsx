import { Box } from '@mui/material';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navigation from '../../components/Navigation';
import Apoiadores from '../Apoiadores';
import Campains from '../Campains';
import Hemonucleos from '../Hemonucleos';
import InitialPage from '../InitialPage';
import Quiz from '../Quiz';

const Home = () => {
  return (
   <Box sx={{background: "#F5F5FA"}}>
   <Routes>
    <Route path="/" element={<InitialPage/>}/>
    <Route path="/campanhas" element={<Campains/>}/>
    <Route path="/apoiadores" element={<Apoiadores/>}/>
    <Route path="/hemonucleos" element={<Hemonucleos/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
   </Routes>
   <Navigation/>
   </Box> 
  );
}

export default Home;