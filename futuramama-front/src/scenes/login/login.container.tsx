import { useContext } from "react";
import { Login } from "../../core/models/login.interface";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import LoginComponent from "./login.component";
import { LoginContext } from "./login.context";

const LoginContainer: React.FC = () => {
  const { handleUser } = useContext(LoginContext);
  const userData = (user: Login) => {
    console.log(user);
    handleUser(user);
  };
  return (
    <MainLayout>
      <LoginComponent handleUser={userData} />
    </MainLayout>
  );
};
export default LoginContainer;
