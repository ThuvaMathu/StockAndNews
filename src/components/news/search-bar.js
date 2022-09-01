import React, { useState } from "react";
import { useProvider } from "../../context/provider";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Tooltip,
  Autocomplete,
  Typography,
  Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { height } from "@mui/system";
import ClickAwayListener from "@mui/material/ClickAwayListener";
export default function SearchBar() {
  // const [value, setValue] = useState(null);
  const { setKeyWord, value, setValue } = useProvider();
  const dropdown = ["nasdaq_constituent", "dowjones_constituent"];
  const [tempDis, setTempDis] = useState("Stock");
  const [open, setOpen] = useState(false);
  const handleselect = (data) => {
    setKeyWord(data);
    setTempDis(data);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  // console.log("rebuilding");
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 2,
            padding: 1,
            border: 1,
            borderRadius: 1,
          }}
        >
          <Grid container>
            <Grid item direction="column">
              <Grid item>
                <Grid container>
                  <Typography variant="body1">
                    Click Keywords to View news
                  </Typography>

                  <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip
                      sx={{ marginLeft: 30 }}
                      PopperProps={{
                        disablePortal: true,
                      }}
                      placement="left-start"
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title="Click the Keywords based on the selected symbols to View news"
                    >
                      <InfoIcon onClick={handleTooltipOpen} />
                    </Tooltip>
                  </ClickAwayListener>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container justifyContent="center" alignContent="center">
                  {value == "" ? (
                    <Container />
                  ) : (
                    <Grid item>
                      {value.map((data) => (
                        <Button
                          sx={{ marginTop: 1, marginX: 1, borderRadius: 2 }}
                          type="button"
                          variant="contained"
                          size="small"
                          color="primary"
                          onClick={() => handleselect(data)}
                        >
                          {data}
                        </Button>
                      ))}
                    </Grid>
                  )}
                </Grid>
              </Grid>

              <Grid item sx={{ marginTop: 1 }}>
                <Divider />
                <Typography variant="body1">
                  {" "}
                  Displaying news for{" "}
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#034efc",
                    }}
                  >
                    {" "}
                    {tempDis}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
