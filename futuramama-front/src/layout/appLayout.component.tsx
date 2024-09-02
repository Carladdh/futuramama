import { PropsWithChildren } from "react";
import Footer from "./components/footer/footer";
import HeaderContainer from "./components/header/header.container";
import Navbar from "./components/navbar/navbar";

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
