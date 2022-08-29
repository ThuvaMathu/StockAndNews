import React, { useState } from "react";
import { useStockProvider } from "../../context/stock_provider";
import {
  Container,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Exchange() {
  const [value, setValue] = useState(null);
  const { setExchange } = useStockProvider();
  const dropdown = ["nasdaq_constituent", "dowjones_constituent"];

  const handleselect = () => {
    setExchange(value);
  };
  // console.log("rebuilding");
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
                sx={{ width: 220, height: 10, marginTop: 1 }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Market Indexes" />
                )}
              />
            </Grid>
            <Grid item>
              <Button
                sx={{ width: 150, height: 40, marginTop: 1 }}
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
