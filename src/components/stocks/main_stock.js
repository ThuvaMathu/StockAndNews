import React from "react";
import Container from "@mui/material/Container";
import StockProvider from "../../context/stock_provider";
import Exchange from "./exchange";
import Symbols from "./symbols";

export default function Mainstock() {
  return (
    <StockProvider>
      <Container
        maxWidth="lg"
        justifyContent="center"
        alignContent="center"
      >
        <Exchange />
        <Symbols />
      </Container>
    </StockProvider>
  );
}
