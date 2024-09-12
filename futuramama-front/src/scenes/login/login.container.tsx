import { useContext, useEffect } from "react";
import { Login } from "../../core/models/login.interface";
import MainLayout from "../../layout/components/main-layout/mainLayout";
import LoginComponent from "./login.component";
import { AuthContext } from "../../core/auth/auth.context";

const LoginContainer: React.FC = () => {
  const { handleUser } = useContext(AuthContext);

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const userData = (user: Login) => {
    handleUser(user);
  };
  return (
    <MainLayout>
      <LoginComponent handleUser={userData} />
    </MainLayout>
  );
};
export default LoginContainer;
