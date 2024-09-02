import { Link } from "react-router-dom";
import { User } from "../../../core/models/user.interface";
import "./header.scss";
import { switchRoutes } from "../../../core/router/routes";
interface Props {
  isLoggedUser: boolean;
  userData: User | null;
}
const HeaderComponent: React.FC<Props> = ({ isLoggedUser, userData }) => {
  return (
    <header className="header">
      <div className="header__title">FuturaMAMA</div>
      <div>
        {userData && <div className="header__date">{userData.prevDate}</div>}
      </div>
      <div>
        {isLoggedUser && (
          <Link to={switchRoutes[10].path} className="header__user">
            {userData?.name?.[0].toUpperCase()}
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
