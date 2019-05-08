import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';


function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="container xl mx-auto">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <Link to='/'> <img id='logo' src={Logo} alt="logo"/></Link>           
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                
            </div>
        </div>        
    </nav>
  )
};

export default Navbar;
