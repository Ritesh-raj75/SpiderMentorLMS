// Redux/login/action.js

// Login Function
export const authFunction = (userdata, URL) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const res = await fetch(`${URL}?email=${userdata.email}&password=${userdata.password}`);
    const data = await res.json();

    if (data.length > 0) {
      const payload = {
        user: data[0],
        token: "mock-token-" + new Date().getTime(),
      };

      // Optional: Save to localStorage for persistence
      localStorage.setItem("spider-user", JSON.stringify(payload));

      dispatch({ type: "LOGIN_SUCCESS", payload });
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: "Invalid credentials" });
    }
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: "Server error" });
  }
};

// Logout Function
export const logoutFunction = () => (dispatch) => {
  localStorage.removeItem("spider-user");
  dispatch({ type: "LOGOUT" });
};