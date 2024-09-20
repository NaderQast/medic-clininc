import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import * as bootstrap from'bootstrap'
 


const LoginForm = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const[error,setError] = useState('')
    const navigate = useNavigate() ;


   const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const response = await axios.post('https://medical-clinic.serv00.net/api/login',{username,password});
        const token = response.data.token;
        localStorage.setItem('authToken',token);
        navigate('/dashboard')
        .then(console.log(username))
      }
      catch(error){
        setError(error.response.message || 'wrong credentials')
      }
   }
  
    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            
              <div className='form-group'>                <label>Username</label><br/>
              <input type="username" id="username" className='form-control ' placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/><br/></div>
              <div className='form-group'>
              <label>Password:</label><br/>
              <input type="password" id="password" className='form-control' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>


            
            <button  type='submit' style={{marginTop: '10px'}} className="btn btn-primary">Login</button>
            {error && <p>{error}</p>}

        </form>
    </div>
  )
}

export default LoginForm