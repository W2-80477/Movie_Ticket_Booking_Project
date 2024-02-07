import React,{useState} from 'react';
import logo from '../Image/logo.jpg';
import { Link, useNavigate } from "react-router-dom"

function SignIn() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



const postData=()=>{
  if(""===email && ""=== password){
    return
  }
     fetch("http://localhost:4000/login",{
     method:"post",
     headers:{"Content-Type" : "application/json"},
     body: JSON.stringify({
      email_id:email,
      password:password
     })
     }).then(res=>res.json())
     .then(data=>{
      if(data.error){
        console.log(data.error)
      }else{
        console.log(data.message)
        navigate("/") 
      }
     })
}



  return (
    <div className='signin'>
      <div className='from-container'>
        <div className='loginForm'>
          <img className='signinLogo' src={logo} alt='logo' />
          <div>
            <input type='email' 
            name='email' 
            id='email' 
            placeholder='Enter Your Email' 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <input type='password'
             name='password'
              id='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}} 
              />
          </div>
          <input type='submit'
           id='login'
           onClick={()=>{postData()}}
             />
          <div className='loginform'>
            Don't have account ?
            <Link to='/signup'>
              <span style={{color: "red", cursor:"pointer"}}> SignUp</span>
            </Link>

          </div>
        </div>

      </div>
      
    </div>
  )
}

export default SignIn
