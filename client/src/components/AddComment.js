import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const AddComment = () => {
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
            <CardContent sx={{ width: "60%" }}>
              <TextField
                label="Write a comment"
                variant="outlined"
                // value={comment}
                // onChange={handleCommentChange}
                fullWidth
              />
            </CardContent>
            <CardContent sx={{ width: "20%", pl: "0" }}>
              <TextField
                label="Your Name"
                variant="outlined"
                // value={comment}
                // onChange={handleCommentChange}
                fullWidth
              />
            </CardContent>
            <Box display="flex" justifyContent="flex-end" width="20%">
              <Button variant="contained" color="info" fullWidth>
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
