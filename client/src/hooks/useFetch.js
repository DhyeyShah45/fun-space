import { useState } from "react";
import { useUserContext } from "../userContext";
export const useFetch = () => {
  const { user, setUser } = useUserContext();
  const [top5thread, setTop5Thread] = useState({});
  const [metrics, setMetrics] = useState();
  const [profMetrics, setProfMetric] = useState();
  const [profThreads, setProfThreads] = useState({});
  const [profComments, setProfComments] = useState({});
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
  return {
    top5,
    top5thread,
    stat,
    metrics,
    profileDetails,
    profMetrics,
    profileThreads,
    profThreads,
    profileComments,
    profComments,
  };
};