import { useEffect, useState } from "react";
import { User } from "../../core/models/user.interface";

interface Props {
  userData: User;
  handleUser: (user: User) => void;
}

const UserComponent: React.FC<Props> = ({ userData, handleUser }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [user, setUser] = useState<User>({} as User);
  useEffect(() => {
    if (userData) {
      setUser({ ...userData });
    }
  }, []);

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEditable(!isEditable);
  };

  const handleFormData = (e: React.FormEvent, key: string) => {
    const target = e.target as HTMLInputElement;
    setUser({ ...user, [key]: target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUser(user);
  };

  return (
    userData && (
      <div className="register-container">
        <form className="register-container__form">
          <div className="register-container__form__element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user.name}
              readOnly={!isEditable}
              onChange={(e) => handleFormData(e, "name")}
            />
          </div>
          <div className="register-container__form__element">
            <label htmlFor="surname1">Surname 1</label>
            <input
              type="text"
              id="surname1"
              value={user.surname1}
              readOnly={!isEditable}
              onChange={(e) => handleFormData(e, "surname1")}
            />
          </div>
          <div className="register-container__form__element">
            <label htmlFor="surname2">Surname 2</label>
            <input
              type="text"
              id="surname2"
              value={user.surname2}
              readOnly={!isEditable}
              onChange={(e) => handleFormData(e, "surname2")}
            />
          </div>

          <div className="register-container__form__element">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={user.email}
              readOnly={!isEditable}
              onChange={(e) => handleFormData(e, "email")}
            />
          </div>
          <button
            className="login-container__form__button"
            onClick={handleSubmit}
            disabled={!isEditable}
          >
            Registrarse
          </button>
          <button
            className="login-container__form__button"
            onClick={handleEditClick}
          >
            Editar
          </button>
        </form>
      </div>
    )
  );
};
export default UserComponent;

/*  <div className="register-container__form__element">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            readOnly={!isEditable}
            onChange={(e) => handleFormData(e, "password")}
          />
        </div> 


        <div className="register-container__form__element">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={user.prevDate}
          onChange={(e) => handleFormData(e, "prevDate")}
        />
      </div>*/
