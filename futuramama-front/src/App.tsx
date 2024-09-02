import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { RouterComponent } from "./core/router/router.component";
import AppLayout from "./layout/appLayout.component";
import { AuthProvider } from "./core/auth/auth.context";
import { UserProvider } from "./layout/components/header/header.context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <AppLayout>
            <RouterComponent />
          </AppLayout>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
