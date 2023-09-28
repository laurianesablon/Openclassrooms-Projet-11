import { setToken, setUser } from "../store/store";
import { apiURL } from "./apiURL";

export const fetchLogin = async (
  email,
  password,
  setResponse,
  dispatch,
  navigate
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
      navigate("/profile");
    } else {
      throw new Error(responseData.message);
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
    console.log(response);

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

export const changeUsername = async (newUsername, token, dispatch, firstName, lastName, id) => {
    try {
      const response = await fetch(`${apiURL}/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ newUsername }),
      });
  
      if (response.ok) {
        dispatch(setUser({ firstName, lastName, userName: newUsername, id }));
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
