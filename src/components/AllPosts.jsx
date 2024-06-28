import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { PropTypes } from "prop-types";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function AllPosts({ posts, setPosts }) {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((err) => console.log(err));
  }, [setPosts]);

  function handleDeletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() => {
        setPosts((prevValue) => {
          return prevValue.filter((post) => post.id !== postId);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <Button variant="contained" onClick={() => handleDeletePost(post.id)}>
            <DeleteRoundedIcon />
          </Button>
        </Box>
      ))}
    </div>
  );
}

AllPosts.propTypes = {
  posts: PropTypes.object,
  setPosts: PropTypes.string,
};

export default AllPosts;
