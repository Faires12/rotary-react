import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import styles from "./styles";
import StarIcon from "@mui/icons-material/Star";
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Hemonucleos = () => {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", "", ""]);
  return (
    <Box sx={{ width: "100%" }}>
      <HeaderHome text="Hemonúcleos Próximos" />
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
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Box>
                <Box>Homenucleo Vila A</Box>
              </Box>
              <Box>
                a 12 km
              </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Box>Foz do Iguaçu</Box>
              <FavoriteIcon/>
            </Box>

          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Hemonucleos;
