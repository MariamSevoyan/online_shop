import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
   const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
   const timer = setTimeout(() => { 
    setIsLoading(false);
   }, 1500);

    return () => clearTimeout(timer);
}, []);

if (isLoading) {
   return (
     <div className="loading">
       <h2>MAREA</h2>
        <p>Loading your beauty...</p>
         <div className="loader"></div>
          </div> 
         );
       }
    return (
      <div className="product-list">
         {products.map((product) => (
           <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
/>
 ))}
  </div>
  );
 }
export default ProductList;