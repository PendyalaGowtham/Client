import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from 'react-router';
import { Link } from 'react-router-dom';

function Login()  {

    const[data,setData]=useState({
        name:"",
        password:""
    })

    const navigate =  useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const username = data.name
        const password = data.password
        axios.post('http://localhost:9094/admin/authenticate',null,{params: {username, password}})
        .then(res => {
            console.log(res.data)
            localStorage.setItem('admintoken',res.data);
            navigate("/adminnav")

        })
        .catch(err => {
            console.log(err)
        })
    };

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
    }
    return (

        <main>
        <form onSubmit={handleSubmit}>

<Link className='navbar-brand' to={'/'}>Home</Link>
        <header>
           <h3>Login</h3>
       </header>

        <div className="form-group">
          <label>username</label>
          <input type="text" className="form-control" placeholder="username" 
          onChange={e=>handle(e)} id="name" value={data.username}/>
      </div>
       
      <div className="form-group">
          <label>password</label>
          <input type="password" className="form-control" placeholder="password" 
           onChange={e=>handle(e)} id="password" value={data.password}/>
      </div>

      <div className='form-group'>
          <button className='Btn ' >Login</button>
      </div>
      
    </form>
    </main>
    )
}

export default Login