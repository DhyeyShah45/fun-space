import { Card, CardContent, Typography, useTheme } from "@mui/material";

const HomepageSideData = () => {
  const theme = useTheme();
  return (
    <Card
      style={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        textAlign: "center",
        opacity: "0.8",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          Site Statistics
        </Typography>
        <Typography color="textSecondary">Number of Threads</Typography>
        <Typography color="textSecondary">Number of Comments</Typography>
        <Typography color="textSecondary">Number of Users</Typography>
      </CardContent>
    </Card>
  );
};

export default HomepageSideData;
