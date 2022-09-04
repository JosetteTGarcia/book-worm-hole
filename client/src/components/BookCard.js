import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions} from '@mui/material';



function BookCard({book})
{
 
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
    {/* {(book.completed) ? <>
          <Rating
              type="number"
              name="rating"
              value={book.rating}
              id="rating"
            /> </>
            : null}
    {showDetails ? <ExtraBookInfo book={book} /> : null} */}
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button>
        Add to booshelf
      </Button>
      
    </CardActions>
  </Card> 

)

}

export default BookCard; 