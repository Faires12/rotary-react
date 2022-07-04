import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import styles from "./styles";
import StarIcon from "@mui/icons-material/Star";

const Apoiadores = () => {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", "", ""]);
  return (
    <Box sx={{ width: "100%" }}>
      <HeaderHome text="Apoiadores" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <Paper sx={{...styles.box, backgroundImage: index % 2 === 0 ? 'url("/uniamerica.jpg")' : 'url("/rotary.png")',
          backgroundPosition: 'center', backgroundSize: '100% 100%'}} elevation={3}>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Apoiadores;
