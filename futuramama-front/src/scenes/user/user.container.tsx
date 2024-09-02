import { useContext } from "react";
import UserComponent from "./user.component";
import { UserContext } from "../../layout/components/header/header.context";

const UserContainer: React.FC = () => {
  const { userData, updateUserData } = useContext(UserContext);
  return (
    <>
      {userData && (
        <UserComponent userData={userData} handleUser={updateUserData} />
      )}
    </>
  );
};

export default UserContainer;
