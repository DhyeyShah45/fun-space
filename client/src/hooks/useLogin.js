import { useUserContext } from "../userContext";
export const useLogin = () => {
  const { user, setUser } = useUserContext();
  const login = async (name, email, picture) => {
    try {
      const response = await fetch(
        "https://funspace-server.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );
      const data = await response.json();
      setUser({ ...user, ...data[0], isLoggedIn: true, image: picture });
    } catch (error) {
      console.error(error);
    }
  };
  return { login };
};
