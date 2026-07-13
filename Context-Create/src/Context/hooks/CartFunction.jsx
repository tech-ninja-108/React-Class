import { useContext } from "react";
import { MyContext } from "../Mycontext";

const useCart = () => {
  const { cartItem, setCartItem, setCartCount, setprice } =
    useContext(MyContext);

  const priceUpdate = (data) => {
    const updatedPrice = data.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setprice(updatedPrice);
  };

  const Increse = (id) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItem(updatedCart);
    setCartCount((previousCount) => previousCount + 1);
    priceUpdate(updatedCart);
  };

  const removeItem = (id) => {
    const selectedItem = cartItem.find((item) => item.id === id);

    if (!selectedItem) {
      return;
    }

    const updatedCart = cartItem.filter((item) => {
      return item.id !== id;
    });

    setCartItem(updatedCart);

    setCartCount((previousCount) => {
      return Math.max(0, previousCount - selectedItem.quantity);
    });

    priceUpdate(updatedCart);
  };

  const Decrise = (id) => {
    const selectedItem = cartItem.find((item) => {
      return item.id === id;
    });

    if (!selectedItem) {
      return;
    }

    if (selectedItem.quantity === 1) {
      removeItem(id);
      return;
    }

    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCartItem(updatedCart);

    setCartCount((previousCount) => {
      return Math.max(0, previousCount - 1);
    });

    priceUpdate(updatedCart);
  };

  return {
    Increse,
    Decrise,
    removeItem,
    priceUpdate,
  };
};

export default useCart;
