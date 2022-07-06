import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="h-auto w-60 my-2 mx-0.5 px-2">
      <img
        src={product.prodImage}
        alt={product.brand}
        className="h-auto max-h-72 w-full"
      />
      <p className="text-gray-500 font-medium">{product.brand}</p>
      <p className="text-sm">{product.description}</p>
      <div className="flex gap-2 items-center">
        <p className="font-medium">Rs. {product.price.discounted}</p>
        {product.price.original !== product.price.discounted && (
          <>
            <p className="text-gray-500 line-through">
              Rs. {product.price.original}
            </p>
            <p className="text-green-600 text-sm font-medium">
              {product.price.discount}% off
            </p>
          </>
        )}
      </div>
      <p className="text-gray-500 font-medium">
        Size: {product.size.toString()}
      </p>
    </div>
  );
}
