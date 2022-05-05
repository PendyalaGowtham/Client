import React, { Component, useState } from 'react'
import axios from  'axios';
import {useNavigate} from 'react-router';
import './userlogin.css';

function Register() {

    const [data,setData]=useState({
        name:"",
        gmail: "",
        password: "",
        location:"",
        username: ""
    })

    const navigate =  useNavigate();


    const handleSubmit = e => {
        e.preventDefault();

        const userdetails = {
            name: data.name,
            gmail: data.gmail,
            password: data.password,
            location: data.location,
            username: data.username
        };
        axios.post('http://localhost:9095/user/adduser',userdetails).then(
            res => {
                console.log(res.data)
                navigate("/userlogin")
            }
        ).catch(
            err => {
                if(err.response.status === 400)
                {
                    alert("username already exists")
                }
            }
        )
    };

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
    }

    return (
        <main>
      <form onSubmit={handleSubmit}>
          <header>
          <h3>Sign up</h3>
          </header>
          <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" placeholder="Name" 
                onChange={e=>handle(e)} id="name" value={data.name}/>
          </div>
        <div className="form-group">
            <label>gmail</label>
            <input type="email" className="form-control" placeholder="Email" 
                 onChange={e=>handle(e)} id="gmail" value={data.gmail}/>
        </div>
        <div className="form-group">
            <label>password</label>
            <input type="password" className="form-control" placeholder="password" 
            onChange={e=>handle(e)} id="password" value={data.password}/>
        </div>
        <div className="form-group">
            <label>location</label>
            <input type="text" className="form-control" placeholder="location" 
            onChange={e=>handle(e)} id="location" value={data.location}/>
        </div>
        <div className="form-group">
            <label>username</label>
            <input type="text" className="form-control" placeholder="username" 
            onChange={e=>handle(e)} id="username" value={data.username}/>
        </div>

        <div className='form-group'>
            <button className='Btn '> Sign up </button>
        </div>
        
      </form>
      </main>
    )
}

export default Register