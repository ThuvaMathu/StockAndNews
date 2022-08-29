import { Paper, Grid, Typography, ButtonBase } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useState, useEffect } from "react";
import { useProvider } from "../../context/provider";
import { styled } from "@mui/material/styles";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function NewsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { keyWord } = useProvider();
  const [rowData, setRowData] = useState([]);
  console.log(keyWord, "rebiuld mews");
  useEffect(() => {
    if (keyWord == "") {
      getNews("stock");
    } else {
      getNews(keyWord);
    }
  }, [keyWord]);

  const getNews = (params) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4f192eeccemsh43fef53656ace90p1fb5a8jsn5d4aa797ea54",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-news.p.rapidapi.com/v1/search?q=${params}&lang=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status == "ok") {
          setRowData(response.articles);
          console.log(response, "res");
        } else {
          console.log(response, "no data");
        }
      })
      .catch((err) => console.error(err, "error"));
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {rowData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => {
                      window.open(row.link, "_blank");
                    }}
                  >
                    <TableCell>
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase
                            sx={{ width: 150, height: "auto" }}
                            onClick={() => {
                              window.open(row.link, "_blank");
                            }}
                          >
                            <Img alt="complex" src={row.media} sx={{}} />
                          </ButtonBase>
                          <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                          ></Typography>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography
                                gutterBottom
                                variant="body1"
                                component="div"
                                style={{ fontWeight: "bold" }}
                              >
                                {row.title}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                {row.summary}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                color="text.secondary"
                              >
                                Author: {row.author}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle2">
                                {row.published_date}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
