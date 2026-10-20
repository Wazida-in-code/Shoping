'use client'
import { OurContext } from '@/context/ContextProvider';
import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
    const {products} = useContext(OurContext)
    return (
            <div>

      <div>
        <div className="flex justify-center my-13">
          <h2 className="font-bold text-5xl">Feature Products</h2>
        </div>

        <div className="grid grid-cols-3 gap-5 px-12">
          {
            products.map(product => 
              <ProductCard key={product.id} product={product} />
            )
          }
        </div>
      </div>
    </div>
    );
};

export default ProductsPage;