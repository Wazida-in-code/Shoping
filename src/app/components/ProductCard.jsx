import Image from "next/image";
import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-6">
        <Image
          src={product.image}
          alt={product.title}
          height={250}
          width={250}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="space-y-3 p-5">
        {/* Category and Rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
            {product.category}
          </span>

          <span className="shrink-0 text-sm text-gray-600">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        {/* Product Title */}
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <p className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>

          <button
            onClick={() => console.log("Added to cart:", product.id)}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
