function ProductCard({ product, onAddToCart }) { return ( <div className="product-card"> <img src={product.image} alt={product.name} />
  <p className="brand">HUDA BEAUTY</p>

  <h3>{product.name}</h3>

  <p className="price">${product.price}.00</p>

  <button onClick={() => onAddToCart(product)}>
    Add to Cart
  </button>
</div>
); }
export default ProductCard;