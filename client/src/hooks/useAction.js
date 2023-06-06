import { useUserContext } from "../userContext";

export const useAction = () => {
  const { user } = useUserContext();

  const postThread = async (title, description, tags) => {
    const respomse = await fetch(
      `https://funspace-server.onrender.com/view/add/thread/${user.user_id}`,
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
  const postComment = async (description, uid, tid) => {
    try {
      const response = await fetch(
        `https://funspace-server.onrender.com/view/add/comment/${uid}/${tid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ description }),
        }
      );
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const delComment = async (id) => {
    try {
      const respomse = await fetch(
        `https://funspace-server.onrender.com/view/delete/comment/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await respomse.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const postLikeThread = async (uid, tid) => {
    try {
      const response = await fetch(
        `https://funspace-server.onrender.com/action/like/thread/${uid}/${tid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const postDislikeThread = async (uid, tid) => {
    try {
      const response = await fetch(
        `https://funspace-server.onrender.com/action/dislike/thread/${uid}/${tid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const postLikeComment = async (uid, tid) => {
    try {
      const response = await fetch(
        `https://funspace-server.onrender.com/action/like/comment/${uid}/${tid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const postDislikeComment = async (uid, tid) => {
    try {
      const response = await fetch(
        `https://funspace-server.onrender.com/action/dislike/comment/${uid}/${tid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const putThread = async (title, description, tags, uid, tid) => {
    try {
      const respomse = await fetch(
        `https://funspace-server.onrender.com/view/update/thread/${uid}/${tid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ title, description, tags }),
        }
      );
      const data = await respomse.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const delThread = async (id) => {
    try {
      const respomse = await fetch(
        `https://funspace-server.onrender.com/view/delete/thread/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await respomse.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    postThread,
    postComment,
    delComment,
    postLikeThread,
    postDislikeThread,
    postLikeComment,
    postDislikeComment,
    delThread,
    putThread,
  };
};
