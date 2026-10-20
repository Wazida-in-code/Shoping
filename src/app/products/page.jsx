'use client'
import { OurContext } from '@/context/ContextProvider';
import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import FilteredProduct from '../components/FilteredProduct';

const ProductsPage = () => {
    const {products} = useContext(OurContext)
    return (
            <div>

      <div>
        <div className="flex justify-center px-4 my-13">
          <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">Feature Products</h2>
        </div>
        <FilteredProduct products={products} />
        
      </div>
    </div>
    );
};

export default ProductsPage;