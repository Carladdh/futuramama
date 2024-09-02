import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { RouterComponent } from "./core/router/router.component";
import AppLayout from "./layout/appLayout.component";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <RouterComponent />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
