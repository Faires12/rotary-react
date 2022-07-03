import { Box } from "@mui/system";
import React from "react";
import HomeBigBox from "../../components/HomeBigBox";
import HomeSmallBox from "../../components/HomeSmallBox";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import HeaderHome from "../../components/HeaderHome";

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
    <Box sx={{ width: "100%"}}>

      <HeaderHome/>

      <Box sx={{ display: "flex", width: "100%" }}>
        <FlexHalfScreen>
          <HomeSmallBox icon={<ThumbUpIcon/>} text={"test"}/>
          <HomeSmallBox icon={<ThumbUpIcon/>} text={"test"}/>
        </FlexHalfScreen>

        <FlexHalfScreen>
          <HomeBigBox icon={<ThumbUpIcon/>} text={"test"}/>
        </FlexHalfScreen>
      </Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        <FlexHalfScreen>
          <HomeSmallBox icon={<ThumbUpIcon/>} text={"test"}/>
        </FlexHalfScreen>

        <FlexHalfScreen>
          <HomeSmallBox icon={<ThumbUpIcon/>} text={"test"}/>
        </FlexHalfScreen>
      </Box>
    </Box>
  );
};

export default InitialPage;
