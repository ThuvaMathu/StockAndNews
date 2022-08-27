import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AppProvider from "./context/provider";
import Exchange from "./components/stocks/exchange";
import Symbols from "./components/stocks/symbols";
import Mainstock from "./components/stocks/main_stock";
function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <ShowChartIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

export default function App() {
  return (
    <div>
      <AppProvider>
        <AppBar position="static" color="primary">
          {appBarLabel("Research & Invest")}
        </AppBar>
        <Mainstock />
      </AppProvider>
    </div>
  );
}
