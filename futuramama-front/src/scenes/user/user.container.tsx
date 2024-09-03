import { useContext } from "react";
import UserComponent from "./user.component";
import { UserContext } from "../../layout/components/header/header.context";
import { AuthContext } from "../../core/auth/auth.context";

const UserContainer: React.FC = () => {
  const { userData, updateUserData } = useContext(UserContext);
  const { closeSession } = useContext(AuthContext);

  const closeUserSession = () => {
    closeSession();
  };

  return (
    <>
      {userData && (
        <UserComponent
          userData={userData}
          handleUser={updateUserData}
          closeSession={closeUserSession}
        />
      )}
    </>
  );
};

export default UserContainer;
