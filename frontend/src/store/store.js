import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null,
    authenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.authenticated = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.authenticated = false;
    },
  },
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: undefined,
    lastName: undefined,
    userName: undefined,
    authenticated: false, 
  },
  reducers: {
    setUser: (state, action) => {
      const { firstName, lastName, userName} = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
      state.authenticated = true;
    },
    clearUser: (state) => {
      state.firstName = undefined;
      state.lastName = undefined;
      state.userName = undefined;
      state.authenticated = false;
    },
  },
});


const tokenReducer = tokenSlice.reducer;
const userReducer = userSlice.reducer;

export const { setToken, clearToken } = tokenSlice.actions;
export const { setUser, clearUser } = userSlice.actions;

const reducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});

const store = configureStore({ reducer });
export { store };
