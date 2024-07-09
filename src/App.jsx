import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import AllPosts from "./components/AllPosts";
import AddPost from "./components/AddPost";
import usePosts from "./hooks/usePosts";

function App() {
  const { posts, setPosts, addPost, fetchAllPosts, updatePost, deletePost } =
    usePosts();
  return (
    <Box width="100vw" minHeight="100vh" bgcolor={"#005b96"} p="2rem">
      <Header />
      <AddPost addPost={addPost} fetchAllPosts={fetchAllPosts} />
      <AllPosts
        posts={posts}
        setPosts={setPosts}
        updatePost={updatePost}
        fetchAllPosts={fetchAllPosts}
        deletePost={deletePost}
      />
    </Box>
  );
}

export default App;
