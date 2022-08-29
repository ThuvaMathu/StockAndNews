import React from "react";
import Container from "@mui/material/Container";
import SearchBar from "./search-bar";
import NewsTable from "./news-table";

export default function MainNews() {
  return (
    <Container maxWidth="md" justifyContent="center" alignContent="center">
      <SearchBar />
      <NewsTable />
    </Container>
  );
}
