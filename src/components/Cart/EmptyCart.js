import React from 'react';

const EmptyCart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h4 className="empty-cart-margin-bottom">
            Your cart is currently empty
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
