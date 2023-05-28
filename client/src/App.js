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
      <div className="bg-img">
        <Navbar />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
