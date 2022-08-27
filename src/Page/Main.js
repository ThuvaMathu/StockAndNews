import React from 'react'
import '../App.css';
import { Box, Grid, IconButton, Stack, Button, styled, Paper,} from '@mui/material';
import { width,} from '@mui/system';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


export default function Main() {

  return (
    <div className='bg'>
      
          <Grid container>
            
              <Box sx={{ width:{xs:'82%' ,lg:'98%'},
                marginLeft: '20px', marginTop: '40px', height: '900px',
                bgcolor: '#363434', boxShadow: ' 0px 4px 4px rgba(3, 28, 249, 0.25)', borderRadius: '4px'
              }}>
                  <Box sx={{ flexGrow: 0.5 }}>
                  <Grid container spacing={0.2}>

                    <Grid item xs={11.5} lg={2} >
                      <Button variant="contained" sx={{ marginLeft: '15px', marginTop: '20px', height: '55px', width: '300px' }}></Button>

                    </Grid>
                    <Grid item xs={11.5} lg={2} >
                      <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        sx={{ marginLeft: '40px', marginTop: '20px', }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 0.5 }}> 
                  <Grid container spacing={0.2}>
                  <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    </Grid>
                    <Box sx={{ flexGrow: 0.5 }}> 
                  <Grid container spacing={0.2}>
                  <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={0.8} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                  </Grid>
                  </Box>
                    </Box>
              
                 <Box sx={{ flexGrow: 0.5 }}>
          <Grid container spacing={0.5  }>
            <Grid item xs={11.5} lg={5.9} >
                 <Box sx={{ 
                marginLeft: '20px', marginTop: '50px', height: '600px',
                bgcolor: '#363434', boxShadow: ' 10px 5px 50px rgba(3, 28, 249, 0.25)', borderRadius: '4px'
              }}></Box>
                </Grid>
                
              
               
               
                <Grid item xs={11.5} lg={5.9} >
               
                <IconButton sx={{width:{xs:'96%',lg:'10%'} , marginTop:'-280px',}}>
                  <SwipeRightIcon sx={{fontSize: "80px" }}/>
                </IconButton>
                <Box sx={{ flexGrow: 0.5 }}>
                  <Grid container spacing={0.2}>

                    <Grid item xs={11.5} lg={4} >
                      <Button variant="contained" sx={{ marginLeft:'40px', marginTop: '-80px', height: '55px', width: '300px' }}></Button>

                    </Grid>
                      <Grid item xs={11.5} lg={4}>
                      <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        sx={{ marginLeft: '40px', marginTop: '-50px', }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                    
                 <Box sx={{ 
                marginLeft: '20px', marginTop: '10px', height: '600px',
                bgcolor: '#363434', boxShadow: ' 10px 5px 50px rgba(3, 28, 249, 0.25)', borderRadius: '4px'
              }}>
                  <Grid item xs={11.5} lg={6} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px',display:'block',margin:'auto',
                      }}>Text</Button>
                    </Grid>
              </Box>
                </Grid></Grid>
              </Box>
              
                </Box></Grid>
                
              

      </div>

  )
}





/* </Grid>
                <Grid item xs={11} lg={11.8} >
                <IconButton sx={{width:{xs:'96%',lg:'100%'} , marginTop:'-500px',}}>
                  <SwipeRightIcon sx={{fontSize: "80px" }}/>
                </IconButton></Grid>
                <Grid item xs={11} lg={5.9} >*/



/*export default function Main() {

  return (
    <div>
      <div className='bg'>

                <Button variant="contained" sx={{ marginLeft:'40px', marginTop: '-50px', height: '55px', width: '300px',display:'flex' }}></Button>


        <Box sx={{ flexGrow: 0.5 }}>
          <Grid container spacing={0.5  }>
            <Grid item xs={11} lg={5.9} >
              <Box sx={{
                marginLeft: '20px', marginTop: '20px', height: '940px',
                bgcolor: '#363434', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '4px'
              }}>
                <Box sx={{ flexGrow: 0.5 }}>
                  <Grid container spacing={0.2}>

                    <Grid item xs={11.5} lg={6} >
                      <Button variant="contained" sx={{ marginLeft: '15px', marginTop: '20px', height: '55px', width: '300px' }}></Button>

                    </Grid>
                    <Grid item xs={11.5} lg={6} >
                      <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        sx={{ marginLeft: '40px', marginTop: '20px', }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 0.5 }}> 
                  <Grid container spacing={0.2}>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                    <Grid item xs={4} lg={2} >
                      <Button variant="text" sx={{
                        marginTop: '20px', height: '50px', marginLeft: '15px',
                      }}>Text</Button>
                    </Grid>
                  </Grid>
                  
                  
                </Box>

              </Box>
            </Grid>

            <Grid item xs={11} lg={5.9} >
              <Box sx={{
                marginTop: '20px', height: '940px', marginLeft: '17px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '4px',
                bgcolor: '#363434',
              }}>
                <Box sx={{ flexGrow: 0.5 }}>
                  <Grid container spacing={0.2}>

                    <Grid item xs={8} lg={4} >
                      <Button variant="contained" sx={{ marginLeft: '15px', marginTop: '20px', height: '55px', width: '300px' }}></Button>

                    </Grid>
                    <Grid item xs={8} lg={4} >
                      <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        sx={{ marginTop: '20px', }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{width:{xs:'88%' ,lg:'95%'},
                      marginLeft: '20px', marginTop: '20px', height: '675px',bgcolor:' #363434',
                      boxShadow: '  5px 5px 50px rgba(35, 66, 177, 0.25) ', borderRadius: '4px'
                    }}>

                    </Box>
               </Box>

            </Grid>

          </Grid>

        </Box>

      </div>

    </div >





  )
}*/





