import productList from '../../Assets/productList'


const initailState = {productsOnStore: productList,



CartItem:[] 




,totalItems:0,totalPrice:0}

console.log(initailState);

const MobileXredcuer = (state = initailState,action) => {


switch (action.type) {


  case 'ADD_TO_CART':
    console.log('i in the redcuer')
    

        const PhoneProduct = state.productsOnStore.find((product => product.id == action.payload ));
          
        const PhoneProductInCartAlredy = state.CartItem.find((product => product.id == PhoneProduct.id ))


        if (!PhoneProductInCartAlredy) {




          
          console.log('ADD the PROUCT FOR THE FIRST TIME ')
          state.CartItem.push({model:PhoneProduct.model,price:PhoneProduct.price,quantity:1,id:PhoneProduct.id,imgpath:PhoneProduct.phonePicPath})
          state.totalPrice += PhoneProduct.price;
          state.totalItems++


        }


        if (PhoneProductInCartAlredy) {

          console.log('the prodct exist ',PhoneProductInCartAlredy)

          const PhoneProductCartIndex = state.CartItem.findIndex((product) => product.id === PhoneProductInCartAlredy.id )

              console.log(PhoneProductCartIndex);

              state.CartItem[PhoneProductCartIndex].quantity++
              state.totalPrice += PhoneProduct.price;
              state.totalItems++

        }


    return {...state}

    case 'REMOVE_FROM_CART':
        console.log('come from remove redcuer')
    
      const PhoneProduct2 = state.CartItem.find((product => product.id == action.payload ));
          
      const PhoneProductCartIndex2 = state.CartItem.findIndex((product) => product.id === PhoneProduct2.id )


        if(state.CartItem[PhoneProductCartIndex2].quantity === 0) {

          const CartItem =  state.CartItem.filter((product => product.id !== PhoneProduct2.id ))

          return {...state,CartItem}

        }


      state.CartItem[PhoneProductCartIndex2].quantity--
      state.totalPrice -= PhoneProduct2.price;
      state.totalItems--

      return {...state}

  default:

    return state
}


}

export default MobileXredcuer