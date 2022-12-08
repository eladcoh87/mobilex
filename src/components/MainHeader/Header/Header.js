import { Badge } from '@mui/material';

import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './MobileNav/MobileNav';
import { useState } from 'react';
import CartPageModel from '../../Cart/CartPageModel';





const Header = () => {

const [cartPageOpen,setcartPageOpen] = useState(false)







  return (


    <div className="headerContainer">

 
    
<div className='menuiconContainer'>


<TemporaryDrawer />



</div>



  <Link className='logoMobile logo' to='/'>
    
     <p  className="logoMobile logo">MOBILEX</p>
  
   </Link>




{/* <p className="logoMobile logo">MOBILEX</p> */}

      <nav className="linkContainer">



      <Link className='logo' to='/'>
    
    <p className="logo">MOBILEX</p>
 
  </Link>




      
        <a href="#">Shop</a>
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>


      <div className="cartConainter">
        
       <CartPageModel />


        
      </div>


    </div>
  );
};

export default Header;
