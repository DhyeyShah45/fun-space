import { Box } from "@mui/material";
import AddComment from "../components/AddComment";
import MainContent from "../components/MainContent";
import ViewComment from "../components/ViewComment";

const MainContentView = () => {
  return (
    <Box>
      <MainContent />
      <AddComment />
      <ViewComment />
    </Box>
  );
};

export default MainContentView;
