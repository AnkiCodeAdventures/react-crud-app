import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Box
          key={post.id}
          width="80%"
          my="2rem"
          mx="auto"
          px="2rem"
          pt="3rem"
          pb="2rem"
          minHeight={180}
          border={3}
          borderRadius={10}
          borderColor="darkblue"
        >
          <p style={{ fontSize: "20px" }}>{post.title}</p>
          <p>{post.body}</p>
        </Box>
      ))}
    </div>
  );
}

export default AllPosts;
