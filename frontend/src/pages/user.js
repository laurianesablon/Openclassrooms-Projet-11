import { useEffect } from "react";
import Layout from "../components/layout";
import { apiURL } from "../utils/apiURL";
import { useDispatch } from "react-redux";
import { setUser } from "../store/store";
import { useSelector } from "react-redux";

function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const url = `${apiURL}/profile`;
  let user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        });

        const responseData = await response.json();
        console.log(responseData);
        const { firstName, lastName, userName, id } = responseData.body;
        user = { firstName, lastName, userName, id };
        dispatch(setUser(user));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Layout>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
          <label>
            User name:
            <input type="text" id="username"></input>
          </label>
          <label>
            First name:{" "}
            <input
              type="text"
              id="firstName"
              value={user.firstName}
              disabled
            ></input>
          </label>
          <label>
            Last name:{" "}
            <input
              type="text"
              id="lastName"
              value={user.lastName}
              disabled
            ></input>{" "}
          </label>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default User;
