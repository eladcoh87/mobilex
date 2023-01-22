import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './CartPage.css';
import { useSelector } from 'react-redux';

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ProductItemCart from './ProductItemCart';

export default function CartPageModel() {
  const [open, setOpen] = useState(false);
  const cartStoreState = useSelector((state) => state);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const noItemDiv = (
    <div className="noItemContainer">
      <h3>NO ITEM IN YOUR CART</h3>
      <br />
      <ProductionQuantityLimitsIcon className="emptyCart" />
      <p>please Add products</p>
    </div>
  );

  const renderProductCart = cartStoreState.CartItem.map((product) => {
    return (
      <ProductItemCart
        key={product.id}
        title={product.model}
        price={product.price}
        quantity={product.quantity}
        imgpath={product.imgpath}
        id={product.id}
      />
    );
  });

  const cartFull = (
    <div className="cartFullContainer">
      <h1>Cart items:</h1>
      <h3 className="totalPrice">
        Total Price: {cartStoreState.totalPrice} ${' '}
      </h3>
      <div className="renderdItemCntainer">{renderProductCart}</div>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>
        <Badge
          className="badg"
          badgeContent={cartStoreState.totalItems}
          color="error"
        >
          <ShoppingCartOutlinedIcon
            fontSize="10px"
            className="carticon"
            color="action"
          />
        </Badge>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modelpopBox">
          {cartStoreState.CartItem.length === 0 && noItemDiv}
          {cartStoreState.CartItem.length > 0 && cartFull}
        </div>
      </Modal>
    </div>
  );
}
