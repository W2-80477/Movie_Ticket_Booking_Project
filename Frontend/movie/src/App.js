import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIN from "./components/SignIn";
import Footer  from "./components/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element = { <Home/> }/>
          <Route path="/signup" element = { <SignUp/> } />
          <Route path="/signin" element = { <SignIN/> } />
        </Routes>
        <ToastContainer theme="dark"/>
       </BrowserRouter>
       <Footer/>
    </>
  );
}

export default App;
