import { Navigate, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import HomeContainer from "../../scenes/home/home.container";
import MamaContainer from "../../scenes/mama/mama.container";
import BebeContainer from "../../scenes/bebe/bebe.container";
import AlimentacionContainer from "../../scenes/alimentacion/alimentacion.container";
import FotosContainer from "../../scenes/fotos/fotos.container";
import PreguntasContainer from "../../scenes/preguntas/preguntas.container";
import DiarioContainer from "../../scenes/diario/diario.container";
import { BebeProvider } from "../../scenes/bebe/bebe.context";
import { AlimentacionProvider } from "../../scenes/alimentacion/alimentacion.context";
import { HomeProvider } from "../../scenes/home/home.context";
import { MamaProvider } from "../../scenes/mama/mama.context";
import LoginContainer from "../../scenes/login/login.container";
import RegisterContainer from "../../scenes/register/register.container";
import { RegisterProvider } from "../../scenes/register/register.context";
import { LoginProvider } from "../../scenes/login/login.context";
import { isLoggedUser } from "../utils/isLoggerUser";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      {isLoggedUser() ? (
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
              <MamaProvider>
                <MamaContainer />
              </MamaProvider>
            }
          />
          <Route
            path={switchRoutes[3].path}
            element={
              <BebeProvider>
                <BebeContainer />
              </BebeProvider>
            }
          />
          <Route
            path={switchRoutes[4].path}
            element={
              <AlimentacionProvider>
                <AlimentacionContainer />
              </AlimentacionProvider>
            }
          />
          <Route path={switchRoutes[5].path} element={<FotosContainer />} />
          <Route path={switchRoutes[6].path} element={<PreguntasContainer />} />
          <Route path={switchRoutes[7].path} element={<DiarioContainer />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
      <Route
        path={switchRoutes[8].path}
        element={
          <LoginProvider>
            <LoginContainer />
          </LoginProvider>
        }
      />
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
