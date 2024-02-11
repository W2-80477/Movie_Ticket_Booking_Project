import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom' ;
// import logo from "../Image/logo.jpg";


function Navbar() {
  return (
    <>
 
    <nav className="navbar  navbar-expand-lg bg-dark" data-bs-theme="dark" >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Movie_Booking</a>
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
    </div>
  </div>
</nav>

    </>
    // <div classNameName='navbar'>
    //     <img src={logo} alt='logo-movie'/>
    //     <ul classNameName='nav-manu'>
    //     <Link to='/'><li>Home</li></Link>
    //     <Link to='/signup'><li>SignUp</li></Link>
    //     <Link to='/signin'><li>Signin</li></Link>
    //     </ul>
    //     <form className="d-flex" role="search">
    //     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //     <button className="btn btn-outline-success" type="submit">Search</button>
    //   </form>
      
    // </div>
  )
}

export default Navbar
