import { Link } from "react-router-dom";
import { User } from "../../../core/models/user.interface";
import "./header.scss";
import { switchRoutes } from "../../../core/router/routes";
import { calculateDueDate } from "../../../core/utils/dueDateCalculate";
interface Props {
  isLoggedUser: boolean;
  userData: User | null;
}
const HeaderComponent: React.FC<Props> = ({ isLoggedUser, userData }) => {
  console.log(userData);
  return (
    <header className="header">
      <div className="header__title">FuturaMAMA</div>
      {userData && isLoggedUser && (
        <div className="header__user-data">
          <div className="header__user-data__date">
            <span className="header__user-data__date--text">
              Fecha prevista de nacimiento:
            </span>{" "}
            <span className="header__user-data__date--date">
              {calculateDueDate(userData.prevDate)}
            </span>
          </div>

          <div className="header__user-data__user">
            {isLoggedUser && (
              <Link
                to={switchRoutes[10].path}
                className="header__user-data__user__link"
              >
                {userData?.name?.[0].toUpperCase()}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
