import { useState, useEffect } from "react";
import { products as mockProducts } from "../data/products";
import ProductList from "../pages/ProductList";
import ProductFilter from "../components/ProductFilter";

function ProductsPage({ cart }) {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una petición a API
    const timeout = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleFilter = ({ query, category }) => {
    let filtered = mockProducts;

    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    setProducts(filtered);
  };

  if (loading) {
    return <p className="nearstore-products__loading">Cargando productos...</p>;
  }

  return (
    <div className="nearstore-products">
      <h2 className="nearstore-products__title">Catálogo NearStore</h2>
      <ProductFilter onFilter={handleFilter} />
      <ProductList products={products} onAddToCart={cart.addToCart} />
    </div>
  );
}

export default ProductsPage;
