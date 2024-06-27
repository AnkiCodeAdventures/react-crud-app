import { Box } from "@mui/material";
import AddPost from "./AddPost";

function Header() {
  return (
    <Box width="84%" my="0" mx="auto">
      <h1 style={{ textAlign: "center", margin: "0", marginBottom: "2rem" }}>
        REACT CRUD APP
      </h1>
      <AddPost />
    </Box>
  );
}

export default Header;
