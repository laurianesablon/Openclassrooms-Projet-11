// export const fetchLogin = async (email, password) => {
//     const url = "http://localhost:3001/api/v1/user/login";
//     const data = { email, password };
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     };
//     try {
//       const response = await fetch(url, options);
//       const responseData = await response.json();
//       console.log(responseData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//  export const fetchUserData = async (url, token, dispatch) => {
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "accept": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({}),
//       });
  
//       const responseData = await response.json();
//       console.log(responseData);
//       const { firstName, lastName, userName, id } = responseData.body;
//       const user = { firstName, lastName, userName, id };
//       dispatch(setUser(user));
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
