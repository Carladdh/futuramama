import { createContext, PropsWithChildren, useState } from "react";
import React from "react";
import { AxiosPost } from "../api/axios.service";
import { useNavigate } from "react-router-dom";
import { Login } from "../models/login.interface";

interface AuthContext {
  isLoggedUser: boolean;
  handleUser: (user: Login) => void;
  closeSession: () => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  if (localStorage.getItem("token") && !isLogged) {
    setIsLogged(true);
  }

  const apiService = async (userData: Login) => {
    await AxiosPost("/login", userData)
      .then((res) => {
        localStorage.setItem("id", res.data.userId);
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          setIsLogged(true);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeSession = () => {
    localStorage.clear();
    setIsLogged(false);
    navigate("/login");
  };

  const handleUser = (userData: Login) => {
    apiService(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        handleUser,
        isLoggedUser: isLogged,
        closeSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
