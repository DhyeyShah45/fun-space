import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {
  Box,
  Button,
  Card,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAction } from "../hooks/useAction";
import { useUserContext } from "../userContext";

const Comment = ({ data, setHasChanged, hasChanged }) => {
  const { user } = useUserContext();
  const { delComment, postLikeComment, postDislikeComment } = useAction();
  const isLiked = data.comment_likedby.includes(user.user_id);
  const isDisliked = data.comment_dislikedby.includes(user.user_id);
  const handleDelete = () => {
    delComment(data.comment_id);
    setHasChanged(!hasChanged);
  };
  const handleCommentLike = () => {
    if (!isLiked) {
      postLikeComment(user.user_id, data.comment_id);
      setHasChanged(!hasChanged);
    } else {
      console.log("already liked");
    }
  };
  const handleCommentDislike = () => {
    if (!isDisliked) {
      postDislikeComment(user.user_id, data.comment_id);
      setHasChanged(!hasChanged);
    } else {
      console.log("already disliked");
    }
  };
  return (
    <Card sx={{ borderRadius: "20px", mb: "5px" }}>
      <Box sx={{ display: "flex" }}>
        <CardContent>
          <Typography fontSize="1.5rem" fontFamily="Quicksand">
            By: {data.user_name}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            borderLeft: "1px solid black",
          }}
        >
          <CardContent>
            <Typography fontSize="1.5rem" fontFamily="Quicksand">
              {data.comment_des}
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
                  <Button color="inherit" onClick={handleCommentLike}>
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
                Likes: {data.comment_likedby.length}
              </Typography>
            </Box>
            <Box alignItems="center">
              <Box mt="20%">
                <Tooltip title="Dislike">
                  <Button color="inherit" onClick={handleCommentDislike}>
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
                Dislikes: {data.comment_dislikedby.length}
              </Typography>
            </Box>
            {data.comment_author === user.user_id && (
              <Box alignItems="center">
                <Box mt="20%">
                  <Tooltip title="Delete">
                    <Button color="inherit" onClick={handleDelete}>
                      <DeleteOutlineIcon fontSize="large"></DeleteOutlineIcon>
                    </Button>
                  </Tooltip>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default Comment;
