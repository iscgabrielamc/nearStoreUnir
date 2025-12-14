import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="nearstore-product-card">
      <img
        src={product.image}
        alt={product.name}
        className="nearstore-product-card__image"
      />
      <div className="nearstore-product-card__body">
        <h3 className="nearstore-product-card__title">{product.name}</h3>
        <p className="nearstore-product-card__brand">{product.brand}</p>
        <p className="nearstore-product-card__description">
          {product.shortDescription}
        </p>
        <p className="nearstore-product-card__price">
          {product.price.toFixed(2)} €
        </p>
      </div>
      <div className="nearstore-product-card__actions">
        <button
          className="nearstore-product-card__button"
          onClick={() => onAddToCart(product)}
        >
          Añadir al carrito
        </button>
        <Link
          to={`/productos/${product.id}`}
          className="nearstore-product-card__link"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
