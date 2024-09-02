import { createContext, PropsWithChildren, useState } from "react";
import { User } from "../../../core/models/user.interface";
import { AxiosGet, AxiosPut } from "../../../core/api/axios.service";

interface UserContext {
  userData: User | null;
  getUserData: () => void;
  updateUserData: (user: User) => void;
}

export const UserContext = createContext<UserContext>({} as UserContext);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const apiServiceGet = async (id: string) => {
    await AxiosGet("/register/" + id)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const apiServicePut = async (id: string, user: User) => {
    await AxiosPut("/register/" + id, user)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUserData = (user: User) => {
    apiServicePut(userData?._id || "", user);
  };

  const getUserData = async () => {
    const id = localStorage.getItem("id") || "";
    apiServiceGet(id);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        getUserData,
        updateUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
