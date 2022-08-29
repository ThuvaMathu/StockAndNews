import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useStockProvider } from "../../context/stock_provider";
import { ButtonBase, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spaceimg from "../../assets/swr.png";
import { styled } from "@mui/material/styles";
import LoadingContainer from "../common/loading_container";
import Chart from "./chart";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function SymbolDetails() {
  const [loading, setLoading] = useState(true);
  const [showerror, setShowerror] = useState(false);
  const [infoData, setInfoData] = useState();
  const [priceData, setPriceData] = useState();

  const { stockSymbol } = useStockProvider();
  const API_KEY = "c96jtgqad3icjtt5skjg";

  function getData(params) {
    let url1 = `https://finnhub.io/api/v1/stock/profile2?symbol=${params}&token=${API_KEY}`;
    let url2 = `https://finnhub.io/api/v1/quote?symbol=${params}&token=${API_KEY}`;
    setLoading(true);
    Promise.all([fetch(url1), fetch(url2)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        console.log(data1, data2);
        setShowerror(false);
        setLoading(false);
        setPriceData(data2);
        setInfoData(data1);
      })
      .catch(() => {
        setShowerror(true);
        toast.error("There was an issue with retrieving data from the server.");
        setLoading(false);
      });
  }
  //console.log(exchange, "rebuild");

  useEffect(() => {
    getData(stockSymbol);
  }, [stockSymbol]);

  if (loading) {
    return <LoadingContainer />;
  }
  if (showerror) {
    return (
      <>
        <div className="center-loading">
          <div className="error-container">
            <img alt="..." src={spaceimg} className="errorimg" />
          </div>
        </div>
      </>
    );
  }
  return (
    <div style={{ marginBottom: "100px" }}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          Width: "auto",
        }}
      >
        <Grid container>
          <Grid item>
            <ButtonBase
              sx={{ width: 128, height: 128, p: 3 }}
              onClick={() => {
                window.open(infoData.weburl, "_blank");
              }}
            >
              <Img alt="complex" src={infoData.logo} sx={{}} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="body1" component="div">
                  {infoData.ticker}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}> Name:</span>
                  {infoData.name}
                </Typography>
                <Typography variant="body2">
                  <span style={{ fontWeight: "bold" }}>Currency: </span>
                  {infoData.currency}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>Current price: </span>
                  {priceData.c}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>Open price: </span>
                  {priceData.o}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}> High: </span>
                  {priceData.h}
                </Typography>

                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}> low:</span>
                  {priceData.l}
                </Typography>

                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>
                    Percentage change:{" "}
                  </span>
                  {priceData.pc}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>Total volume:</span>
                  {priceData.t}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box sx={{ width: 400, height: 180 }}>
              <Chart />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
