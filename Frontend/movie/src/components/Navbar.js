import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom' ;
import logo from "../Image/logo.jpg";


function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo-movie'/>
        <ul className='nav-manu'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/signup'><li>SignUp</li></Link>
        <Link to='/signin'><li>Signin</li></Link>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  )
}

export default Navbar
