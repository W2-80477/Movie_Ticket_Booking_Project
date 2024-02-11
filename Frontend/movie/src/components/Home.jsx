import  React,{useEffect, useState} from 'react'
import "./home.css"
// import hanuman from "../Image/hanuman.jpeg";
// import animal from "../Image/animal.jpeg";
// import salaar from "../Image/salaar.jpeg";
import landscapeAnimal from "./Image/landscapeAnimal.jpeg";
import landscapeHanuman from "./Image/landscapeHanuman.jpeg";
import landscapeSalaar from "./Image/landscapeSalaar.jpeg";
import { Link } from "react-router-dom"
import axios from "axios"

import { Button, Box } from '@mui/material';
import MovieItem from './movie/MovieItem';

function Home() {
const [movie, setMovie] = useState([]);
const getAllMovies = async () => {
  try {
    const res = await axios.get("http://localhost:4000/movies");
    console.log(res)
    return res.data;
  } catch (err) {
    console.error("Error fetching movies:", err);
    return { movies: [] };
  }
};

useEffect(() => {
  getAllMovies()
    .then((data) => {
      console.log(data); // Check the structure of the data
      setMovie(data.movies);
    })
    .catch((err) => console.log(err));
}, []);

console.log(movie);


  return (
    <>
<div id="carouselExampleIndicators" class="carousel slide" style={{height: '400px', overflow: 'hidden'}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={landscapeHanuman} className="d-block w-100" alt="hanuman_pic" />
    </div>
    <div class="carousel-item">
      <img src={landscapeAnimal} className="d-block w-100" alt="animal_pic" />
    </div>
    <div class="carousel-item">
      <img src={landscapeSalaar} className="d-block w-100" alt="salaar" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Box display="flex" width="80%" justifyContent="center" marginTop={0.5}>
  {movie && movie.map((movie,index) => {
    console.log(movie)
     return <MovieItem 
     key={index} 
     id={movie.movie_id}
     title={movie.title} 
     releaseDate={movie.release_date} 
     description={movie.description} 
     duration={movie.duration} 
     language={movie.language} />

})}
</Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button LinkComponent={Link} to="/movie" variant='outlined' sx={{margin:"auto", color:"red"}} >
         View All Movies
        </Button>
      

      </Box>
  
    </>




  )
}

export default Home
