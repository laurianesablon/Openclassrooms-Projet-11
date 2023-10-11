import Layout from "../components/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../utils/api";
import { ErrorMessage } from "../components/error_message";

function Connexion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const message = useSelector((state) => state.errorMessage.message);
  console.log(useSelector((state) => state.errorMessage))

  const handleFetchData = async (event) => {
    event.preventDefault();
    await fetchLogin(email, password, setResponse, dispatch, navigate, message); // Call the fetchData function
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleFetchData}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  !response.ok && response ? "shake message_erreur_label" : ""
                }
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  !response.ok && response ? "shake message_erreur_label" : ""
                }
              />
            </div>
            {!response?.ok && response && (
              <div className="message_erreur">
                Incorrect username or password
              </div>
            )}
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
        {message && (
          <ErrorMessage message={message}/>
        )}
        
      </main>
    </Layout>
  );
}

export default Connexion;
