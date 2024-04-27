import React, { useState } from 'react';
import logo from '../assest/logo.png';
import { Link } from 'react-router-dom';
import { HiMiniUser } from "react-icons/hi2";
import { MdShoppingCart } from "react-icons/md";
import './Header.css'; // Import the CSS file




const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  } 

  // Placeholder value for the number of items in the cart
  const cartItemsCount = 5; // Replace this with the actual count from your state or context
  
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
        {/* desktop */}
        <div className='h-full flex items-center justify-between'>
           <Link to ={""}> 
           <div className='h-12 logo-container'>
             <img src={logo} className='h-full pl-4' alt='Logo'/>
           </div>

           </Link>

           <div className='flex items-center gap-4 md:gap-7'>
             <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
               <Link to={''} className="nav-link home">Home</Link> {/* Add home class for Home link */}
               <Link to={'menu'} className="nav-link">Menu</Link>
               <Link to={'about'} className="nav-link">About</Link>
               <Link to={'contact'} className="nav-link">Contact</Link>
             </nav>
             <div className='text-2xl text-slate-600 relative'>
                <HiMiniUser onClick={handleShowMenu} className="cursor-pointer" />
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-20 bg-white shadow-md p-2 flex flex-col">
                    <Link to={'newproduct'} className='text-sm cursor-pointer'>New Product</Link>
                    <Link to={'login'} className='text-sm cursor-pointer'>Login</Link>
                  </div>
                )}
             </div>
             <div className='text-2xl text-slate-600 relative'>
                

                <div className='text-2xl text-slate-600 relative flex'>  <MdShoppingCart />
  
  </div>
  

                <div className='absolute -top-2 right-0 text-white bg-red-500 h-4 text-sm rounded-full m-0'>{cartItemsCount}</div>
             </div>
           </div>
        </div>
        {/* mobile */}
    </header>
  );
};

export default Header;
