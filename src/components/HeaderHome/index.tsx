import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


interface props {
  text: string
  home?: boolean
}

const HeaderHome = ({text, home} : props) => {
  const navigate = useNavigate()
  return (
    <Paper sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: home ? 'center' : 'space-between', 
    padding: '40px', background: 'linear-gradient(114.31deg, rgba(229, 147, 87, 0.9) 0%, rgba(213, 78, 59, 0.9) 79.06%)',
    color: 'white', fontSize: '40px', textAlign: 'right'}} elevation={3}>
      {!home && <ArrowBackIcon sx={{width: '50px', height: '50px'}} onClick={() => navigate("/home")}/>}
      <Box>
        {text}
      </Box>
    </Paper>
  )
   
}

export default HeaderHome;