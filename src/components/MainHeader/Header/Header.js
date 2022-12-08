import { Badge } from '@mui/material';

import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';



import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {


  return (


    <div className="headerContainer">

    
<div className='menuiconContainer'>

<MenuIcon className='menuicon' fontSize='large' />
</div>


  <Link className='logoMobile logo' to='/'>
    
     <p className="logoMobile logo">MOBILEX</p>
  
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
        <Badge badgeContent={1} color="error">
          <ShoppingCartOutlinedIcon
            fontSize="10px"
            className="carticon"
            color="action"
          />
        </Badge>
      </div>


    </div>
  );
};

export default Header;
