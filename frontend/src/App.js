import Home from "./pages/home";
import Connexion from "./pages/connexion";
import SignUp from "./pages/signup";
import User from "./pages/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/main.css";
import "./assets/styles/login.css";
import PrivateRoutes from "./utils/privateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Connexion />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path={"/profile"} element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
