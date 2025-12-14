import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (!products.length) {
    return (
      <p className="nearstore-product-list__empty">
        No hay productos que coincidan con tu búsqueda.
      </p>
    );
  }

  return (
    <section className="nearstore-product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductList;
