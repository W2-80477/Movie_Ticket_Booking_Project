import React from 'react'
import "./moviedetails.css"
import landscapeAnimal from "./Image/animal.jpeg"

function MovieDetails() {
    return (
        <>
        <div className='moviedetails'>
        <div className="container mt-5 movie-container">
      <div className="row">
        <div className="col-md-6">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-card">
                  <img src="your-movie-image.jpg" className="d-block w-100" alt="Movie Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="movie-details">
            <h2>Title</h2>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
            <p>duration</p>
            <p>Language</p>
            <p>Release Date: January 1, 2023</p>

            <button className="btn btn-primary btn-book-now">Book Now</button>
          </div>
        </div>
      </div>
    </div>
      </div>
      </>
    )
}

export default MovieDetails;

