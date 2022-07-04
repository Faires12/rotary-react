import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import QuizIcon from "@mui/icons-material/Quiz";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useLocation, useNavigate } from "react-router-dom";

const NavOpc = (props: any) => {
  return (
    <Box sx={{ padding: { xs: "10px", lg: "20px" }, cursor: 'pointer'}}>{props.children}</Box>
  );
};

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [opc, setOpc] = React.useState(1);

  React.useEffect(() => {
    const newOpc: any = {
      "/home": 1,
      "/home/campanhas": 2,
      "/home/apoiadores": 3,
      "/home/hemonucleos": 4,
      "/home/quiz": 5,
    };

    setOpc(newOpc[location.pathname]);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        bottom: "0",
        left: "0",
        background: "rgba(255, 255, 255)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: {
            xs: "space-between",
            lg: "space-evenly",
            color: "#C6C8CE",
          },
        }}
      >
        <NavOpc o>
          <ThumbUpIcon
            sx={{ color: opc === 3 ? "#D54E3B" : "#C6C8CE", width: '40px', height: '40px' }}
            onClick={() => navigate("/home/apoiadores")}
          />
        </NavOpc>
        <NavOpc>
          <StarIcon sx={{ color: opc === 2 ? "#D54E3B" : "#C6C8CE", width: '40px', height: '40px'}} onClick={() => navigate("/home/campanhas")}/>
        </NavOpc>
        <NavOpc>
          <BloodtypeIcon sx={{ color: opc === 1 ? "#D54E3B" : "#C6C8CE", width: '40px', height: '40px' }} onClick={() => navigate("/home")}/>
        </NavOpc>
        <NavOpc>
          <QuizIcon sx={{ color: opc === 5 ? "#D54E3B" : "#C6C8CE", width: '40px', height: '40px' }} onClick={() => navigate("/home/quiz")}/>
        </NavOpc>
        <NavOpc>
          <AddLocationIcon sx={{ color: opc === 4 ? "#D54E3B" : "#C6C8CE", width: '40px', height: '40px' }} onClick={() => navigate("/home/hemonucleos")} />
        </NavOpc>
      </Box>
    </Box>
  );
}
