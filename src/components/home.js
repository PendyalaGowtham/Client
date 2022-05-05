import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import "./home.css"

class home extends Component {
    render(){
    return (
        <React.Fragment>
         <header>
         <h2>Clean Car Wash Company</h2>
         </header>
             
          
        <br/>
        <br/>
        <nav className='navbar navbar-expand navbar-light fixed-top'>
    
        <div className='container'> 
          <Link className='navbar-brand' to={'/'}>Home</Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/usernav'}>User Login</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/washernav'}>Washer Login</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/adminnav'}>Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </React.Fragment>
    );
    }
}

export default home;