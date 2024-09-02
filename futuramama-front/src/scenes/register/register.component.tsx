import { useState } from "react";
import { User } from "../../core/models/user.interface";
import "./register.scss";
interface Props {
  user?: User | null;
  handleUser: (user: User) => void;
}

const RegisterComponent: React.FC<Props> = ({ handleUser }) => {
  const [user, setUser] = useState<User>({} as User);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUser(user);
  };

  const handleFormData = (e: React.FormEvent, key: string) => {
    const target = e.target as HTMLInputElement;
    setUser({ ...user, [key]: target.value });
  };

  return (
    <div className="register-container">
      <form className="register-container__form">
        <div className="register-container__form__element">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => handleFormData(e, "name")}
          />
        </div>
        <div className="register-container__form__element">
          <label htmlFor="surname1">Surname 1</label>
          <input
            type="text"
            id="surname1"
            onChange={(e) => handleFormData(e, "surname1")}
          />
        </div>
        <div className="register-container__form__element">
          <label htmlFor="surname2">Surname 2</label>
          <input
            type="text"
            id="surname2"
            onChange={(e) => handleFormData(e, "surname1")}
          />
        </div>
        <div className="register-container__form__element">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={(e) => handleFormData(e, "prevDate")}
          />
        </div>
        <div className="register-container__form__element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => handleFormData(e, "email")}
          />
        </div>
        <div className="register-container__form__element">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleFormData(e, "password")}
          />
        </div>
        <button
          className="login-container__form__button"
          onClick={handleSubmit}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
