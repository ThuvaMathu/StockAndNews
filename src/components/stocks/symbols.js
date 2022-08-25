import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useProvider } from "../../context/provider";

import {
  Container,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Symbols() {
  const [value, setValue] = useState("");
  const { exchange } = useProvider();

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
            
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
