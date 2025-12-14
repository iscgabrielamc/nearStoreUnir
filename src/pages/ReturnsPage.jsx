import { useState } from "react";

function ReturnForm() {
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de enviar la solicitud de devolución a la API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="nearstore-returns__success">
        Tu solicitud de devolución para el pedido #{orderId} ha sido enviada.
      </p>
    );
  }

  return (
    <form className="nearstore-returns__form" onSubmit={handleSubmit}>
      <label className="nearstore-returns__label">
        ID de pedido
        <input
          className="nearstore-returns__input"
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
      </label>
      <label className="nearstore-returns__label">
        Motivo de la devolución
        <textarea
          className="nearstore-returns__textarea"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </label>
      <button className="nearstore-returns__button" type="submit">
        Enviar solicitud
      </button>
    </form>
  );
}

export default ReturnForm;
