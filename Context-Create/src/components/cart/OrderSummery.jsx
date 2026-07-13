import React, { useContext } from "react";
import { MyContext } from "../../Context/Mycontext";

const OrderSummery = () => {
  const { setToggle, price, cartCount } = useContext(MyContext);
  const tax = cartCount === 0 ? 0 : 15;

  return (
    <aside className="h-fit rounded-3xl bg-slate-950 p-6 text-white shadow-xl lg:sticky lg:top-24">
      <h2 className="text-2xl font-black">Order Summary</h2>

      <div className="mt-7 space-y-4 border-b border-slate-700 pb-6">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal</span>
          <span className="font-bold text-white">${price.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Shipping</span>
          <span className="font-bold text-emerald-400">Free</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Tax</span>
          <span className="font-bold text-white">${tax}</span>
        </div>
      </div>

      <div className="flex items-center justify-between py-6">
        <span className="text-lg font-bold">Total</span>

        <span className="text-3xl font-black text-indigo-400">
          ${(price + tax).toFixed(2)}
        </span>
      </div>

      <button className="w-full rounded-2xl bg-indigo-600 py-4 text-base font-black text-white shadow-lg shadow-indigo-950 transition hover:bg-indigo-500 active:scale-95">
        Proceed to Checkout
      </button>

      <a
        onClick={() => setToggle(true)}
        href="#home"
        className="mt-4 block text-center text-sm font-semibold text-slate-400 transition hover:text-white"
      >
        ← Continue Shopping
      </a>
    </aside>
  );
};

export default OrderSummery;
