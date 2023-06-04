import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import MainContent from "../components/MainContent";
import ViewComment from "../components/ViewComment";
import { useFetch } from "../hooks/useFetch";
import { useUserContext } from "../userContext";

const MainContentView = () => {
  const { mainThread, getThread, comments, getComments } = useFetch();
  const [hasChanged, setHasChanged] = useState(true);
  const { id } = useParams();
  const { user } = useUserContext();

  useEffect(() => {
    getThread(id);
    getComments(id);
  }, [hasChanged]);
  // Retrieve thread data and pass it to main content
  // Retrieve comment data and pass it to view contnt
  // Then refresh the page
  return (
    <Box>
      <MainContent
        data={mainThread}
        setHasChanged={setHasChanged}
        hasChanged={hasChanged}
      />
      {user.isLoggedIn && (
        <AddComment setHasChanged={setHasChanged} hasChanged={hasChanged} />
      )}
      <ViewComment
        data={comments}
        setHasChanged={setHasChanged}
        hasChanged={hasChanged}
      />
    </Box>
  );
};

export default MainContentView;
