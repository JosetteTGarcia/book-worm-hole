import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Button, CardActionArea, CardActions, Collapse} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  


function UserBookCard({userbook, onRemoveBookEvent}){
  const [expanded, setExpanded] = useState(false);

 
  const handleExpandClick = () => {
    setExpanded(!expanded); }


    const removeClick = (event) => {
      const book = event.target.value
      fetch(`http://localhost:3000/user_books/${book}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
        })
      .then((r) => r.json())
      .then(onRemoveBookEvent(book))
    }

  return (
  
    <Card sx={{ maxWidth: 200}} variant="outlined">
      <CardMedia
        component="img"
        height="300"
        image={userbook.book.img_url}
        alt="cover image"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {userbook.book.title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {userbook.book.author}
    </Typography>
    <Typography variant="body2" color={(userbook.is_completed) ? "green": "#ff4d4d"}>
      {(userbook.is_completed) ? <>Completed </>: <>Currently Reading </>}
    </Typography>
    <Rating
        type="number"
        name="rating"
        value={userbook.rating}
        id="rating"
      /> 
      </CardContent>
    <CardActions>
    
    <Button 
      size="small"
      onClick = {(book) => console.log(book)}
    >
      Add Notes
    </Button>
    <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Date Started: <br/>
        {userbook.date_started}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Date Completed: <br/>
        {userbook.date_completed}
        </Typography>
        <Typography paragraph>
          Notes: <br/>
          {userbook.user_notes}
        </Typography>
        <CardActions>
            <Button size="small">
              Mark Completed
            </Button>
            <Button size="small"
            value={userbook.id}
            onClick={removeClick}
            >
              Remove from Shelf
            </Button>
        </CardActions>
        </CardContent>
      </Collapse>
  </Card> 

)

}

export default UserBookCard; 