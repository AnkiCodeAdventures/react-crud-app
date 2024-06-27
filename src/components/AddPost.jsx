import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function AddPost() {
  const [post, SetPost] = useState();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box
        minHeight={110}
        border={3}
        borderRadius={10}
        borderColor="white"
        px="2rem"
        pt="3rem"
        pb="2rem"
      >
        <TextField
          fullWidth
          variant="outlined"
          multiline
          minRows={7}
          sx={{
            "& fieldset": {
              border: "none",
            },
            "&  textarea": { color: "white" },
          }}
          value={post}
          onChange={(event) => SetPost(event.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          margin: "1rem",
          borderRadius: "5",
          width: "15%",
          alignSelf: "flex-end",
        }}
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
              title: "foo",
              body: post,
              userId: 1,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }}
      >
        POST
      </Button>
    </div>
  );
}

export default AddPost;
