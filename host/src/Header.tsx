import React from "react";

const Header = () => (
  <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
    <div className="flex">
      <div className="flex-grow flex">
        Fidget Spinner World
        <div className="mx-5">|</div>
        Cart Link (todo)
      </div>
      <div className="flex-end relative">Right Side</div>
    </div>
  </div>
);

export default Header;
