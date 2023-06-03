import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Box,
  Button,
  Card,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";

const MainContent = ({ data }) => {
  const ok = Object.keys(data).length !== 0;
  return (
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
          <Box
            sx={{
              display: "flex",
              marginLeft: "auto",
              width: "20%",
              justifyContent: "space-evenly",
              borderLeft: "1px solid black",
            }}
          >
            <Box alignItems="center">
              <Box mt="20%">
                <Tooltip title="Like">
                  <Button color="inherit">
                    <ThumbUpIcon fontSize="medium"></ThumbUpIcon>
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
                <Tooltip title="Like">
                  <Button color="inherit">
                    <ThumbDownIcon fontSize="medium"></ThumbDownIcon>
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
          </Box>
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
  );
};

export default MainContent;
