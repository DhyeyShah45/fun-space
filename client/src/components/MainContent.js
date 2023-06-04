import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../hooks/useAction";
import { useUserContext } from "../userContext";

const MainContent = ({ data, hasChanged, setHasChanged }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const ok = Object.keys(data).length !== 0;
  const { postLikeThread, postDislikeThread, delThread, putThread } =
    useAction();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const isLiked = ok && data.thread_likedby.includes(user.user_id);
  const isDisliked = ok && data.thread_dislikedby.includes(user.user_id);

  const handleDelete = () => {
    delThread(data.thread_id);
    navigate("/");
  };
  const handleThreadLike = () => {
    if (!isLiked) {
      postLikeThread(user.user_id, data.thread_id);
      setHasChanged(!hasChanged);
    } else {
      console.log("already liked");
    }
  };
  const handleThreadDislike = () => {
    if (!isDisliked) {
      postDislikeThread(user.user_id, data.thread_id);
      setHasChanged(!hasChanged);
    } else {
      console.log("already disliked");
    }
  };
  const handleOpen = () => {
    setTitle(data.thread_title);
    setDescription(data.thread_description);
    setTags(data.thread_tags.join(", "));
    setOpen(true);
  };
  const handleEdit = () => {
    console.log(title, description, tags);

    putThread(
      title,
      description,
      tags.split(","),
      user.user_id,
      data.thread_id
    );
    setHasChanged(!hasChanged);
    setOpen(false);
  };
  // console.log(title, description, tags);
  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          opacity: "0.8",
        }}
      >
        <Card sx={{ borderRadius: "20px", mb: "5px" }}>
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ alignItems: "center" }}>
              <Typography fontSize="1.25rem" fontFamily="Quicksand">
                Author: {ok && data.user_name}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                borderLeft: "1px solid black",
              }}
            >
              <CardContent>
                <Typography fontSize="1.25rem" fontFamily="Quicksand">
                  Title: {ok && data.thread_title}
                </Typography>
              </CardContent>
            </Box>
            {user.isLoggedIn && (
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "auto",
                  width: "30%",
                  justifyContent: "space-evenly",
                  borderLeft: "1px solid black",
                }}
              >
                <Box alignItems="center">
                  <Box mt="20%">
                    <Tooltip title="Like">
                      <Button color="inherit" onClick={handleThreadLike}>
                        {isLiked ? (
                          <ThumbUpIcon fontSize="medium"></ThumbUpIcon>
                        ) : (
                          <ThumbUpOffAltIcon fontSize="medium"></ThumbUpOffAltIcon>
                        )}
                      </Button>
                    </Tooltip>
                  </Box>
                  <Typography
                    fontSize="1rem"
                    fontFamily="Quicksand"
                    textAlign="center"
                  >
                    Likes: {ok && data.thread_likedby.length}
                  </Typography>
                </Box>
                <Box alignItems="center">
                  <Box mt="20%">
                    <Tooltip title="Dislike">
                      <Button color="inherit" onClick={handleThreadDislike}>
                        {isDisliked ? (
                          <ThumbDownIcon fontSize="medium"></ThumbDownIcon>
                        ) : (
                          <ThumbDownOffAltIcon fontSize="medium"></ThumbDownOffAltIcon>
                        )}
                      </Button>
                    </Tooltip>
                  </Box>
                  <Typography
                    fontSize="1rem"
                    fontFamily="Quicksand"
                    textAlign="center"
                  >
                    Dislikes: {ok && data.thread_dislikedby.length}
                  </Typography>
                </Box>
                {data.thread_author === user.user_id && (
                  <>
                    <Box alignItems="center">
                      <Box mt="20%">
                        <Tooltip title="Delete">
                          <Button color="inherit" onClick={handleDelete}>
                            <DeleteOutlineIcon fontSize="large"></DeleteOutlineIcon>
                          </Button>
                        </Tooltip>
                      </Box>
                    </Box>
                    <Box alignItems="center">
                      <Box mt="20%">
                        <Tooltip title="Edit">
                          <Button color="inherit" onClick={handleOpen}>
                            <EditOutlinedIcon fontSize="large"></EditOutlinedIcon>
                          </Button>
                        </Tooltip>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            )}
          </Box>
          <CardContent sx={{ borderTop: "1px solid black" }}>
            <Typography fontSize="1rem" fontFamily="Quicksand">
              Description: {ok && data.thread_description}
            </Typography>
          </CardContent>
          <Box display="flex" borderTop="1px solid black">
            <CardContent>
              <Typography fontSize="1rem" fontFamily="Quicksand">
                Tags: {ok && data.thread_tags.join(", ")}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box width="80%" mx="auto" my="10%">
          <Typography color="#eee" fontSize="2rem" fontFamily="Quicksand">
            Edit
          </Typography>
          <Card
            sx={{
              borderRadius: "20px",
              backgroundColor: "#eee",
              opacity: "1",
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
                    // disabled={!isOk}
                    sx={{ width: "90%" }}
                    onClick={handleEdit}
                  >
                    Post
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default MainContent;
