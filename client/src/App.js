import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eee",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Homepage />
      {/* <MainContentView /> */}
      {/* <AddThread /> */}
      {/* <Dashboard /> */}
    </ThemeProvider>
  );
}

export default App;
