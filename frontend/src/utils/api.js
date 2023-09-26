import { setToken } from "../store/store";

export const fetchLogin = async (url, email, password, setResponse, dispatch, navigate) => {
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
        await fetchUserData(url, dispatch);

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

  export const fetchUserData = async (url, token, dispatch) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.body) {
          const { firstName, lastName, userName, id } = responseData.body;
          const user = { firstName, lastName, userName, id };
          dispatch(setUser(user));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  
