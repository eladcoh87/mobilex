import React from 'react'
import './ProductItemCart.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';




const ProductItemCart = (props) => {


    console.log(props)

console.log('come from productitemcart')

  return (


    <div className='productitemcontainer'>
            <div className='imgContainer'> 

                    <img className='productImg' src={props.imgpath} alt="" />


            </div>


            <div className='detialContinaer'>


                <h2>{props.title}</h2>
                <p className='price'> price: {props.price}$</p>
                <p className='quntenty'>
                    
                quantity: {props.quantity}
                </p>
                <div className='quntentyControl'>

        
                <IconButton  className='cartquntentyControl' aria-label="Add">
                <AddIcon/>
      </IconButton>



              

      <IconButton  className='cartquntentyControl' aria-label="remove">
                <RemoveIcon/>
                </IconButton >
                </div>
                    

            </div>




    </div>
  )




}

export default ProductItemCart