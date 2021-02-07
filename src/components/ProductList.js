import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct.js';
import Title from './Title';
import { useGlobalContext } from '../context';

const ProductList = () => {
  const { productList } = useGlobalContext();

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row justify-content-center mr-0 ml-0">
            {productList.map((item, index) => {
              return <SingleProduct key={index} phoneDetails={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
