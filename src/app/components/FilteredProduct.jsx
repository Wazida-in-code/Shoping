
import Image from 'next/image';
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const FilteredProduct = ({ products = [] }) => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('default');

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'high') {
                return b.rating.rate - a.rating.rate;
            }
            if (sort === 'low') {
                return a.rating.rate - b.rating.rate;
            }
            return 0;
        });

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div className="flex-1">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Search Products
                            </label>
                            <input
                                type="text"
                                placeholder="Search by product title..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <div className="w-full sm:w-52">
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Sort by Rating
                            </label>
                            <select
                                value={sort}
                                onChange={e => setSort(e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500"
                            >
                                <option value="default">Default</option>
                                <option value="high">★ Highest First</option>
                                <option value="low">★ Lowest First</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <p className="text-sm text-slate-500">
                            Found <span className="font-bold text-slate-900">{filteredProducts.length}</span> products
                        </p>

                        <button
                            onClick={() => {
                                setSearch('');
                                setSort('default');
                            }}
                            className="rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="rounded-2xl bg-white px-4 py-16 text-center shadow-sm">
                        <p className="text-4xl">🔍</p>
                        <h2 className="mt-4 text-xl font-bold text-slate-800">
                            No Products Found
                        </h2>
                        <p className="mt-2 text-slate-500">
                            Try another search or change your filters.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilteredProduct;
