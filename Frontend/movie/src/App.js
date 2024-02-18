// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieDetails from './components/MovieDetails';
import Theaters from './components/Theaters';
import HomeAdmin from './components/HomeAdmin';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/moviedetails/:movie_id" element={<MovieDetails />} />
          <Route path='/theaters' element={<Theaters/>}/>
          <Route path='/adminhome' element={<HomeAdmin/>}/>
          <Route path='/addmovie' element={<AddMovie/>}/>
        </Routes>
        <ToastContainer theme="dark" />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
