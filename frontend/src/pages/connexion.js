import Layout from "../components/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../utils/api";
import { ErrorMessage } from "../components/error_message";
import FormFields from "../components/fields";

function Connexion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [response, setResponse] = useState("");
  const message = useSelector((state) => state.errorMessage.message);
  const handleFetchData = async (event) => {
    event.preventDefault();
    await fetchLogin(formData.email, formData.password, setResponse, dispatch, navigate, message); // Call the fetchData function
  };
  const handleFieldChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Layout onlySignIn={true}>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleFetchData}>
            <FormFields name="email" label="Email" value={formData.email} onChange={handleFieldChange} type="text"/>
            <FormFields name="password" label="Password" value={formData.password} onChange={handleFieldChange} type="password"/>
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
