import React from "react";
import {Link} from 'react-router-dom';

 const menuItems = <>
    
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/ourPortfali'>Our Portfali</Link></li>
    <li><Link to='/ourTeam'>Our Team</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/login'>Login</Link></li>
   
 
 </>

const Navbar = () => {
    return(
        <div className="navbar bg-secondary">
        <div className="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

          {
            menuItems
          }
            </ul>
          </div>


          <p className="btn btn-ghost normal-case text-xl">AGENCY </p>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
           {
            menuItems
           }
          </ul>
         </div>

      </div>
    );
};

export default Navbar