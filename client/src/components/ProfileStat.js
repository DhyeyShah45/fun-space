import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../userContext";

const ProfileStat = ({ data }) => {
  const { user, setUser } = useUserContext();
  const theme = useTheme();
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_BASE_URL}/user/del/${user.user_id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.message);
      navigate("/");
      setUser({ ...user, isLoggedIn: false });
    } catch (error) {
      console.error();
    }
  };
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
              <Avatar
                sx={{ bgcolor: "cadetblue" }}
                alt={user && user.user_name}
                src={user && user.image}
              ></Avatar>
              <Typography
                fontFamily="Quicksand"
                fontSize="1.15rem"
                pl={2}
                m={"auto"}
              >
                Name: {user && user.user_name}
              </Typography>
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-evenly"
              borderLeft="1px solid black"
              padding={1}
            >
              <Typography fontFamily="Quicksand" fontSize="1.15rem" m={"auto"}>
                No. of main thread : {data && data.no_of_thread}
              </Typography>
              <Typography fontFamily="Quicksand" fontSize="1.15rem" m={"auto"}>
                No. of comments : {data && data.no_of_comments}
              </Typography>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={handleDelete}
              >
                Delete Account
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileStat;
