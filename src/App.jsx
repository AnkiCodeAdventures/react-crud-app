import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import AddPost from "./components/AddPost";
import usePosts from "./hooks/usePosts";

function App() {
  const { posts, setPosts, addPost } = usePosts();
  return (
    <Box width="100vw" minHeight="100vh" bgcolor={"#005b96"} p="2rem">
      <Header />
      <AddPost addPost={addPost} />
      <AllPosts posts={posts} setPosts={setPosts} />
    </Box>
  );
}

export default App;
