import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="flex justify-between fixed w-full mr-7 p-4 items-center bg-black text-white">
      <h1 className="text-4xl">
        <img
          className="w-13 rounded-full"
          src="https://imgs.search.brave.com/TtBbaBHckgxXf12ZUMMPrcmDPAxmwx8CuBgyzsi4ORM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MTc2LzE5MS9zbWFs/bC9idXNpbmVzcy1h/dmF0YXItcHJvZmls/ZS1ibGFjay1pY29u/LW1hbi1vZi11c2Vy/LXN5bWJvbC1pbi10/cmVuZHktZmxhdC1z/dHlsZS1pc29sYXRl/ZC1vbi1tYWxlLXBy/b2ZpbGUtcGVvcGxl/LWRpdmVyc2UtZmFj/ZS1mb3Itc29jaWFs/LW5ldHdvcmstb3It/d2ViLXZlY3Rvci5q/cGc"
          alt=""
        />
      </h1>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button
        className="bg-blue-900 pt-3 pb-3 pl-6 pr-6 rounded-2xl font-extrabold text-2xl"
        onClick={() => setToggle((pre) => !pre)}
      >
        Create
      </button>
    </div>
  );
};

export default Navbar;
