import React, { useState, useEffect } from 'react'
import "./moviedetails.css"
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails() {

  const navigate = useNavigate();
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movie_id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched movie details:', data);

        const selectedMovie = data[0];

        setMovie(selectedMovie);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movie_id]);


  if (!movie) {

    return <div>Loading...</div>;
  }
 
 const handleBookNow =()=>{
    navigate("/theaters")
 }

  return (
    <div className='moviedetails'>
      <div className="container mt-5 movie-container">
        <div className="row">
          <div className="col-md-6">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-card">
                    <img src={movie.image} className="d-block w-100" alt={movie.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Description: {movie.description}</p>
              <p>Duration: {movie.duration}</p>
              <p>Language: {movie.language}</p>
              <p>Release Date: {movie.release_date}</p>

              <button className="btn btn-primary btn-book-now" onClick={handleBookNow}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MovieDetails;



