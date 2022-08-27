import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import {
    Container,
    Grid,
    TextField,
    Button
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export default function News() {
  const [value, setValue] = useState("AAPL");
  const [isNews, setIsNews] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleNews = (data) => {
    setIsNews(true)
  };

  const rows = [
    {Name :'Frozen yoghurt',value1: 159,value2: 6.0, value3:2, value4:4.0},
    {Name :'Frozen yoghurt1',value1: 159,value2: 6.0, value3:1, value4:4.0},
    {Name :'Frozen yoghurt3',value1: 159,value2: 6.0, value3:5, value4:4.0},
    {Name :'Frozen yoghurt4',value1: 159,value2: 6.0, value3:8, value4:4.0},
    {Name :'Frozen yoghurt5',value1: 159,value2: 6.0, value3:15, value4:4.0},
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
            <TextField
          
          id="outlined-size-small"
          value={value}
          size="sm"></TextField>
            </Grid>
            <Grid item>
            {!isNews &&<Button  sx={{ width: 150, height: 40 }}
                type="button"
                variant="contained"
                size="small"
               
                className="history-button"  onClick={() => handleNews("AAPL")}><SearchIcon />Apple INc </Button>}
          {isNews && <Button  sx={{ width: 150, height: 40 }}
                type="button"
                variant="contained"
                size="small"
                
                className="history-button"  onClick={() => setIsNews(false)}> <SearchIcon /> Apple INc </Button>}
             
            </Grid>
          </Grid>
      
         {isNews &&  <Grid container spacing={2}>
  <Grid item xs={12}>
    
    <Paper>
    <TableContainer>
      <Table size="small" aria-label="simple table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.value1}</TableCell>
              <TableCell align="right">{row.value2}</TableCell>
              <TableCell align="right">{row.value3}</TableCell>
              <TableCell align="right">{row.value4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    
  </Grid>
  </Grid>}
        </Container>
      </Container>
    </div>
  );
}
