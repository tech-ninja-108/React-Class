import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context/Mycontext";
import useCart from "../Context/hooks/CartFunction";

const Product = ({ products }) => {
  const { setCartCount, cartCount, setCartItem, cartItem, setprice } =
    useContext(MyContext);
  const { Increse, Decrise } = useCart();

  const addToCart = (data) => {
    const quantity = { ...data, quantity: 1 };
    let updateCart = [...cartItem, quantity];
    setCartItem(updateCart);
    setCartCount(cartCount + 1);
    let sum = updateCart.reduce((total, mrp) => {
      return total + mrp.price;
    }, 0);
    setprice(sum);
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[3px] text-indigo-600">
          Our products
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          Featured Collection
        </h2>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const cartProduct = cartItem.find((item) => {
            return item.id === product.id;
          });
          return (
            <div
              key={product.id}
              className="group flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex w-full flex-col">
                {/* Product image */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-white p-8">
                  <span className="absolute left-4 top-4 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-bold capitalize text-white">
                    {product.category}
                  </span>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product details */}
                <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg text-amber-400">★</span>

                    <span className="text-sm font-bold text-slate-800">
                      {product.rating.rate}
                    </span>

                    <span className="text-xs text-slate-400">
                      ({product.rating.count})
                    </span>
                  </div>

                  <h3 className="h-14 overflow-hidden text-lg font-extrabold leading-7 text-slate-900">
                    {product.title}
                  </h3>

                  <p className="mt-3 h-[72px] overflow-hidden text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                    <div>
                      <p className="text-xs font-semibold uppercase text-slate-400">
                        Price
                      </p>

                      <p className="mt-1 text-2xl font-black text-slate-900">
                        ${product.price}
                      </p>
                    </div>

                    {cartProduct ? (
                      <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">
                        <button
                          onClick={() => Decrise(product.id)}
                          className="h-10 w-10 text-lg font-bold text-slate-600 transition hover:bg-slate-100"
                        >
                          −
                        </button>

                        <span className="flex h-10 w-12 items-center justify-center border-x border-slate-200 font-bold text-slate-900">
                          {cartProduct.quantity}
                        </span>

                        <button
                          onClick={() => Increse(product.id)}
                          className="h-10 w-10 text-lg font-bold text-slate-600 transition hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-95"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Product;
