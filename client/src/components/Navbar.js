import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
// https://youtu.be/roxC8SMs7HU - Google Authentication

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "auto",
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const { login, loggedIn, setLoggedIn } = useLogin();

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    const handleCallbackResponse = async (response) => {
      const data = jwt_decode(response.credential);
      await login(data.name, data.email);
      // setUser({ name: data.name, email: data.email, picture: data.picture });
    };
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "711055178299-5k26umqpiqfkndjghnfhsn40ioledr2p.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [login]);

  return (
    <div className="navbar">
      <Typography
        variant="h4"
        fontFamily="Quicksand"
        sx={{ fontSize: "1.5rem", padding: "10px", ml: "20px" }}
      >
        Logo
      </Typography>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <div className="links">
        {loggedIn ? (
          <Button
            variant="contained"
            color="info"
            onClick={handleSignOut}
            sx={{ marginRight: "20px" }}
          >
            SignOut
          </Button>
        ) : (
          <div id="signInDiv" style={{ marginRight: "20px" }}></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
