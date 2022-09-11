import React, { useState, useEffect, useRef} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Button, CardActionArea, CardActions, Collapse, TextField} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';





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

  


function UserBookCard({userbook, onRemoveBookEvent, handleEditBook}){
  const didMount = useRef(false);

  const [expanded, setExpanded] = useState(false);
  const [editBook, setEditBook] = useState(false)
  const [bookEdits, setBookEdits] = useState({
    rating: 0,
    user_notes: ""
  })

 
  const handleExpandClick = () => {
    setExpanded(!expanded); }

  const handlEditClick = () => {
    setEditBook(!editBook)

  }

  const handleChange = (event) => {
     setBookEdits({
      ...bookEdits,
      [event.target.name]: event.target.value
     })
  }

  const handleCompleted = () => {
    fetch(`http://localhost:3000/user_books/${userbook.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...userbook,
        is_completed: true,
        date_completed: new Date().toISOString().slice(0, 10)}),
    })
      .then((r) => r.json())
      .then((data) => handleEditBook(data))
  }


  const saveChanges = () => {
    fetch(`http://localhost:3000/user_books/${userbook.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookEdits),
    })
      .then((r) => r.json())
      .then((data) => handleEditBook(data))
      .then(setEditBook(false))
  }


    const removeClick = (event) => {
      const book = event.currentTarget.value
      fetch(`http://localhost:3000/api/user_books/${book}`, {
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
  <>
    {!editBook ? 
    <Card sx={{ maxWidth: 400}} variant="outlined">
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
        readOnly
      /> 
      </CardContent>
    <CardActions>
    
    <Button 
      size="small"
      value={userbook}
      onClick = {handlEditClick}
    >
      <EditIcon/>
    </Button> <br/>

    {(userbook.is_completed) ? 
           null
            : <> 
              <Button
              name="is_completed"
              size="small" 
              value={userbook.is_completed}
              onClick={(e) => handleCompleted(e)}
              >
              <CheckCircleOutlineOutlinedIcon/>
            </Button>
     </> }
    <Button size="small"
            value={userbook.id}
            onClick={(e) => removeClick(e)}
            >
              <DeleteIcon/>
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
        </CardContent>
      </Collapse>
  </Card> 
  
  ///EDIT BOOK CONTENT VVVV
  :

  <Card sx={{ maxWidth: 400}}>
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
    </Typography> <br/>
    <Rating
          type="number"
          name="rating"
          onChange={handleChange}
          defaultValue={userbook.rating}
          id="rating"
        /> <br/>
    <TextField
          id="outlined-multiline-static"
          name="user_notes"
          label="Review"
          multiline
          rows={4}
          onChange={handleChange}
          defaultValue={userbook.user_notes}
        />
        <CardActions>
        <Button 
          size="small"
          variant="contained"
          value={userbook.id}
           onClick = {saveChanges}
          >
          Save Changes
        </Button>
        </CardActions>
    </CardContent>
  </Card>
    }


  </>

)

}

export default UserBookCard; 