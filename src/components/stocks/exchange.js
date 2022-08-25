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

export default function Exchange() {
  const [value, setValue] = useState("");
  const { setExchange } = useProvider();
  const dropdown = ["nasdaq_constituent", "dowjones_constituent"];

  const handleselect = () => {};
console.log('rebuilding')
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
            <Grid item>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={dropdown}
                sx={{ width: 200, height: 10 }}
                onChange={(event, newValue) => {
                  setExchange(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Constituent" />
                )}
              />
            </Grid>
            <Grid item>
              <Button
                sx={{ width: 150, height: 40 }}
                type="button"
                variant="contained"
                size="small"
                color="secondary"
                className="history-button"
                onClick={() => handleselect()}
              >
                <SearchIcon /> View Symbols
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
