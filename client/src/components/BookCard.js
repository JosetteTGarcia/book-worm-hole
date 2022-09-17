import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions} from '@mui/material';



function BookCard({book, user})
{
 

  const handleAddClick = () => {
   console.log(book)
   console.log(user)
    fetch('/api/user_books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        book_id: book.id,
        date_started: new Date().toISOString().slice(0, 10)
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  
  }

  return (
  
    <Card sx={{ maxWidth: 200}} variant="outlined">
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={book.img_url}
        alt="cover image"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {book.title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {book.author}
    </Typography>
    {/* <Typography variant="body2" color={(book.completed) ? "green": "#ff4d4d"}>
      {(book.completed) ? <>Completed </>: <>Currently Reading </>}
    </Typography> */}
    <Rating
        type="number"
        name="rating"
        value={book.average_rating}
        id="rating"
        readOnly
      /> 
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button 
        size="small"
        onClick={handleAddClick}
      >
        Add to booshelf
      </Button>
      
    </CardActions>
  </Card> 

)

}

export default BookCard; 