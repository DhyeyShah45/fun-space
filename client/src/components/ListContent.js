import { Card, CardContent, Typography, useTheme } from "@mui/material";
import Content from "./Content";

const ListContent = () => {
  const theme = useTheme();

  return (
    <>
      <Card
        style={{
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          height: "60px",
          borderRadius: "20px",
          marginBottom: "5px",
          textAlign: "center",
          opacity: "0.8",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Top Threads
          </Typography>
        </CardContent>
      </Card>
      <Content />
      <Content />
      <Content />
      {/* <Content /> */}
    </>
  );
};

export default ListContent;
