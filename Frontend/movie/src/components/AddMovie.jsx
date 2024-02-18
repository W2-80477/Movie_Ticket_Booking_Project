import React, { useState } from 'react';
import "./moviedetails.css";
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    duration: '',
    language: '',
    release_date: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = async () => {
    try {
      const response = await fetch('http://localhost:4000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Optionally, you can handle success, e.g., show a success message or redirect to another page
      console.log('Movie added successfully!');
      navigate("/adminhome");
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className='moviedetails'>
      <div className="container mt-5 movie-container">
        {/* ... (your existing code) */}
        <div className="col-md-6">
          <div className="movie-add">
            {/* ... (your existing code) */}
            <div className="movie-add">
              <div className="movie-info">
                <h2>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={newMovie.title}
                    onChange={handleInputChange}
                  />
                </h2>
                <p>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={newMovie.description}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  Duration:
                  <input
                    type="text"
                    name="duration"
                    value={newMovie.duration}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  Language:
                  <input
                    type="text"
                    name="language"
                    value={newMovie.language}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  Release Date:
                  <input
                    type="date"
                    name="release_date"
                    value={newMovie.release_date}
                    onChange={handleInputChange}
                  />
                </p>
                <button className="btn btn-primary" onClick={handleAddMovie}>
                  Add Movie
                </button>
              </div>
            </div>
            {/* ... (your existing code) */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
