import { Card, CardContent, Typography, useTheme } from "@mui/material";

const HomepageSideData = ({ data }) => {
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
        <Typography color="textSecondary">
          Number of Threads : {data && data.threads_count}
        </Typography>
        <Typography color="textSecondary">
          Number of Comments :{data && data.comments_count}
        </Typography>
        <Typography color="textSecondary">
          Number of Users : {data && data.users_count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomepageSideData;
