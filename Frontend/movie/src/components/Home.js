import React from 'react'
import "./home.css"
import hanuman from "../Image/hanuman.jpeg";
import animal from "../Image/animal.jpeg";
import salaar from "../Image/salaar.jpeg";
import landscapeAnimal from "../Image/landscapeAnimal.jpeg";
import landscapeHanuman from "../Image/landscapeHanuman.jpeg";
import landscapeSalaar from "../Image/landscapeSalaar.jpeg";

function Home() {
  return (
    <>
      <div className='carousel'>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={landscapeHanuman} class="d-block w-50" alt="hanuman_pic" />
            </div>
            <div class="carousel-item">
              <img src={landscapeAnimal} class="d-block w-50" alt="animal_pic" />
            </div>
            <div class="carousel-item">
              <img src={landscapeSalaar} class="d-block w-50" alt="salaar" />
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

      </div>


      <div className='movie-card'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-20">
              <img src={hanuman} class="card-img-top" alt="hanuman" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-50">
              <img src={animal} class="card-img-top" alt="animal" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-50">
              <img src={salaar} class="card-img-top" alt="salaar" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
