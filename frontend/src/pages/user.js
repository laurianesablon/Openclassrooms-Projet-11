import Layout from "../components/layout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { changeUsername } from "../utils/api";
import ChangeUsernameModal from "../components/changeUserNameModal";
import Account from "../components/account";
import { ErrorMessage } from "../components/error_message";
function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token.token);
  const userName = user.userName;
  const [toggle, setToggle] = useState(false);
  const message = useSelector((state) => state.errorMessage.message);

  const handleChangedUserName = (newUsername) => {
    changeUsername(
      newUsername,
      token,
      dispatch,
      user.firstName,
      user.lastName,
    );
    setToggle(!toggle);
  };
  return (
    <Layout>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName ? userName : `${user.firstName} ${user.lastName}`}!
          </h1>
          {!toggle && (
            <button className="edit-button" onClick={() => setToggle(!toggle)}>
              Edit Name
            </button>
          )}
          {toggle && (
            <ChangeUsernameModal
              user={user}
              userName={userName}
              handleChangedUserName={handleChangedUserName}
              setToggle={setToggle}
              toggle={toggle}
              message={message}
            />
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          accountTitle="Argent Bank Checking"
          accountAmount="$2,082.79"
          accountAmountDescription="Available Balance"
        />
        <Account
          accountTitle="Argent Bank Savings"
          accountAmount="$10,928.42"
          accountAmountDescription="Available Balance"
        />
        <Account
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          accountAmountDescription="Current Balance"
        />
      </main>
      {message && (
          <ErrorMessage message={message}/>
        )}
    </Layout>
  );
}

export default User;
