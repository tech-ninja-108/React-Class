import { useContext } from "react";
import { MyContext } from "../Context/Mycontext";

const Navbar = () => {
  const { cartCount, setToggle } = useContext(MyContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="cursor-pointer text-2xl font-black text-slate-900">
          Shop<span className="text-indigo-600">Nest</span>
        </h1>

        <div className="flex items-center gap-7">
          <a
            onClick={() => setToggle(true)}
            href="#home"
            className="font-semibold text-slate-700 transition hover:text-indigo-600"
          >
            Home
          </a>

          <div
            onClick={() => setToggle(false)}
            className="relative cursor-pointer"
          >
            <span className="text-2xl">🛒</span>

            <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
