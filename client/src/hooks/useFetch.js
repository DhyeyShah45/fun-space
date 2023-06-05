import { useState } from "react";
import { useUserContext } from "../userContext";
export const useFetch = () => {
  const { user } = useUserContext();
  const [top5thread, setTop5Thread] = useState({});
  const [metrics, setMetrics] = useState();
  const [profMetrics, setProfMetric] = useState();
  const [profThreads, setProfThreads] = useState({});
  const [profComments, setProfComments] = useState({});
  const [mainThread, setMainThread] = useState({});
  const [comments, setComments] = useState([]);
  const [allThreads, setAllThreads] = useState([]);
  const top5 = async () => {
    try {
      const response = await fetch("http://localhost:5000/main/top5", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setTop5Thread(data);
    } catch (error) {
      console.error(error);
    }
  };
  const stat = async () => {
    try {
      const response = await fetch("http://localhost:5000/main/stat", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error(error);
    }
  };
  const profileDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/details/${user.user_id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setProfMetric(data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const profileThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/threads/${user.user_id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setProfThreads(data);
    } catch (error) {
      console.error(error);
    }
  };
  const profileComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/comments/${user.user_id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      // console.log(data);

      setProfComments(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getThread = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/view/view/thread/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setMainThread(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getComments = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/view/view/comments/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllThreads = async () => {
    try {
      const response = await fetch(`http://localhost:5000/main/all`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setAllThreads(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getSearch = async (search) => {
    try {
      const response = await fetch(`http://localhost:5000/main/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({ search }),
      });
      const data = await response.json();
      setAllThreads(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    top5,
    top5thread,
    stat,
    metrics,
    getAllThreads,
    allThreads,
    getSearch,
    profileDetails,
    profMetrics,
    profileThreads,
    profThreads,
    profileComments,
    profComments,
    getThread,
    mainThread,
    getComments,
    comments,
  };
};
