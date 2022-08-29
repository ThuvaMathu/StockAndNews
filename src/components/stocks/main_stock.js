import React from "react";
import Container from "@mui/material/Container";
import StockProvider from "../../context/stock_provider";
import Exchange from "./exchange";
import Symbols from "./symbols";
import SymbolDetails from "./symbol_details";

export default function Mainstock() {
  return (
    <StockProvider>
      <Container maxWidth="md" justifyContent="center" alignContent="center">
        <Exchange />
        <Symbols />
        <SymbolDetails />
      </Container>
    </StockProvider>
  );
}
