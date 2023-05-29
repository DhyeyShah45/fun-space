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
const ViewComment = () => {
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
          Comments
        </Typography>
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
                  Comment
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
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default ViewComment;
