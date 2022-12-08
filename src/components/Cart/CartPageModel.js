import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './CartPage.css'
import { useSelector } from 'react-redux';

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';



export default function CartPageModel() {




const [open, setOpen] = useState(false);
 const cartStoreState = useSelector(state => state)
 
 console.log(cartStoreState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




const noItemDIV = <div className='noItemContainer'>
    <h3>NO ITEM IN YOUR CART</h3>
    <br />
    <ProductionQuantityLimitsIcon className='emptyCart' />
    <p>please Add products</p>
    
    </div>



  return (

    <div>


    <Button onClick={handleOpen}>
    <Badge className='badg' badgeContent={0} color="error">


<ShoppingCartOutlinedIcon

  fontSize="10px"
  className="carticon"
  color="action"
/>

</Badge></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >



        <div className='modelpopBox'>
       
            {cartStoreState.CartItem.length === 0 && noItemDIV  }



        </div>



      </Modal>
    </div>
  );
}