import React, { useContext } from "react";
import { MyContext } from "../../Context/Mycontext";
import useCart from "../../Context/hooks/CartFunction";

export const CartItem = () => {
  const { cartItem, setToggle } = useContext(MyContext);

  const { Increse, Decrise, removeItem } = useCart();

  return (
    <div className="space-y-5">
      {cartItem.length === 0 ? (
        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="text-6xl">🛒</div>

          <h2 className="mt-4 text-2xl font-black text-slate-900">
            Your cart is empty
          </h2>

          <p className="mt-2 text-slate-500">Add some products to your cart.</p>

          <button
            onClick={() => setToggle(true)}
            className="mt-6 cursor-pointer rounded-2xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        cartItem.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-slate-100 p-4 sm:w-32">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-indigo-600">
                    {data.category}
                  </p>

                  <h2 className="mt-1 text-lg font-black text-slate-900">
                    {data.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {data.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">
                    <button
                      onClick={() => Decrise(data.id)}
                      className="h-10 w-10 text-lg font-bold text-slate-600 transition hover:bg-slate-100"
                    >
                      −
                    </button>

                    <span className="flex h-10 w-12 items-center justify-center border-x border-slate-200 font-bold text-slate-900">
                      {data.quantity}
                    </span>

                    <button
                      onClick={() => Increse(data.id)}
                      className="h-10 w-10 text-lg font-bold text-slate-600 transition hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-5">
                    <div>
                      <p className="text-xs text-slate-400">
                        ${data.price} × {data.quantity}
                      </p>

                      <p className="text-xl font-black text-slate-900">
                        ${(data.price * data.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(data.id)}
                      className="rounded-xl bg-red-50 px-4 py-2 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
