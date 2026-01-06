import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetailPage({ cart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="nearstore-detail">
        <h2 className="nearstore-detail__title">Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="nearstore-detail">
      <img
        src={product.imageDetail}
        alt={product.name}
        className="nearstore-detail__image"
      />
      <div className="nearstore-detail__info">
        <h2 className="nearstore-detail__name">{product.name}</h2>
        <p className="nearstore-detail__brand">{product.brand}</p>
        <p className="nearstore-detail__category">{product.category}</p>
        <p className="nearstore-detail__description">
          {product.longDescription}
        </p>
        <p className="nearstore-detail__price">
          ${product.price.toFixed(2)} 
        </p>
        <button
          className="nearstore-detail__button"
          onClick={() => cart.addToCart(product)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
