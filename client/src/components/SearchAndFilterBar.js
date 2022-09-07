import React from 'react'
//Filter Drop Down menu
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Box, TextField} from '@mui/material';
import AppBar from '@mui/material/AppBar';





function Filters({setSortBy, sortBy, setSearch, search}){

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    event.preventDefault()
    setSortBy(event.target.value);
  };


  
  return (
    <Box sx={{ bgcolor: '#eeeae7', flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#eeeae7'}}>
      <div>
      <TextField 
        id="standard-basic" 
        label="Search By Title or Author" 
        variant="standard"
        size="small"
        onChange={handleSearchChange}

      />
    {/* <InputLabel id="demo-select-small">Sory By</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value="rating"
        label="sortBy"
        size="small"
        // onChange={handleFilterChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="rating" >Rating: Highest - Lowest</MenuItem>
        <MenuItem value="newest" >Newest - Oldest</MenuItem>
        <MenuItem value="oldest">Oldest - Newest</MenuItem>
      </Select> */}
      </div>
    </AppBar>
    </Box>
  )

}

export default Filters;