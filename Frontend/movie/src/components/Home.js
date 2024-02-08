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
        <div id="carouselExampleIndicators" className="carousel_slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={landscapeHanuman} className="d-block w-100" alt="hanuman_pic" />
            </div>
            <div className="carousel-item">
              <img src={landscapeAnimal} className="d-block w-100" alt="animal_pic" />
            </div>
            <div className="carousel-item">
              <img src={landscapeSalaar} className="d-block w-100" alt="salaar" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>


      <div className='movie-card'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={hanuman} className="card-img-top" alt="hanuman" />
              <div className="card-body">
                <h5 className="card-title">Hanuman</h5>
                <p className="card-text">Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={animal} className="card-img-top" alt="animal" />
              <div className="card-body">
                <h5 className="card-title">Animal</h5>
                <p className="card-text">The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={salaar} className="card-img-top" alt="salaar" />
              <div className="card-body">
                <h5 className="card-title">Salaar</h5>
                <p className="card-text">The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
