import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { Login } from "../../core/models/login.interface";

interface Props {
  user?: Login | null;
  handleUser: (user: Login) => void;
}

const LoginComponent: React.FC<Props> = ({ handleUser }) => {
  const [user, setUser] = useState<Login>({} as Login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUser(user);
  };

  const handleFormData = (e: React.FormEvent, type: string) => {
    const target = e.target as HTMLInputElement;
    setUser({ ...user, [type]: target.value });
  };

  return (
    <div className="login-container">
      <form className="login-container__form">
        <div className="login-container__form__element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => handleFormData(e, "email")}
          />
        </div>
        <div className="login-container__form__element">
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
          Login
        </button>
      </form>
      <div className="login-container__register">
        <span>Si no estás registrado pulsa aquí </span>
        <Link to="/register" className="login-container__register__link">
          Registro
        </Link>
      </div>
    </div>
  );
};
export default LoginComponent;
