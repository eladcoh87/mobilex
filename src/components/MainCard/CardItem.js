import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './CardItem.css'

export default function CardItem(props) {

  return (



    <div className='cardContainer'>


        <img src={props.imgurl} alt="" />

        <div className="centeredCard">{props.title} <br />
        
        <p>{props.para} </p>
        
        {/* <Button className='btn123' color="error" sx={{bgcolor:'white',fontSize:"1.5rem",borderRadius:'20px',mt:'5rem',color:'black'}} variant="contained">Buy Now</Button> */}

<button className='btn123'> Buy now</button>
        {/* <Button className='btn123' variant="contained">Buy Now</Button> */}
        </div>
        

    </div>




  );
}