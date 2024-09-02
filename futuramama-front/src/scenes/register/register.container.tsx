import { useContext } from "react";
import { User } from "../../core/models/user.interface";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import RegisterComponent from "./register.component";
import { RegisterContext } from "./register.context";

const RegisterContainer: React.FC = () => {
  const { handleUser } = useContext(RegisterContext);
  const handleUserData = (userData: User) => {
    console.log(userData);
    handleUser(userData);
  };

  return (
    <MainLayout>
      <RegisterComponent handleUser={handleUserData} />
    </MainLayout>
  );
};
export default RegisterContainer;
