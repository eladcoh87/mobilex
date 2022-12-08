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
          
        const PhoneProductInCartAlredy = state.CartItem.find((product => product.id == PhoneProduct.id ))

        if (!PhoneProductInCartAlredy) {

          console.log('ADD the PROUCT FOR THE FIRST TIME ')
          state.CartItem.push({model:PhoneProduct.model,price:PhoneProduct.price,quantity:1,id:PhoneProduct.id})


        }

        if (PhoneProductInCartAlredy) {

          console.log('the prodct exist ',PhoneProductInCartAlredy)

          const PhoneProductCartIndex = state.CartItem.findIndex((product) => product.id === PhoneProductInCartAlredy.id )

              console.log(PhoneProductCartIndex);

              state.CartItem[PhoneProductCartIndex].quantity++

              

        }

          








      

    return {...state}

    case 'REMOVE_FROM_CART':
    
      return {...state}

  default:

    return state
}


}

export default MobileXredcuer