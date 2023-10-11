import Layout from "../components/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignup } from "../utils/api";
import { ErrorMessage } from "../components/error_message";
import FormFields from "../components/fields";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  });
  const message = useSelector((state) => state.errorMessage.message);
  const handleFetchData = async (event) => {
    fetchSignup(
      formData.firstName,
      formData.lastName,
      formData.userName,
      formData.password,
      formData.email,
      navigate,
      setResponse,
      message,
      dispatch
    );
    event.preventDefault();
  };
  const handleFieldChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>
          <form onSubmit={handleFetchData}>
            <FormFields
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleFieldChange}
              className={!response.ok && response ? "shake message_erreur_label" : ""}
            />
            <FormFields
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleFieldChange}
              className={!response.ok && response ? "shake message_erreur_label" : ""}

            />
            <FormFields
              name="userName"
              label="User Name"
              value={formData.userName}
              onChange={handleFieldChange}
              className={!response.ok && response ? "shake message_erreur_label" : ""}

            />
            <FormFields
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleFieldChange}
              className={!response.ok && response ? "shake message_erreur_label" : ""}

            />
            <FormFields
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleFieldChange}
              className={!response.ok && response ? "shake message_erreur_label" : ""}

            />
            {!response?.ok && response && (
              <div className="message_erreur">
                Error: Email already exists 
              </div>
            )}
            <button className="sign-in-button" type="submit">
              Sign Up
            </button>
          </form>
        </section>
        {message && <ErrorMessage message={message} />}
      </main>
    </Layout>
  );
}

export default SignUp;
