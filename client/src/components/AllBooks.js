import React, { useState} from 'react'
import BookCard from './BookCard';

//MainGrid/Container
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function AllBooks() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ bgcolor: '#eeeae7', flexGrow: 1}}>
        <Container fixed>
      <Grid container spacing={2}>
        <BookCard/>
      </Grid>
      </Container>
      </Container>
    </React.Fragment>

  )
}

export default AllBooks;