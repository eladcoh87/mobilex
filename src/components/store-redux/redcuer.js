import { Action } from '@remix-run/router'
import React from 'react'



const initailState = {test:'elad'}

const MobileXredcuer = (state = initailState,action ) => {


switch (action.type) {


  case 'ADD_TO_CART':
    
    return {...state}

    case 'REMOVE_FROM_CART':
    
      return {...state}

  default:

    return state
}


}

export default MobileXredcuer