function CartItem({ item, onRemove, onUpdateQuantity }) {
    return (
      <div className="nearstore-cart-item">
        <div className="nearstore-cart-item__info">
          <h3 className="nearstore-cart-item__name">{item.name}</h3>
          <p className="nearstore-cart-item__price">
           ${item.price.toFixed(2)} x {item.quantity}
          </p>
          <p className="nearstore-cart-item__subtotal">
            Subtotal: ${(item.price * item.quantity).toFixed(2)} 
          </p>
        </div>
        <div className="nearstore-cart-item__actions">
          <input
            className="nearstore-cart-item__input"
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
          />
          <button
            className="nearstore-cart-item__button"
            onClick={() => onRemove(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
  
  export default CartItem;
  