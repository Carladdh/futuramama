import { createContext, PropsWithChildren } from "react";
import React from "react";
import { AxiosPost } from "../../core/api/axios.service";
import { useNavigate } from "react-router-dom";
import { Login } from "../../core/models/login.interface";

interface LoginContext {
  handleUser: (user: Login) => void;
}

export const LoginContext = createContext<LoginContext>({} as LoginContext);

export const LoginProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const apiService = async (userData: Login) => {
    await AxiosPost("/login", userData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUser = (userData: Login) => {
    apiService(userData);
  };

  return (
    <LoginContext.Provider
      value={{
        handleUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
