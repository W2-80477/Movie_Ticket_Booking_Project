import React from 'react'
import {Card, CardActions,CardContent, CardMedia, Button, Typography} from '@mui/material';
import hanuman from "../Image/hanuman.jpeg"

function MovieItem(movie_id,title,description,duration,language,release_date) {
  return (
    <>
      <Card sx={{ margin:1, Width: 250, height:320, borderRadius:5, ":hover":{boxShadow:"10px 10px 20px #ccc",} }}>
        
    <img height={'80%'} width={"100%"} src={hanuman} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{margin: "auto"}} size="small">Share</Button>

      </CardActions>
    </Card>
    </>
  )
}

export default MovieItem
