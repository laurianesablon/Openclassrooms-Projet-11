import { clearMessage, setMessage, setToken, setUser } from "../store/store";
import { apiURL } from "./apiURL";
import { clearErrorMessage } from "./clearErrorMessage";

export const fetchLogin = async (
  email,
  password,
  setResponse,
  dispatch,
  navigate,
  message
) => {
  try {
    const data = { email, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(apiURL + "/login", options);
    const responseData = await response.json();
    setResponse(response);

    if (response.ok) {
      const token = responseData.body.token;
      await fetchUserData(token, dispatch);
      dispatch(setToken(token));
      clearErrorMessage(dispatch, message);
      navigate("/profile");
    } else {
      dispatch(setMessage(responseData.message));
      throw new Error(responseData.message);
    }
  } catch (Error) {
    console.log(Error);
  }
};

export const fetchSignup = async (
  firstName,
  lastName,
  userName,
  password,
  email,
  navigate,
  setResponse,
  message,
  dispatch
) => {
  const url = `${apiURL}/signup`;
  const requestBody = {
    email,
    password,
    firstName,
    lastName,
    userName,
  };
  console.log(requestBody);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (response.ok) {
      clearErrorMessage(dispatch, message);
      navigate("/login");
    } else {
      setResponse(response);
      console.log(response);
      dispatch(setMessage(response.statusText));
      throw new Error(response.statusText);
    }
  } catch (Error) {
    console.log(Error);
  }
};

export const fetchUserData = async (token, dispatch) => {
  try {
    const response = await fetch(apiURL + "/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      const responseData = await response.json();
      const { body } = responseData;
      if (body) {
        const { firstName, lastName, userName, id } = body;
        const user = { firstName, lastName, userName, id };
        dispatch(setUser(user));
      } else {
        throw new Error(responseData.message);
      }
    }
  } catch (Error) {
    console.log(Error);
  }
};

export const changeUsername = async (
  newUsername,
  token,
  dispatch,
  firstName,
  lastName,
  id,
  message
) => {
  try {
    const response = await fetch(`${apiURL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newUsername }),
    });

    if (response.ok) {
      dispatch(setUser({ firstName, lastName, userName: newUsername, id }));
      clearErrorMessage(dispatch, message);
    } else {
      dispatch(setMessage(response.statusText));
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
};
