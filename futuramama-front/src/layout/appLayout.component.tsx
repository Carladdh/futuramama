import { PropsWithChildren } from "react";
import Footer from "./components/footer/footer";
import HeaderContainer from "./components/header/header.container";
import Navbar from "./components/navbar/navbar";
import { isLoggedUser } from "../core/utils/isLoggerUser";

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      {isLoggedUser() && <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
