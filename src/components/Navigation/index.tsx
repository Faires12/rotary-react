import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const NavOpc = (props : any) => {
    return (
        <Box sx={{padding: {xs: '10px', lg: '20px'}}}>
            {props.children}
        </Box>
    )
}


export default function Navigation() {
  return (
    <Box
        sx={{position: 'fixed', width: '100%', bottom: '0', left: '0', 
        background : 'rgba(255, 255, 255, 0.75)'}}
    >
        <Box sx={{display: 'flex', alignItems: 'center', width: '100%', 
        justifyContent: {xs: 'space-between', lg: 'space-evenly', color: "#C6C8CE"}}}>
            <NavOpc><ThumbUpIcon/></NavOpc>
            <NavOpc><ThumbUpIcon/></NavOpc>
            <NavOpc><ThumbUpIcon/></NavOpc>
            <NavOpc><ThumbUpIcon/></NavOpc>
            <NavOpc><ThumbUpIcon/></NavOpc>
        </Box>
    </Box>
  );
}