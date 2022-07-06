import React from "react";
import FilterPanel from "../components/FilterPanel";
import ProductCard from "../components/ProductCard";
import SortBy from "../components/SortBy";
import { useFilter } from "../contexts/FilterContext";
import { products } from "../database/Products";
import { getProducts } from "../helpers/FilterFunctions";

export default function ProductListing() {
  const { filterState } = useFilter();
  const filteredProducts = getProducts(filterState, products);

  return (
    <div className="flex">
      <FilterPanel />
      <div className="flex flex-col m-2">
        <SortBy />
        <div className="flex flex-wrap">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
