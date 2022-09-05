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

//Main GET for initial component render
  useEffect(() => {
      fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => setBookData(data))
      .then(console.log(bookData))
    }, [])

//     const displayedPlants = plants.filter((plant) => {
//       return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
//     });

// //Update BookData for search or Filter
// useEffect(() => {
//   const sortedBooksList = [...bookData].sort((book1 , book2) => {
//   console.log("I'm in")
//   if (sortBy === "rating") {
//     console.log("hello, i'm rating")
//     return book2.rating - book1.rating;
//   } else if (sortBy === "oldest"){
//     console.log("hello, i'm oldest")
//     return new Date(book1.dateStarted) - new Date(book2.dateStarted);
//   } else {
//     console.log("hello, i'm newest")
//     return new Date(book2.dateStarted) - new Date(book1.dateStarted);
//   }
// })
// setBookData(sortedBooksList)
// },[sortBy, search])


    const publicBooksList = bookData.filter((book) => 
    {
      if (book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())){
        return book.title
      }
    })
    .map((book) => (
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
        <Filters 
          setSortBy={setSortBy} 
          sortBy={sortBy}
          setSearch={setSearch}
          search={search}
        
        />
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