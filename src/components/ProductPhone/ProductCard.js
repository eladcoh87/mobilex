import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCard.css'


export default function ProductCard(props) {



  return (
    <Card className='carditemContainer' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='productCardImg'
          component="img"
          height="500"
          image={props.phonePic}
          alt="green iguana"
        />
        <CardContent className='productText'>
          <Typography gutterBottom variant="h3" component="div">
            {props.model}
          </Typography>
          
          <Typography className='productTextP' variant="body1" color="text.secondary">
          {props.description}
            
          </Typography>
          <p className='priceText'>{props.price}$</p>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}