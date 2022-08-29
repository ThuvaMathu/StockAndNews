import React, { useState } from "react";
import { useProvider } from "../../context/provider";
import {
  Container,
  Grid,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function SearchBar() {
  // const [value, setValue] = useState(null);
  const { setKeyWord, value, setValue } = useProvider();
  const dropdown = ["nasdaq_constituent", "dowjones_constituent"];

  const handleselect = () => {
    setKeyWord(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // console.log("rebuilding");
  return (
    <div>
      <Container maxWidth="lg" xs={{ marginY: 1 }}>
        <Container className="qoute-container" sx={{ padding: 2 }}>
          <Grid
            container
            justifyContent="center"
            className="quote-search"
            spacing={3}
          >
            <Grid item>
              <TextField
                id="outlined-multiline-flexible"
                label="Search news by keyWord"
                variant="outlined"
                value={value}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  console.log(event.target.value);
                  setValue(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Button
                sx={{ width: 150, height: 40, marginTop: 1 }}
                type="button"
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => handleselect()}
              >
                <SearchIcon /> Search
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
