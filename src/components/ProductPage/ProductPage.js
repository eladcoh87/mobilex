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


            <img  src={imgPath} alt="" />
            
            </div>


        <div className='descContainer'>

                <div className='desHeadline'>
            <h1>Apple iPhone 5c, Blue 16GB Unlocked </h1>
             <p className='headlinepragraphe'>Lorem, ipsum dolor sit amet consectetur</p>

             <p className='descParagrape'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed toIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it .</p>
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