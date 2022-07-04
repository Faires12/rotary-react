import { Box } from "@mui/system";
import React from "react";
import HomeBigBox from "../../components/HomeBigBox";
import HomeSmallBox from "../../components/HomeSmallBox";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import HeaderHome from "../../components/HeaderHome";
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';

const FlexHalfScreen = (props : any) => {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
    </Box>
  );
};

const InitialPage = () => {
  return (
    <Box sx={{ width: "100%", paddingBottom: '100px'}}>

      <HeaderHome text={"Olá Fares!"}/>

      <Box sx={{ display: "flex", width: "100%" }}>
        <FlexHalfScreen>
          <HomeSmallBox icon={"53"} text={"Solicitações de doação"}/>
          <HomeSmallBox icon={<StarIcon/>} text={"Campanhas"}/>
        </FlexHalfScreen>

        <FlexHalfScreen>
          <HomeBigBox/>
        </FlexHalfScreen>
      </Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        <FlexHalfScreen>
          <HomeSmallBox icon={<SchoolIcon/>} text={"Certificados"}/>
        </FlexHalfScreen>

        <FlexHalfScreen>
          <HomeSmallBox icon={<ThumbUpIcon/>} text={"Apoiadores"}/>
        </FlexHalfScreen>
      </Box>
    </Box>
  );
};

export default InitialPage;
