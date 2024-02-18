import React from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {
 
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate("/signin")
  };

  return (
    <>
 
    <nav className="navbar  navbar-expand-lg bg-dark" data-bs-theme="dark" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">ASR Movies</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signin">SignIn</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="ml-2">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
    </div>
  </div>
</nav>

    </>
 
  )
}

export default Navbar
