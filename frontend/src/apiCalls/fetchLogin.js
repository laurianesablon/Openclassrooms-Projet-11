import { store } from "../store/store";

async function fetchLogin(data, url, navigate) {
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

    if (response.ok) {
      const token = responseData.body.token;
      store.dispatch({ type: "SET_TOKEN", payload: [token] });
      navigate("/profile");
    } else {
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default fetchLogin;
