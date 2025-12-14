import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import CartIcon from "./CartIcon";

function Header({ cart }) {
  return (
    <header className="nearstore-header">
      <div className="nearstore-header__brand">
        <Link to="/" className="nearstore-header__logo">
          NearStore
        </Link>
        <span className="nearstore-header__tagline">
          Tu tienda tech, siempre cerca
        </span>
      </div>
      <NavBar />
      <CartIcon totalItems={cart.totalItems} />
    </header>
  );
}

export default Header;
