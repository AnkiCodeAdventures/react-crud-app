import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function AddPost({ addPost, fetchAllPosts }) {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        disabled={isLoading ? true : false}
        sx={{
          margin: "1rem",
          borderRadius: "5",
          width: "15%",
          alignSelf: "flex-end",
        }}
        onClick={async () => {
          setIsLoading(true);
          await addPost(text);
          await fetchAllPosts();
          setText("");
          setIsLoading(false);
        }}
      >
        {isLoading ? "POSTING..." : "POST"}
      </Button>
    </div>
  );
}

export default AddPost;
