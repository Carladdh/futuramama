import { Navigate, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import HomeContainer from "../../scenes/home/home.container";
import MamaContainer from "../../scenes/mommy/mommy.container";
import BebeContainer from "../../scenes/baby/baby.container";
import AlimentacionContainer from "../../scenes/feeding/feeding.container";
import FotosContainer from "../../scenes/fotos/fotos.container";
import PreguntasContainer from "../../scenes/preguntas/preguntas.container";
import { BabyProvider } from "../../scenes/baby/baby.context";
import { HomeProvider } from "../../scenes/home/home.context";
import { MommyProvider } from "../../scenes/mommy/mommy.context";
import LoginContainer from "../../scenes/login/login.container";
import RegisterContainer from "../../scenes/register/register.container";
import { RegisterProvider } from "../../scenes/register/register.context";
import DiaryContainer from "../../scenes/diary/diary.container";
import { DiaryProvider } from "../../scenes/diary/diary.context";
import { FeedingProvider } from "../../scenes/feeding/feeding.context";
import { useContext } from "react";
import { AuthContext } from "../auth/auth.context";
import { UserProvider } from "../../layout/components/header/header.context";
import UserContainer from "../../scenes/user/user.container";

export const RouterComponent: React.FC = () => {
  const { isLoggedUser } = useContext(AuthContext);
  return (
    <Routes>
      {isLoggedUser ? (
        <>
          <Route
            path={switchRoutes[0].path}
            element={<Navigate to={switchRoutes[1].path} />}
          />
          <Route
            path={switchRoutes[1].path}
            element={
              <HomeProvider>
                <HomeContainer />
              </HomeProvider>
            }
          />
          <Route
            path={switchRoutes[2].path}
            element={
              <MommyProvider>
                <MamaContainer />
              </MommyProvider>
            }
          />
          <Route
            path={switchRoutes[3].path}
            element={
              <BabyProvider>
                <BebeContainer />
              </BabyProvider>
            }
          />
          <Route
            path={switchRoutes[4].path}
            element={
              <FeedingProvider>
                <AlimentacionContainer />
              </FeedingProvider>
            }
          />
          <Route path={switchRoutes[5].path} element={<FotosContainer />} />
          <Route path={switchRoutes[6].path} element={<PreguntasContainer />} />
          <Route
            path={switchRoutes[7].path}
            element={
              <DiaryProvider>
                <DiaryContainer />
              </DiaryProvider>
            }
          />
          <Route path={switchRoutes[10].path} element={<UserContainer />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
      <Route path={switchRoutes[8].path} element={<LoginContainer />} />
      <Route
        path={switchRoutes[9].path}
        element={
          <RegisterProvider>
            <RegisterContainer />
          </RegisterProvider>
        }
      />
    </Routes>
  );
};
