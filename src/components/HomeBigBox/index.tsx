import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './styles';
import QuizIcon from '@mui/icons-material/Quiz';


const HomeBigBox = () => {
  return (
    <Paper sx={styles.box} elevation={3}>
        <Box>
          <QuizIcon/>
          <Typography>QUIZ</Typography>
          <Box component="img" src="quiz_center.svg" sx={{position: 'absolute', left: '50%', top: '50%', 
          transform: 'translate(-50%, -50%)', zIndex: '10'}}/>
          <Box component="img" src="quiz_bg.svg" sx={{position: 'absolute', left: '100%', bottom: '0', 
          transform: 'translateX(-100%)'}}/>
        </Box>
        
    </Paper>
  )
   
}

export default HomeBigBox;