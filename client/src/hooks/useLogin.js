import { useState } from "react";
import { useUserContext } from "../userContext";
export const useLogin = () => {
  const { user, setUser } = useUserContext();
  const [loggedIn, setLoggedIn] = useState(false);
  const login = async (name, email) => {
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      setUser({ ...user, ...data[0] });
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };
  return { login, loggedIn, setLoggedIn };
};
