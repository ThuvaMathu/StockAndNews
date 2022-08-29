import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Box } from "@mui/material";

export default function LoadingContainer() {
  return (
    <>
      <div className="center-loading">
        <div className="loading-container">
          <Container maxWidth="xs" justifyContent="center">
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="secondary" />
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}
