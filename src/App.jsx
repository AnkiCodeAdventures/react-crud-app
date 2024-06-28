import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import { useState } from "react";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Box maxWidth="100vw" minHeight="100vh" bgcolor={"#005b96"} p="2rem">
      <Header />
      <AddPost posts={posts} setPosts={setPosts} />
      <AllPosts posts={posts} setPosts={setPosts} />
    </Box>
  );
}

export default App;
