import { PropsWithChildren } from "react";
import "./mainLayout.scss";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};

export default MainLayout;
