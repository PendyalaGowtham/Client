import React, { Component,useState,useEffect } from "react";
import {Link} from "react-router-dom";

function Usernav(props) {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user =localStorage.getItem('washertoken');
    
        if (user) {
          setCurrentUser(user);
        }
      }, []);

      const logOut = () => {
        localStorage.removeItem('washertoken');
      };
    return (
        <div>
            <nav className='navbar navbar-expand navbar-light fixed-top'>
                <div className='container'>
       {currentUser ? (
           <div className="navbar-nav ms-auto">
             <li className="nav-item">
               <a href="/" className="nav-link" onClick={logOut}>
                 Logout
               </a>
             </li>
           </div>
         ) 
         : (
            <div>
            <div className="navbar-nav ms-auto">
             <li className="nav-item">
               <Link to={"/washerlogin"} className="nav-link">
                 Login
               </Link>
             </li>
           </div>
            <div className="navbar-nav ms-auto">
             <li className="nav-item">
                <Link to={"/washerreg"} className="nav-link">
                 Register
                </Link>
             </li>
            </div>
             </div>
         )
         }
         </div>
    </nav>
        </div>
    );
}

export default Usernav;