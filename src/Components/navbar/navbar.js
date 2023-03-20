import React from 'react';
import './navbar.css';
import {BsFillPersonFill} from 'react-icons/bs';
import {FcHome} from 'react-icons/fc';
import {GiTennisBall} from 'react-icons/gi';
import { useState } from 'react';
import {GiHamburgerMenu}from 'react-icons/gi';
const Navbar = () => {
  const[fix,setfix]=useState(false)
function setfixed(){
if(window.scrollY > 80){
  setfix(true);
}else{
 setfix(false);
}}
window.addEventListener("scroll",setfixed)
    return (
        
            <nav className= 'navbar  nav-2 navbar-expand-lg border-bottom border-secondary'>
  <a className="navbar-brand" href="/"><i><FcHome style={{color:'#85D236'}}/></i>Magic Villa</a>
 
  <button className="navbar-toggler navbar-dark pull-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <FcHome/>
  </button>
 
  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav">
    <a className="nav-item nav-link" href="/">Acceuil</a>
      <a className="nav-item nav-link" href="/houses">Maisons</a>
      <a className="nav-item nav-link" href="/contacts">Contacts</a>
      <a className="nav-icon" href="#"><i><BsFillPersonFill/></i></a>
    </div>
    
  </div>
  
</nav>
      
    );
}

export default Navbar;