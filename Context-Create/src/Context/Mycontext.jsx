import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartitem");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartitem", JSON.stringify(cartItem));
  }, [cartItem]);

  const cartCount = cartItem.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const price = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <MyContext.Provider
      value={{
        cartCount,
        toggle,
        setToggle,
        cartItem,
        setCartItem,
        price,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
