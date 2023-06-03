import { Box, Typography } from "@mui/material";
import Comment from "./Comment";
const ViewComment = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          opacity: "0.8",
        }}
      >
        <Typography color="#eee" fontSize="1.5rem">
          Comments - {data.length}
        </Typography>
        {data.map((comment) => (
          <Comment data={comment} key={comment.comment_id} />
        ))}
      </Box>
    </>
  );
};

export default ViewComment;
