import React, { useState } from "react";

function ChangeUsernameModal({
  user,
  userName,
  handleChangedUserName,
  setToggle,
  toggle,
}) {
  const [newUserName, setNewUserName] = useState(userName || "");
  const handleUserNameChange = (e) => {
    setNewUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangedUserName(newUserName);
    setToggle(!toggle);
  };

  return (
    <form className="change-username" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label>User name:</label>{" "}
        <input
          type="text"
          id="username"
          value={newUserName}
          onChange={handleUserNameChange}
        />
      </div>
      <div className="input-wrapper">
        <label>First name:</label>
        <input type="text" id="firstName" value={user.firstName} disabled />
      </div>
      <div className="input-wrapper">
        <label>Last name:</label>
        <input type="text" id="lastName" value={user.lastName} disabled />
      </div>
      <div className="button-wrapper">
        <button className="cancel" onClick={() => setToggle(!toggle)}>Cancel</button>
        <button type="submit">Save</button>
      </div>
      
    </form>
  );
}

export default ChangeUsernameModal;
