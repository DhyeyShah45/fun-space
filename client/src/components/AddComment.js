import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "../hooks/useAction";
import { useUserContext } from "../userContext";

const AddComment = ({ setHasChanged, hasChanged }) => {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const { user } = useUserContext();
  const { postComment } = useAction();
  const handlePostCopmment = () => {
    postComment(comment, user.user_id, id);
    setComment("");
    setHasChanged(!hasChanged);
  };
  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          opacity: "0.8",
        }}
      >
        <Typography color="#eee" fontSize="2rem">
          Add a comment
        </Typography>
        <Card sx={{ borderRadius: "20px", width: "100%" }}>
          <Box display="flex">
            <CardContent sx={{ width: "100%" }}>
              <TextField
                label="Write a comment"
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                fullWidth
              />
            </CardContent>
            <Box display="flex" justifyContent="flex-end" width="20%">
              <Button
                variant="contained"
                color="info"
                fullWidth
                onClick={handlePostCopmment}
              >
                POST
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default AddComment;
