import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import Accordion from './Accordion'
import {Navigate} from 'react-router-dom';
import { addToCart,removeFromCart } from '../store-redux/actions';


const ProductPage = () => {



const ProductListFromState = useSelector((state => state.productsOnStore))

const {id} = useParams()

const getThePruddcta = ProductListFromState.find(product =>  product.id == id)

   const dispatch = useDispatch();

   
const addToCartHandel = () => {

  dispatch(addToCart(id))


}




if(!getThePruddcta) {

  return (

    <div>
    {<Navigate to="/Pagenotfound" replace={true} />}
  </div>

  )


}


console.log(getThePruddcta);

  return (


    <div className='productPageContainer'>

        <div className='productPageImageContainer'>


            <img  src={getThePruddcta.phonePicPath} alt="" />
            
            </div>

        <div className='descContainer'>

                <div className='desHeadline'>
            <h1>{getThePruddcta.model}</h1>
            <h3>{getThePruddcta.price}$</h3>
             <p className='headlinepragraphe'>{getThePruddcta.description}</p>

             <p className='descParagrape'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed toIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it .</p>
             </div>

                <div className='btnContainer'>

            <button onClick={addToCartHandel} className='prodcutpageATC'>ADD TO CART</button>
             </div>

                <div className='accourdionConatiner'>
             <Accordion />
             </div>
             </div>
    

    </div>
  )



}

export default ProductPage