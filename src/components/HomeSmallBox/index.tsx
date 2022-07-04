import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './styles';

interface Infos {
    icon: JSX.Element | string
    text: string
}

const HomeSmallBox = ({text, icon} : Infos) => {
  return (
    <Paper sx={styles.box} elevation={3}>
        <Box>{icon}</Box>
        <Box>{text}</Box>
    </Paper>
  )
   
}

export default HomeSmallBox;