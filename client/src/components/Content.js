import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

const Content = () => {
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
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Card Title
          </Typography>
        </CardContent>
        <CardContent>
          <Typography color="textSecondary">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default Content;
