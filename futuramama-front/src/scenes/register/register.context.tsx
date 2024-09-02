import { createContext, PropsWithChildren } from "react";
import { User } from "../../core/models/user.interface";
import React from "react";
import { AxiosPost } from "../../core/api/axios.service";
import { useNavigate } from "react-router-dom";

interface RegisterContext {
  handleUser: (user: User) => void;
}

export const RegisterContext = createContext<RegisterContext>(
  {} as RegisterContext
);

export const RegisterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const apiService = async (userData: User) => {
    await AxiosPost("/register", userData)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUser = (userData: User) => {
    apiService(userData);
  };

  return (
    <RegisterContext.Provider
      value={{
        handleUser,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
