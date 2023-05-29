import { Box } from "@mui/material";
import ListContent from "../components/ListContent";
import ProfileStat from "../components/ProfileStat";

const Dashboard = () => {
  return (
    <div>
      <ProfileStat />
      <Box width="80%" margin="auto" display="flex">
        <Box width="60%" margin={1}>
          <ListContent />
        </Box>
        <Box width="40%" margin={1}>
          <ListContent />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
