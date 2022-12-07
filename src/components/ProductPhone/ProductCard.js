import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  galaxy from '../../Assets/Images/galaxy.png'
import './ProductCard.css'


export default function ProdctCard() {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className='productCardImg'
          component="img"
          height="500"
          image={require('../../Assets/Images/galaxy.png')}
          alt="green iguana"
        />
        <CardContent className='productText'>
          <Typography gutterBottom variant="h1" component="div">
            Lizard
          </Typography>
          
          <Typography className='productTextP' variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging acroDFDFss all continents except Antarctica
            <p className='priceText'>149$</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}