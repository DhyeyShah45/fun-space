import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

const Content = ({ data }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  const theme = useTheme();
  return (
    <ButtonBase onClick={handleClick} style={{ width: "100%" }}>
      <Card
        style={{
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          borderRadius: "20px",
          margin: "5px",
          textAlign: "left",
          opacity: "0.8",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {data.thread_title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography color="textSecondary">
            {data.thread_description}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default Content;
