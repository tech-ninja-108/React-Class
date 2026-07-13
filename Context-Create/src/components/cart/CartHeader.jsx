import React, { useContext } from "react";
import { MyContext } from "../../Context/Mycontext";

const CartHeader = () => {
  const { cartCount } = useContext(MyContext);
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-[3px] text-indigo-600">
          Shopping cart
        </p>

        <h1 className="mt-2 text-3xl font-black text-slate-900">Your Cart</h1>
      </div>

      <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
        {cartCount} Items
      </span>
    </div>
  );
};

export default CartHeader;
