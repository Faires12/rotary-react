import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HeaderHome = () => {
  return (
    <Paper sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px',
    background: 'linear-gradient(114.31deg, rgba(229, 147, 87, 0.9) 0%, rgba(213, 78, 59, 0.9) 79.06%)',
    color: 'white', fontSize: '40px'}} elevation={3}>
        Olá, Fares!
    </Paper>
  )
   
}

export default HeaderHome;