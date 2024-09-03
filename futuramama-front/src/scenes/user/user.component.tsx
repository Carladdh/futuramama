import { useEffect, useState } from "react";
import { User } from "../../core/models/user.interface";
import "./user.scss";

interface Props {
  userData: User;
  handleUser: (user: User) => void;
  closeSession: () => void;
}

const UserComponent: React.FC<Props> = ({
  userData,
  handleUser,
  closeSession,
}) => {
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
    setIsEditable(false);
    handleUser(user);
  };

  return (
    userData && (
      <>
        <div className="user-container">
          <form className="user-container__form">
            <div className="user-container__form__element">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={user.name}
                disabled={!isEditable}
                onChange={(e) => handleFormData(e, "name")}
              />
            </div>
            <div className="user-container__form__element">
              <label htmlFor="surname1">Surname 1</label>
              <input
                type="text"
                id="surname1"
                value={user.surname1}
                disabled={!isEditable}
                onChange={(e) => handleFormData(e, "surname1")}
              />
            </div>
            <div className="user-container__form__element">
              <label htmlFor="surname2">Surname 2</label>
              <input
                type="text"
                id="surname2"
                value={user.surname2}
                disabled={!isEditable}
                onChange={(e) => handleFormData(e, "surname2")}
              />
            </div>
            <div className="user-container__form__element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                disabled
                onChange={(e) => handleFormData(e, "email")}
              />
            </div>
          </form>
          <div className="user-container__button-group">
            {isEditable ? (
              <button
                className="user-container__button-group__button save"
                onClick={handleSubmit}
              >
                Guardar cambios
              </button>
            ) : (
              <button
                className="user-container__button-group__button edit"
                onClick={handleEditClick}
              >
                Editar
              </button>
            )}
          </div>
        </div>
        <div>
          <button
            className="user-container__button-group__button close"
            onClick={closeSession}
          >
            Cerrar sesión
          </button>
        </div>
      </>
    )
  );
};
export default UserComponent;
