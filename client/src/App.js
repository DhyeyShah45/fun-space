import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddThread from "./pages/AddThread";
import Homepage from "./pages/Homepage";
import MainContentView from "./pages/MainContentView";
import PageNotFound from "./pages/PageNotFound";
import View from "./pages/View";
import Dashboard from "./pages/dashboard";
import { useUserContext } from "./userContext";

function App() {
  const { user } = useUserContext();
  const [allThreads, setAllThreads] = useState([]);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eee",
      },
    },
  });
  return (
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#eee",
            color: "#000",
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <Navbar setAllThreads={setAllThreads} />
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
          <Route
            exact
            path="/view/all"
            element={<View allThreads={allThreads} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
