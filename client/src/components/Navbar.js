import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
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
  return (
    <div className="navbar">
      <Typography
        variant="h4"
        fontFamily="Quicksand"
        sx={{ fontSize: "1.5rem", padding: "10px", ml: "20px" }}
      >
        Logo
      </Typography>

      {/* <div className="search">
        <Typography
          variant="h4"
          fontFamily="Quicksand"
          sx={{ fontSize: "1.5rem" }}
        >
          Search Bar
        </Typography>
      </div> */}

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
        <Typography
          variant="h4"
          fontFamily="Quicksand"
          sx={{ padding: "10px", fontSize: "1.5rem" }}
        >
          Login
        </Typography>
        <Typography
          variant="h4"
          fontFamily="Quicksand"
          sx={{ padding: "10px", fontSize: "1.5rem", mr: "10px" }}
        >
          Register
        </Typography>
      </div>
    </div>
  );
};

export default Navbar;
