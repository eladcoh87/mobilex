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

        <div class="centered">{props.title} <br />
        <p>{props.para} </p></div>

    </div>




  );
}