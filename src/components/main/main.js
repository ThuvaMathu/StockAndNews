import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Mainstock from "../stocks/main_stock";
import MainNews from "../news/main-news";

export default function Main() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <Box sx={{ height: "100vh" }}>
              <Grid container xs={{ justifyContent: "center" }}>
                <Mainstock />
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
              <MainNews />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
