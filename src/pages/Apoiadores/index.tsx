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
        {items.map((item) => (
          <Paper sx={styles.box} elevation={3}>
            <Box component="img" src="/uniamerica.jpg" sx={{width: '200px', height: '200px'}}/>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Apoiadores;
