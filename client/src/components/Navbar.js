import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useLogin } from "../hooks/useLogin";
import { useUserContext } from "../userContext";
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

const Navbar = ({ setAllThreads }) => {
  const { login } = useLogin();
  const { user, setUser } = useUserContext();
  const { getAllThreads, getSearch } = useFetch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleViewAll = async () => {
    const value = await getAllThreads();
    setAllThreads(value);
    setTimeout(() => {
      navigate("/view/all");
    }, 1000);
  };

  const handleSignOut = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  useEffect(() => {
    const handleCallbackResponse = async (response) => {
      const data = jwt_decode(response.credential);
      await login(data.name, data.email, data.picture);
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
  }, [user.isLoggedIn]);

  const handleEnter = async (event) => {
    if (event.key === "Enter") {
      const value = await getSearch(search);
      setAllThreads(value);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          fontFamily="Quicksand"
          sx={{ fontSize: "1.5rem", padding: "10px", ml: "20px" }}
        >
          Logo
        </Typography>
      </Link>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnter}
        />
      </Search>
      <div className="links">
        <Button
          variant="contained"
          color="info"
          sx={{ marginRight: "20px" }}
          onClick={handleViewAll}
        >
          View All
        </Button>
        {user.isLoggedIn ? (
          <>
            <Link to="/addThread">
              <Button
                variant="contained"
                color="info"
                sx={{ marginRight: "20px" }}
              >
                Add Thread
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant="contained"
                color="info"
                sx={{ marginRight: "20px" }}
              >
                Dashboard
              </Button>
            </Link>
            <Button
              variant="contained"
              color="info"
              onClick={handleSignOut}
              sx={{ marginRight: "20px" }}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <div id="signInDiv" style={{ marginRight: "20px" }}></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
