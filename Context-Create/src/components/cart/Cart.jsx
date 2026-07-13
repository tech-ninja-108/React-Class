import { CartItem } from "./CartItem";
import { MyContext } from "../../Context/Mycontext";
import OrderSummery from "./OrderSummery";
import CartHeader from "./CartHeader";

const Cart = () => {
  return (
    <section
      id="cart"
      className="h-[calc(100vh-73px)] overflow-hidden bg-slate-100 px-4 py-8 sm:px-6"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col">
        {/* Heading */}
        <CartHeader />
        <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* Cart products */}
          <div className="min-h-0 overflow-y-auto scroll-smooth pr-2 scrollbar-hide">
            {/* Product 1 */}
            <CartItem />
          </div>

          {/* Order summary */}
          <OrderSummery />
        </div>
      </div>
    </section>
  );
};

export default Cart;
