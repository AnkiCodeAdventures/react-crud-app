import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function AddPost({ setPosts }) {
  const [text, setText] = useState("");

  function handlePostSubmit() {
    {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "Ankita",
          body: text,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => setPosts((prevValue) => [json, ...prevValue]))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
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
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </Box>
      <Button
        aria-label="submit"
        variant="contained"
        sx={{
          margin: "1rem",
          borderRadius: "5",
          width: "15%",
          alignSelf: "flex-end",
        }}
        onClick={handlePostSubmit}
      >
        POST
      </Button>
    </div>
  );
}

export default AddPost;
