import React from 'react'
import './ProductItemCart.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../store-redux/actions';




const ProductItemCart = (props) => {

const cartState = useSelector(state => state)
                const dispatch = useDispatch()
console.log(cartState);
    console.log(props)

console.log('come from productitemcart')


        const addToCartHandel = () =>{

                dispatch(addToCart(props.id))
                
        }


        const removeFromCartHandel = () => {


                dispatch(removeFromCart(props.id))

        }


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

        
                <IconButton onClick={addToCartHandel}  className='cartquntentyControl' aria-label="Add">
                <AddIcon/>
      </IconButton>



              

      <IconButton onClick={removeFromCartHandel}  className='cartquntentyControl' aria-label="remove">
                <RemoveIcon/>
                </IconButton >
                </div>
                    

            </div>




    </div>
  )




}

export default ProductItemCart