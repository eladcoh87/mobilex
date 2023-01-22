import { Button } from '@mui/material';
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="FooterSectionContainer">
      <div className="announcementContainer">
        <div className="announcementInfo">
          <h2>Your save money, for less. Save up to 20% on selected phone</h2>

          <Button className="announcemenBtn" variant="outlined">
            Shop the SALE
          </Button>
        </div>
      </div>

      <div className="linkSection">
        <div className="aboutCard">
          <h1>SMARTEPHONE</h1>
          <p>
            Success isn't about the end result, it's about what you learn along
            the way. In a meat-eating world, wearing leather for shoes and
            clothes and even handbags, the discussion of fur is childish.
          </p>

          <a href="#">Learn More</a>
        </div>

        <div className="linknav">
          <h6>COMPANY</h6>
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">news</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>

        <div className="linknav">
          <h6>COMPANY</h6>
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">news</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>

        <div className="linknav">
          <h6>COMPANY</h6>
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">news</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
