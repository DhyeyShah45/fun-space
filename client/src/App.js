import { ThemeProvider, createTheme } from "@mui/material";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddThread from "./pages/AddThread";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import MainContentView from "./pages/MainContentView";
import { useUserContext } from "./userContext";

function App() {
  const { user } = useUserContext();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eee",
      },
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/addThread"
            element={
              user.isLoggedIn ? <AddThread /> : <Navigate to="/"></Navigate>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              user.isLoggedIn ? <Dashboard /> : <Navigate to="/"></Navigate>
            }
          />
          <Route exact path="/view/thread/:id" element={<MainContentView />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
