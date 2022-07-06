import React from "react";
import { MdShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-center h-fit bg-blue-600 text-white py-1 px-2 gap-8">
      <div className="flex flex-col justify-start">
        <h1 className="text-lg font-bold italic">Flipkart</h1>
        <p className="text-sm">Explore Plus</p>
      </div>
      <input
        placeholder="Search for products, brands and more"
        className="mx-2 my-2 p-2 rounded-sm w-1/3"
      />
      <div className="flex items-center gap-6 font-semibold">
        <button className="py-1 px-9 bg-white text-blue-600 rounded-sm">
          Login
        </button>
        <p>Become a Seller</p>
        <p>More</p>
        <div className="flex items-center gap-2">
          <MdShoppingCart />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}
