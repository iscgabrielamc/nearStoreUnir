import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nearstore-nav">
      <ul className="nearstore-nav__list">
        <li className="nearstore-nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nearstore-nav__link ${isActive ? "nearstore-nav__link--active" : ""}`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="nearstore-nav__item">
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `nearstore-nav__link ${isActive ? "nearstore-nav__link--active" : ""}`
            }
          >
            Productos
          </NavLink>
        </li>
        <li className="nearstore-nav__item">
          <NavLink
            to="/devoluciones"
            className={({ isActive }) =>
              `nearstore-nav__link ${isActive ? "nearstore-nav__link--active" : ""}`
            }
          >
            Devoluciones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
