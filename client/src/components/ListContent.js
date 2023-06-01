import { Card, CardContent, Typography, useTheme } from "@mui/material";
import Content from "../components/Content";

const ListContent = ({ data, heading }) => {
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
            {heading}
          </Typography>
        </CardContent>
      </Card>
      {/* {console.log(data.length)} */}
      {data.length &&
        data.map((thread) => <Content data={thread} key={thread.thread_id} />)}

      {/* <Content /> */}
    </>
  );
};

export default ListContent;
