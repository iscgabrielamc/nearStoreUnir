import { Link } from "react-router-dom";

function CartIcon({ totalItems }) {
  return (
    <Link to="/carrito" className="nearstore-cart-icon">
      <span className="nearstore-cart-icon__icon">🛒</span>
      <span className="nearstore-cart-icon__count">{totalItems}</span>
    </Link>
  );
}

export default CartIcon;
