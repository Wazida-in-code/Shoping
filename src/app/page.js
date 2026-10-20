'use client'

import { OurContext } from "@/context/ContextProvider";
import { useContext } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

export default function Home() {
  const {products} = useContext(OurContext)
  console.log(products);
  return (
    <div>
      <Header />

      <div>
        <div className="flex justify-center px-4 my-13">
          <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">Feature Products</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12">
          {
            products.slice(0, 6).map(product => 
              <ProductCard key={product.id} product={product} />
            )
          }
        </div>
      </div>
     <div className="flex justify-center my-5 px-4"><Link href={"/products"}><button className="btn btn-primary btn-outline">See More</button></Link></div>
    </div>
  );
}
