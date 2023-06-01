import { Box } from "@mui/material";
import { useEffect } from "react";
import ListContent from "../components/ListContent";
import ProfileStat from "../components/ProfileStat";
import { useFetch } from "../hooks/useFetch";

const Dashboard = () => {
  const {
    profileDetails,
    profMetrics,
    profileThreads,
    profThreads,
    profileComments,
    profComments,
  } = useFetch();
  useEffect(() => {
    profileDetails();
    profileThreads();
    profileComments();
  }, []);
  return (
    <div>
      <ProfileStat data={profMetrics} />
      <Box width="80%" margin="auto" display="flex">
        <Box width="60%" margin={1}>
          <ListContent data={profThreads} heading={"Threads"} />
        </Box>
        <Box width="40%" margin={1}>
          <ListContent data={profComments} heading={"Comments"} />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
