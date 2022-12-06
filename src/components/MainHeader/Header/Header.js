import { Badge } from '@mui/material';

import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';



import './Header.css';

const Header = () => {


  return (


    <div className="headerContainer">

    
<div className='menuiconContainer'>

<MenuIcon className='menuicon' fontSize='large' />
</div>



<p className="logoMobile logo">MOBILEX</p>


      <nav className="linkContainer">
        <a href="#">
          <p className="logo">MOBILEX</p>
        </a>
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
