
import Link from 'next/link';
import React from 'react';

const ProductDetailsId = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm md:p-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-gray-50 p-8">
            <img
              src={data.image}
              alt={data.title}
              className="h-72 w-full object-contain md:h-96"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center py-4">
            <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium capitalize text-blue-700">
              {data.category}
            </span>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {data.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <span className="text-lg text-amber-500">
                ⭐ {data.rating.rate}
              </span>
              <span className="text-sm text-gray-500">
                ({data.rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-4xl font-bold text-blue-600">
              ${data.price.toFixed(2)}
            </p>

            {/* Description */}
            <div className="mt-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                Product Description
              </h2>

              <p className="text-base leading-7 text-gray-600">
                {data.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Add to Cart
              </button>

              <Link href={"/"}><button
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">Go Back</button></Link>
            </div>

            {/* Extra Information */}
            <div className="mt-8 border-t border-gray-200 pt-5">
              <p className="text-sm text-gray-500">
                Product ID: #{data.id}
              </p>
              <p className="mt-2 text-sm text-green-600">
                ✓ Product information loaded from Fake Store API
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsId;
