import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './styles';

interface Infos {
    icon: JSX.Element
    text: string
}

const HomeBigBox = ({text, icon} : Infos) => {
  return (
    <Paper sx={styles.box} elevation={3}>
        {icon}
        <Box>{text}</Box>
    </Paper>
  )
   
}

export default HomeBigBox;