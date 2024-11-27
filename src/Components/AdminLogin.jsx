import React, { useEffect, useState } from 'react'
import '../styles/AdminLogin.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function AdminLogin() {
  let [username,setUsername] = useState("");
  console.log(username);
  let [password,setPassword] = useState("");
  console.log(password);

  let [admin,setAdmin] = useState([]);
  
  useEffect(()=>{
    async function fecthAdmin(){
      let data =await fetch('http://localhost:1000/Admin')
      let res =await data.json();
      setAdmin(res) 
     }
     fecthAdmin()
  },[])
  console.log(admin);


  let navigate = useNavigate();

  function login(){
   let val =  admin.filter((x)=>
    { return x.email == username && x.password == password } )    
   if(val.length > 0){
      alert("Login Successfull")
      navigate('/adminhomepage')
    }
    else{
      alert("Invalid Credentials")
    }
  }
  
  return (
    <div className='AdminLogin'>
      <form action="">
        <label htmlFor="">
          Username : 
        </label>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}
         placeholder='Enter the Username' required />
        <label htmlFor="">
          Password :
        </label>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}
         placeholder='Enter the Password' required />
        <button onClick={login}>Login</button>
        
        <span>Click here to <Link to='/adminsignup'>Sign Up</Link></span>
      </form>
    </div>
  )
}
