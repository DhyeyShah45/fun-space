import { useUserContext } from "../userContext";

export const useAction = () => {
  const { user } = useUserContext();
  const postThread = async (title, description, tags) => {
    const respomse = await fetch(
      `http://localhost:5000/view/add/thread/${user.user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ title, description, tags }),
      }
    );
    const data = await respomse.json();
    console.log(data.message);
  };
  return { postThread };
};
