import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

const Content = ({ data }) => {
  let joinedDescription = "";
  if (Array.isArray(data.thread_description)) {
    joinedDescription = data.thread_description.join(" | ");
  } else {
    joinedDescription = data.thread_description;
  }
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
        <CardContent sx={{ pt: 0 }}>
          <Typography
            color="textSecondary"
            variant="inherit"
            fontSize="1.15rem"
          >
            {joinedDescription}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default Content;
