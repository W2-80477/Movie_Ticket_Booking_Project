import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom' ;
import logo from "../Image/logo.jpg";


function Navbar() {
  return (
    <>
 
    <nav class="navbar  navbar-expand-lg bg-dark" data-bs-theme="dark" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Movie_Booking</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to ="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signin">SignIn</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
    // <div className='navbar'>
    //     <img src={logo} alt='logo-movie'/>
    //     <ul className='nav-manu'>
    //     <Link to='/'><li>Home</li></Link>
    //     <Link to='/signup'><li>SignUp</li></Link>
    //     <Link to='/signin'><li>Signin</li></Link>
    //     </ul>
    //     <form class="d-flex" role="search">
    //     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //     <button class="btn btn-outline-success" type="submit">Search</button>
    //   </form>
      
    // </div>
  )
}

export default Navbar
