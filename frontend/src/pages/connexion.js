import Layout from "../components/layout";
import { useState } from "react";
import { store } from "../store/store";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/store";
import { useDispatch } from "react-redux";

function Connexion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(""); // Add this line

  const url = "http://localhost:3001/api/v1/user/login"; // a mettre dans une variable globale
  const fetchData = async (event) => {
    event.preventDefault();
    const data = { email, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      setResponse(response); // Add this line

      if (response.ok) {
        let token = responseData.body.token;
        dispatch(setToken(token));
        navigate("/profile");
      } else {
        console.log("error");
      }
      console.log(response);
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={fetchData}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={!response.ok && response ? "shake message_erreur_label" : ""}
                />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={!response.ok && response ? "shake message_erreur_label" : ""}
                />
            </div>
            {!response?.ok && response &&
              <div className="message_erreur">Incorrect username or password</div>}
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default Connexion;
