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
        <div className="flex justify-center my-13">
          <h2 className="font-bold text-5xl">Feature Products</h2>
        </div>
        <FilteredProduct products={products} />
        
      </div>
    </div>
    );
};

export default ProductsPage;