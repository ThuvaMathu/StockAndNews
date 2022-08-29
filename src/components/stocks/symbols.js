import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useStockProvider } from "../../context/stock_provider";
import {
  Container,
  Grid,
  TableSortLabel,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import spaceimg from "../../assets/swr.png";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import LoadingContainer from "../common/loading_container";
const columns = [
  { id: "symbol", label: "Symbol", minWidth: 80 },
  { id: "name", label: "Company Name", minWidth: 80 },
  { id: "sector", label: "Industry", minWidth: 80 },
];

function TableHeader(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="tableheader"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function Symbols(props) {
  const { exchange, stockSymbol, setStockSymbol } = useStockProvider();

  const [rowdata, setRowdata] = useState();
  const [showdata, setShowdata] = useState([
    {
      symbol: "ATVI",
      name: "Activision Blizzard",
      sector: "Communication Services",
      subSector: "Communication Services",
      headQuarter: "Santa Monica, CALIFORNIA",
      dateFirstAdded: null,
      cik: "0000718877",
      founded: "1983-06-10",
    },
    {
      symbol: "ADBE",
      name: "Adobe Inc.",
      sector: "Technology",
      subSector: "Technology",
      headQuarter: "San Jose, CALIFORNIA",
      dateFirstAdded: null,
      cik: "0000796343",
      founded: "1986-01-08",
    },
    {
      symbol: "ADP",
      name: "ADP",
      sector: "Industrials",
      subSector: "Industrials",
      headQuarter: "Roseland, NEW JERSEY",
      dateFirstAdded: null,
      cik: "0000008670",
      founded: "1961-09-01",
    },
  ]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("symbol");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showerror, setShowerror] = useState(false);
  const [emptyex, setEmptyex] = useState(true);

  const [searchs, setsearchs] = useState("");

  const API_KEY = "f09e040716cb0920a7927288d97a5067";

  async function getdata(index) {
    setLoading(true);
    console.log("The server has been hit");
    let url = `https://financialmodelingprep.com/api/v3/${index}?apikey=${API_KEY}`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      setRowdata(data);
      setShowdata(data);
      //console.log(data);
      if (data.length > 0) {
        setShowerror(false);
        setLoading(false);
      } else {
        setShowerror(true);
        toast.warn("There is no data available to display.");
        setLoading(false);
      }
    } catch (err) {
      setShowerror(true);
      toast.error("There was an issue with retrieving data from the server.");
      setLoading(false);
    }
  }
  //console.log(exchange, "rebuild");

  useEffect(() => {
    //console.log(exchange, "rebuild");
    if (exchange != null) {
      setEmptyex(false);
      //getdata(exchange);
    } else {
      setLoading(false);
      setEmptyex(true);
    }
  }, [exchange]);

  // Table property start---------------------------
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // Table property--------------------------

  const searchSymbol = (searchedSymbol) => {
    setsearchs(searchedSymbol);
    // const filteredRows = rowdata.filter((row) => {
    //   return row.symbol
    //     .toString()
    //     .toLowerCase()
    //     .includes(searchedSymbol.toString().toLowerCase());
    // });
    // if (searchedSymbol.length < 1) {
    //   setShowdata(rowdata);
    // } else {
    //   setShowdata(filteredRows);
    // }
  };
  const handleTap = (params) => {
    setStockSymbol(params.symbol);
    console.log(params);
  };
  if (loading) {
    return <LoadingContainer />;
  }
  if (emptyex) {
    return (
      <>
        <div className="center-loading">
          <div className="error-container">
            <h4>Please select indexes</h4>
          </div>
        </div>
      </>
    );
  }
  if (showerror) {
    return (
      <>
        <div className="center-loading">
          <div className="error-container">
            <img alt="..." src={spaceimg} className="errorimg" />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Container sx={{ marginBottom: 1 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Search symbol"
                variant="outlined"
                size="small"
                value={searchs}
                onChange={(e) => searchSymbol(e.target.value)}
              />
            </Grid>
          </Grid>
        </Container>
        <Grid container justifyContent="center">
          <Paper sx={{ Width: "auto" }}>
            <TableContainer component={Paper} sx={{ maxHeight: "700px" }}>
              <Table stickyHeader size="small">
                <TableHeader
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={showdata.length}
                />
                {showdata.length > 0 ? (
                  <TableBody>
                    {stableSort(showdata, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <StyledTableRow
                            hover
                            tabIndex={-1}
                            key={row.symbol}
                            onClick={() => handleTap(row)}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} onClick={() => {}}>
                                  {value}
                                </TableCell>
                              );
                            })}
                            <TableCell></TableCell>
                          </StyledTableRow>
                        );
                      })}
                  </TableBody>
                ) : (
                  <TableBody>
                    <TableCell textAlign="center">
                      <Typography variant="body1"></Typography>
                      <p>No data Found</p>
                    </TableCell>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={showdata.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>

        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
      </div>
    </>
  );
}
