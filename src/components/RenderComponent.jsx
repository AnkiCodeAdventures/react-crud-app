import { Box, Button, TextField } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useState } from "react";

function RenderComponent({
  post,
  handleDeletePost,
  updatePost,
  fetchAllPosts,
}) {
  const [postText, setPostText] = useState(() => post.body);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <Box
        minHeight={110}
        border={3}
        borderRadius={10}
        borderColor="white"
        px="2rem"
        pt="3rem"
        pb="2rem"
        mb="3rem"
      >
        <TextField
          fullWidth
          variant="outlined"
          multiline
          minRows={7}
          value={postText}
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          inputProps={{ readOnly: isEditing ? false : true }}
          sx={{
            "& fieldset": {
              border: "none",
            },
            "&  textarea": { color: "white" },
          }}
        />

        <Button
          aria-label="delete"
          variant="contained"
          onClick={() => handleDeletePost(post.id)}
        >
          <DeleteRoundedIcon />
        </Button>
        <Button
          aria-label="edit"
          variant="contained"
          onClick={() => setIsEditing(true)}
          disabled={isEditing ? true : null}
        >
          <CreateRoundedIcon />
        </Button>
        {isEditing ? (
          <Button
            aria-label="update"
            variant="contained"
            onClick={() => {
              updatePost(postText, post.id);
              setIsEditing(false);
              fetchAllPosts();
            }}
          >
            <CheckCircleRoundedIcon />
          </Button>
        ) : null}
      </Box>
    </div>
  );
}

export default RenderComponent;
