import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route,Routes} from "react-router-dom";


import Home from './components/home'


import Userlogin from './components/user/login'
import Usernav from './components/user/usernav'
import Userreg from './components/user/register'

import Washerlogin from './components/washer/washerlogin'
import Washernav from './components/washer/washernav'
import Washerreg from './components/washer/washerreg'

import Adminlogin from './components/admin/adminlogin'
import Adminnav from './components/admin/adminnav'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />        
          <Route path="/userlogin/*" element={<Userlogin/>} /> 
          <Route path="/usernav" element={<Usernav/>} /> 
          <Route path="/userreg" element={<Userreg/>} /> 
          <Route path="/washerlogin/*" element={<Washerlogin/>} /> 
          <Route path="/washernav" element={<Washernav/>} /> 
          <Route path="/washerreg" element={<Washerreg/>} /> 
          <Route path="/adminnav" element={<Adminnav/>} /> 
          <Route path="/adminlogin" element={<Adminlogin/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
