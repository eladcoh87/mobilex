import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import "./ProductContainer.css"



const ProductContainer = () => {

const productsListfromState = useSelector(state => state.productsOnStore)


const renderProductList = productsListfromState.map((product) => {

  

const imgPath = Object.values(product.phonePicPath)[0]

    return (

    <ProductCard model={product.model} price={product.price} phonePic={imgPath} description={product.description} id={product.id} key={product.id} />


    )

})





  return (


    <div className='prudctSectionConatainer'>



    <div className='productsSectionHeadline'>

        <h1>Top Picks</h1>
        <p>New arrivals coming in regularly, find the freshest modern styles here.
</p>





    </div>




<div className='ProductPhoneContainer'>
{renderProductList}
</div>


    </div>
  )




}

export default ProductContainer