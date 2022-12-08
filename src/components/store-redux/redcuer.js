import { Action } from '@remix-run/router'
import React from 'react'
import productList from '../../Assets/productList'


const initailState = {productsOnStore: productList,



CartItem:[] 




,totalItems:0}



const MobileXredcuer = (state = initailState,action) => {


switch (action.type) {


  case 'ADD_TO_CART':
    console.log('i in the redcuer')
    

        const PhoneProduct = state.productsOnStore.find((product => product.id == action.payload ));
          console.log(PhoneProduct);

      state.CartItem.push({model:PhoneProduct.model,price:PhoneProduct.price,quantity:1,id:PhoneProduct.id})

  



      

    return {...state}

    case 'REMOVE_FROM_CART':
    
      return {...state}

  default:

    return state
}


}

export default MobileXredcuer