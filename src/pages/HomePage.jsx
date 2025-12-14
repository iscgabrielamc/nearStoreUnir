import HomeHero from "../pages/HomeHero";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="nearstore-home">
      <HomeHero />
      <section className="nearstore-home__section">
        <h2 className="nearstore-home__section-title">¿Qué es NearStore?</h2>
        <p className="nearstore-home__section-text">
          NearStore es una tienda online especializada en tecnología de uso
          diario. Nuestra misión es acercarte los mejores productos tech a un
          clic de distancia, y nuestra visión es convertirnos en tu primera
          opción para comprar gadgets confiables y de calidad.
        </p>
        <Link to="/productos" className="nearstore-home__cta">
          Ver catálogo
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
