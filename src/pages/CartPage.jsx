import CartItem from "../pages/CartItem";
import { useState } from "react";

function CartPage({ cart }) {
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleCheckout = () => {
    if (!cart.cartItems.length) return;
    // Aquí iría la llamada a la API de compras
    setOrderCompleted(true);
    cart.clearCart();
  };

  return (
    <div className="nearstore-cart">
      <h2 className="nearstore-cart__title">Tu carrito</h2>

      {orderCompleted && (
        <p className="nearstore-cart__success">
          ¡Gracias por tu compra! Tu pedido ha sido registrado.
        </p>
      )}

      {!cart.cartItems.length && !orderCompleted && (
        <p className="nearstore-cart__empty">
          Tu carrito está vacío. Añade productos desde el catálogo.
        </p>
      )}

      {cart.cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cart.removeFromCart}
          onUpdateQuantity={cart.updateQuantity}
        />
      ))}

      {cart.cartItems.length > 0 && (
        <div className="nearstore-cart__summary">
          <p className="nearstore-cart__total">
            Total: <strong>$ {cart.totalPrice} </strong>
          </p>
          <button
            className="nearstore-cart__button"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
