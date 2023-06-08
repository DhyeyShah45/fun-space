import { Box, Card, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ width: "80%", margin: "auto", opacity: "0.8" }}>
      <Card sx={{ borderRadius: "20px" }}>
        <Typography
          variant="body1"
          fontSize="1.5rem"
          fontFamily="Quicksand"
          padding={2}
          textAlign="center"
        >
          Connecting to server...
        </Typography>
      </Card>
    </Box>
  );
};

export default Loading;
