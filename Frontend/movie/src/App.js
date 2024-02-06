import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIN from "./components/SignIn";
import Footer  from "./components/Footer";



function App() {
  return (
    <>
       <BrowserRouter>
       <div>
        <Navbar/>
        <Routes>
          <Route path="/" element = { <Home/> }/>
          <Route path="/signup" element = { <SignUp/> } />
          <Route path="/signin" element = { <SignIN/> } />
        </Routes>
        <Footer/>
       </div>
       </BrowserRouter> 
    </>
  );
}

export default App;
