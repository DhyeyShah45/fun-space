import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const AddThread = () => {
  const theme = useTheme();
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
              <TextField label="Title" variant="outlined" fullWidth />
            </Box>
            <Box width="30%" margin={1}>
              <TextField label="Tags" variant="outlined" fullWidth />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box width="70%" margin={1}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
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
              <Button variant="contained" color="info" sx={{ width: "90%" }}>
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
