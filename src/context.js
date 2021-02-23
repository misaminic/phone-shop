import React, { useState, useEffect, useContext } from 'react';
import { detailProduct, storeProducts } from './data';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  useEffect(() => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      setProductList(tempProducts);
    });
  }, []);

  useEffect(() => {
    addTotals();
  }, [cart]);

  const getItem = (id) => {
    const product = productList.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetails(product);
  };

  const addToCart = (id) => {
    // make a copy of the original array
    let tempProducts = [...productList];
    // find index of the current item
    const index = tempProducts.indexOf(getItem(id));
    // get the current item based on found index
    const product = tempProducts[index];
    // change properties values
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // update the state with the changes above
    setProductList(tempProducts);
    setCart([...cart, product]);
    setCartItemsTotal(cartItemsTotal + 1);
  };

  console.log(cartItemsTotal);

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const increment = (id) => {
    let tempProduct = [...cart];
    tempProduct = tempProduct.find((item) => item.id === id);
    console.log(tempProduct);
    tempProduct.count += 1;
    tempProduct.total = tempProduct.price * tempProduct.count;
    setCart([...cart]);
  };

  const decrement = (id) => {
    let tempProduct = [...cart];
    tempProduct = tempProduct.find((item) => item.id === id);
    tempProduct.count -= 1;
    if (tempProduct.count === 0) {
      removeItem(id);
      setProductList(productList);
      setCartItemsTotal(cartItemsTotal - 1);
    } else {
      tempProduct.total = tempProduct.price * tempProduct.count;
      setCart([...cart]);
    }
  };

  const removeItem = (id) => {
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    setCart(tempCart);
    let tempProductsInProductList = [...productList];
    tempProductsInProductList = tempProductsInProductList.find(
      (item) => item.id === id
    );
    tempProductsInProductList.inCart = false;
    tempProductsInProductList.count = 0;
    tempProductsInProductList.total = 0;
    setProductList([...productList]);
    setCartItemsTotal(cartItemsTotal - 1);
  };

  const clearCart = () => {
    setCart([]);
    const clearInCartValue = productList;
    clearInCartValue.map((item) => {
      return (item.inCart = false);
    });
    setCartItemsTotal(0);
  };

  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartTax(tax);
    setCartSubTotal(subTotal);
    setCartTotal(total);
  };

  return (
    <AppContext.Provider
      value={{
        productList,
        details,
        modal,
        modalProduct,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        cartItemsTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
