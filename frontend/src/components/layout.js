import { Link } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../store/store";
function Header({ onlySignIn, onlySignUp }) {
  const authenticated = useSelector((state) => state.token.authenticated);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const handleLogout = () => {
    dispatch(clearToken());
  };

  const renderSignInLink = () => (
    <Link className="main-nav-item" to="/login">
      Sign In
    </Link>
  );

  const renderSignUpLink = () => (
    <Link className="main-nav-item" to="/signup">
      Sign Up
    </Link>
  );

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {authenticated && (
          <div className="header-username-container">
          <i className="fa fa-user-circle header-username"></i>
          <p className="header-username">{userName}</p>
        </div>
        )}
        

        <div>
          {authenticated ? (
            
            <Link className="main-nav-item" onClick={handleLogout} to="/">
              Log Out
            </Link>
          ) : onlySignIn ? (
            renderSignUpLink()
          ) : onlySignUp ? (
            renderSignInLink()
          ) : (
            <>
              {renderSignUpLink()}
              {renderSignInLink()}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  );
}

function Layout({ children, onlySignIn = false, onlySignUp = false }) {
  return (
    <>
      <Header onlySignIn={onlySignIn} onlySignUp={onlySignUp} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
