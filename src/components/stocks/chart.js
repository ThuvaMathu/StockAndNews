import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useProvider } from "../../context/provider";
import axios from "axios";
import { Container, Grid, Button } from "@mui/material";

export default function Chart() {
  const [value, setValue] = useState();
  const { exchange } = useProvider();

  const options = {
    method: "GET",
    url: "https://chart-img.p.rapidapi.com/mini-chart",
    params: {
      symbol: "AAPL",
      interval: "1Y",
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

  const handleselect = () => {
    axios
      .request(options)
      .then(function(response) {
        console.log(response);
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let image = window.URL.createObjectURL(blob);
        setValue(image);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Container className="qoute-container" sx={{ padding: 2 }}>
          <Grid
            container
            justifyContent="center"
            className="quote-search"
            spacing={3}
          >
            <h1>data from other page: {exchange}</h1>
            <Button
              sx={{ width: 150, height: 40 }}
              type="button"
              variant="contained"
              size="small"
              color="secondary"
              className="history-button"
              onClick={() => handleselect()}
            ></Button>
          </Grid>
          <img alt="data" src={value} />
        </Container>
      </Container>
    </div>
  );
}
