import CommentIcon from "@mui/icons-material/Comment";
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

const MainContent = () => {
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
          <CardContent>
            <Typography fontSize="1.5rem" fontFamily="Quicksand">
              Author
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
                Title
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
                Likes:
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
                Dislikes:
              </Typography>
            </Box>
            <Box alignItems="center">
              <Box mt="15%">
                <Tooltip title="Like">
                  <Button color="inherit">
                    <CommentIcon fontSize="medium"></CommentIcon>
                  </Button>
                </Tooltip>
              </Box>
              <Typography
                fontSize="1rem"
                fontFamily="Quicksand"
                textAlign="center"
              >
                Comments:
              </Typography>
            </Box>
          </Box>
        </Box>
        <CardContent sx={{ borderTop: "1px solid black" }}>
          <Typography fontSize="1rem" fontFamily="Quicksand">
            Description
          </Typography>
        </CardContent>
        <Box display="flex" borderTop="1px solid black">
          <CardContent>
            <Typography fontSize="1rem" fontFamily="Quicksand">
              Tags
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default MainContent;
