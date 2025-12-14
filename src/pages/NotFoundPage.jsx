// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="nearstore-notfound">
      <h2 className="nearstore-notfound__title">404 - Página no encontrada</h2>
      <p className="nearstore-notfound__text">
        La página que buscas no existe.
      </p>
      <Link to="/" className="nearstore-notfound__link">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
