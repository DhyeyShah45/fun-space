import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Content = ({ data }) => {
  const navigate = useNavigate();
  let joinedDescription = "";
  if (Array.isArray(data.thread_description)) {
    joinedDescription = data.thread_description.join(" | ");
  } else {
    joinedDescription = data.thread_description;
  }
  const handleClick = () => {
    navigate(`/view/thread/${data.thread_id}`);
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
