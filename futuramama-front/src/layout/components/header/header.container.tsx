import { useContext, useEffect } from "react";
import HeaderComponent from "./header.component";
import { AuthContext } from "../../../core/auth/auth.context";
import { UserContext } from "./header.context";

const HeaderContainer: React.FC = () => {
  const { isLoggedUser } = useContext(AuthContext);
  const { userData, getUserData } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedUser) {
      getUserData();
    }
  }, [isLoggedUser]);
  return (
    <>
      <HeaderComponent isLoggedUser={isLoggedUser} userData={userData} />
    </>
  );
};

export default HeaderContainer;
