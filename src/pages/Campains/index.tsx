import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import styles from "./styles";
import StarIcon from "@mui/icons-material/Star";

const Campains = () => {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", "", ""]);
  return (
    <Box sx={{ width: "100%" }}>
      <HeaderHome text="10 Campanhas Ativas" />
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
            <Box>Rotary Salva vidas</Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <StarIcon />
              <Box sx={{ fontSize: "16px", marginLeft: "10px" }}>
                Até 18/07/2022
              </Box>
            </Box>
            <Box sx={{ marginTop: "10px" }}>Ver mais</Box>
            <Box
              component="img"
              src="/cambg.svg"
              sx={{
                position: "absolute",
                left: "180%",
                bottom: "-6.5%",
                transform: "translate(-180%)",
              }}
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Campains;
