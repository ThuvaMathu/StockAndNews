import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AppProvider from "./context/provider";
import Exchange from "./components/stocks/exchange";
import Symbols from "./components/stocks/symbols";
<<<<<<< HEAD
import Mainstock from "./components/stocks/main_stock";
=======
import News from "./components/news/main-news";
>>>>>>> d2eb91cb482d02b8fe956821fb58865259752fa5
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
<<<<<<< HEAD
        <Mainstock />
=======
        <Exchange/>
        <News />
        <Symbols/>
>>>>>>> d2eb91cb482d02b8fe956821fb58865259752fa5
      </AppProvider>
    </div>
  );
}
