
import React, {useState, useEffect} from 'react';
import UserBookCard from './UserBookCard';
//MainGrid/Container
import CssBaseline from '@mui/material/CssBaseline';
import {Box, TextField} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Filters from './SearchAndFilterBar';

function Home({ user }) {
  const [userBookData, setUserBookData] = useState([])
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [selectedBook, setSelectedBook] = useState("")
  
  
  
  
  useEffect(() => {
    fetch('http://localhost:3000/user_books')
    .then(resp => resp.json())
    .then((data) => console.log(data))
  }, [])


  const onRemoveBookEvent = id => {
    setUserBookData(userBookData.filter(b => b.id != id));
 };

 const handleEditBook = updatedBook => {
  setUserBookData(userBookData.map((book) =>
  book.id === updatedBook.id ? updatedBook : book
));
}
 
  

  const userBooksList = userBookData.map((book) => (
  <Grid item xs={12} sm={6} md= {4} key={book.id}>
    <UserBookCard 
    key={book.id}
    userbook={book} 
    selectecBook={selectedBook}
    handleEditBook={handleEditBook}
    onRemoveBookEvent={onRemoveBookEvent}
    /> 
  </Grid>
))

  
  
  if (!user) {
    return <h1>Please Login or Sign Up</h1>;
    
  } else if (user && userBookData.length > 0) {

    return (
      <React.Fragment>
      <CssBaseline />
        <h1>Welcome, {user.username}!</h1>
      <Container fixed sx={{ bgcolor: '#eeeae7', flexGrow: 1}}>
        <Container fixed>
          <Grid container spacing={2}>
            {userBooksList}
          </Grid>
        </Container>
      </Container>
    </React.Fragment>
    
    )
    
  } else {
    <h1>Welcome, {user.username}!</h1>
    return  <h1>No books added yet! Visit the Public Library to add to your shelf.</h1>;
  }
}

export default Home;