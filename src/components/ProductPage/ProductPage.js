import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import Accordion from './Accordion'

const ProductPage = () => {

const ProductListFromState = useSelector((state => state.productsOnStore))

const {id} = useParams()

const getThePruddcta = ProductListFromState.find(product =>  product.id == id)

console.log(getThePruddcta)


const imgPath = Object.values(getThePruddcta.phonePicPath)[0]
console.log(imgPath);

  return (


    <div className='productPageContainer'>

        <div className='productPageImageContainer'>


            <img src={imgPath} alt="" />
            
            </div>


        <div className='descContainer'>

                <div className='desHeadline'>
            <h1>Apple iPhone 5c, Blue 16GB Unlocked </h1>
             <p className='headlinepragraphe'>Lorem, ipsum dolor sit amet consectetur</p>

             <p className='descParagrape'>Fresh innovations and an unmistakable heritage design make the Women's Nike Waffle One SE Casual Shoes a go-to choice for your everyday rotation. Animal-print graphics hit the Swoosh on this iteration, adding texture and savage style to this instant classic.

This is a demo store. You can purchase products like this from Finishline.</p>
             </div>

                <div className='btnContainer'>

            <button className='prodcutpageATC'>ADD TO CART</button>
             </div>

                <div className='accourdionConatiner'>
             <Accordion />
             </div>
             </div>
    

    </div>
  )



}

export default ProductPage