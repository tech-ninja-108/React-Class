import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-5 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-indigo-300">
          New collection
        </p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Find products made for your lifestyle
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          Explore clothing, jewellery and electronic products at the best
          prices.
        </p>
      </div>
    </header>
  );
};

export default Header;
