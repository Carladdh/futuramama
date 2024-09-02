import { Link } from "react-router-dom";
import { switchRoutes } from "../../../core/router/routes";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {switchRoutes.map(
          (route) =>
            route.active && (
              <li className="navbar__list__item" key={route.path}>
                <Link to={route.path} className="navbar__list__item__link">
                  {route.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
