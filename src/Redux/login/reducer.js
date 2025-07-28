// Redux/login/reducer.js

const initialState = {
  user: JSON.parse(localStorage.getItem("spider-user")) || {},
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, user: action.payload, error: null };

    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      return { ...state, user: {}, error: null, loading: false };

    default:
      return state;
  }
};