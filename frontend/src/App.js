import Home from './pages/home';
import Connexion from './pages/connexion';
import User from './pages/user';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./assets/styles/main.css";
import "./assets/styles/login.css";
import PrivateRoutes from './utils/privateRoutes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



function App() {
  // const userId = useSelector((state) => state.user.id);
  // console.log(userId)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Connexion />} />
            <Route element={<PrivateRoutes/>}>
              <Route path={"/profile"} element={<User />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
