import React, {useState, useEffect} from 'react';
import BookCard from './BookCard';

//MainGrid/Container
import CssBaseline from '@mui/material/CssBaseline';
import {Box, TextField} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Filters from './SearchAndFilterBar';


function AllBooks() {

  const [bookData, setBookData] = useState([])
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
      fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => setBookData(data))
      .then(console.log(bookData))
    }, [])

    const publicBooksList = bookData.map((book) => (
    <Grid item xs={12} sm={6} md= {4} key={book.id}>
      <BookCard 
      key={book.id} 
      book={book} 
      /> 
    </Grid>
  ))


  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ bgcolor: '#eeeae7', flexGrow: 1}}>
        <Filters setSortBy={setSortBy} sortBy={sortBy}/>
      </Container> <br/>
      <Container fixed sx={{ bgcolor: '#eeeae7', flexGrow: 1}}>
        <Container fixed>
      <Grid container spacing={2}>
      {publicBooksList}
      </Grid>
      </Container>
      </Container>
    </React.Fragment>

  )
}

export default AllBooks;