import React, { useState, useEffect } from "react";
import { useStockProvider } from "../../context/stock_provider";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";

export default function Chart() {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [periodValue, setPeriodValue] = useState("1Y");
  const pierods = ["1d", "1M", "3M", "1Y", "5Y", "all"];
  const { stockSymbol } = useStockProvider();
  const getChart = () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://chart-img.p.rapidapi.com/mini-chart",
      params: {
        symbol: stockSymbol,
        interval: periodValue,
        theme: "dark",
        width: "800",
        height: "400",
        format: "jpeg",
      },
      headers: {
        "X-RapidAPI-Key": "4f192eeccemsh43fef53656ace90p1fb5a8jsn5d4aa797ea54",
        "X-RapidAPI-Host": "chart-img.p.rapidapi.com",
      },
      responseType: "arraybuffer",
    };
    axios
      .request(options)
      .then(function(response) {
        console.log(response);
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let image = window.URL.createObjectURL(blob);
        setValue(image);
        setLoading(false);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getChart();
  }, [stockSymbol, periodValue]);
  return (
    <div>
      <Grid container spacing={1} justifyContent="center">
        {pierods.map((value) => (
          <Grid item onClick={() => setPeriodValue(value)}>
            <Paper sx={{ paddingY: "3px", paddingX: "8px" }} elevation={1}>
              <Typography variant="body2" style={{ pointerEvents: "none" }}>
                {value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {loading ? (
        <Grid container spacing={1} justifyContent="center" margin={1}>
          <Typography variant="subtitle" style={{ pointerEvents: "none" }}>
            Loading...
          </Typography>
        </Grid>
      ) : (
        <img alt="data" src={value} style={{ height: "auto", width: 400 }} />
      )}
    </div>
  );
}
