import productList from '../../Assets/productList';

const initailState = {
  productsOnStore: productList,

  CartItem: [],

  totalItems: 0,
  totalPrice: 0,
};

const MobileXredcuer = (state = initailState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const PhoneProduct = state.productsOnStore.find(
        (product) => product.id == action.payload
      );

      const PhoneProductInCartAlredy = state.CartItem.find(
        (product) => product.id == PhoneProduct.id
      );

      if (!PhoneProductInCartAlredy) {
        const CartItem = [
          ...state.CartItem,
          {
            model: PhoneProduct.model,
            price: PhoneProduct.price,
            quantity: 1,
            id: PhoneProduct.id,
            imgpath: PhoneProduct.phonePicPath,
          },
        ];

        const totalPrice = state.totalPrice + PhoneProduct.price;
        const totalItems = ++state.totalItems;

        return { ...state, CartItem, totalItems, totalPrice };
      }

      if (PhoneProductInCartAlredy) {
        const PhoneProductCartIndex = state.CartItem.findIndex(
          (product) => product.id === PhoneProductInCartAlredy.id
        );

        const CartItem = [...state.CartItem];

        ++CartItem[PhoneProductCartIndex].quantity;

        const totalPrice = state.totalPrice + PhoneProduct.price;

        const totalItems = ++state.totalItems;

        return { ...state, CartItem, totalItems, totalPrice };
      }

      break;

    case 'REMOVE_FROM_CART':
      const PhoneProduct2 = state.CartItem.find(
        (product) => product.id === action.payload
      );

      const PhoneProductCartIndex2 = state.CartItem.findIndex(
        (product) => product.id === PhoneProduct2.id
      );

      let CartItem;

      if (state.CartItem[PhoneProductCartIndex2].quantity == 1) {
        CartItem = state.CartItem.filter(
          (product) => product.id !== PhoneProduct2.id
        );
      } else {
        CartItem = [...state.CartItem];
        --CartItem[PhoneProductCartIndex2].quantity;
      }

      const totalPrice = state.totalPrice - PhoneProduct2.price;

      const totalItems = --state.totalItems;

      return { ...state, CartItem, totalItems, totalPrice };

    default:
      return state;
  }
};

export default MobileXredcuer;
