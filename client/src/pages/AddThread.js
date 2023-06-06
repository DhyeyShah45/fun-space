import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../hooks/useAction";

const AddThread = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const { postThread } = useAction();
  const isOk = title !== "" && description !== "" && tags !== "";
  const handlePostThread = () => {
    postThread(title, description, tags.split(","));
    setTitle("");
    setDescription("");
    setTags("");
    navigate("/");
  };
  return (
    <Box width="80%" margin="auto">
      <Typography color="#eee" fontSize="2rem" fontFamily="Quicksand">
        Add a main thread
      </Typography>
      <Card
        sx={{
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
          opacity: "0.8",
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="center">
            <Box width="70%" margin={1} display="flex" alignItems="center">
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Box>
            <Box width="30%" margin={1}>
              <TextField
                label="Tags"
                placeholder="use commas to separate"
                variant="outlined"
                required
                fullWidth
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box width="70%" margin={1}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                multiline
                inputProps={{ style: { resize: "vertical" } }}
              />
            </Box>
            <Box
              width="30%"
              margin={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="info"
                disabled={!isOk}
                sx={{ width: "90%" }}
                onClick={handlePostThread}
              >
                Post
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddThread;
