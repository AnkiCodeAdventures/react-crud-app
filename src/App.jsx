import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <Box width="100vw" minHeight="100vh" bgcolor={"#005b96"}>
      <Header />
      <AllPosts />
    </Box>
  );
}

export default App;
