import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";

const ProfileStat = () => {
  const theme = useTheme();
  return (
    <Box width="80%" margin="auto">
      <Card
        sx={{
          borderRadius: "20px",
          opacity: "0.8",
          backgroundColor: theme.palette.primary.main,
          mb: 2,
        }}
      >
        <CardContent>
          <Box display="flex">
            <Box
              display="flex"
              width="30%"
              justifyContent="space-evenly"
              padding={1}
            >
              <Typography fontFamily="Quicksand" fontSize="1rem" pl={2}>
                Name
              </Typography>
              <Typography fontFamily="Quicksand" fontSize="1rem" pr={2}>
                Image
              </Typography>
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-evenly"
              borderLeft="1px solid black"
              padding={1}
            >
              <Typography fontFamily="Quicksand" fontSize="1rem">
                No. of main thread :
              </Typography>
              <Typography fontFamily="Quicksand" fontSize="1rem">
                No. of comments :
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileStat;
