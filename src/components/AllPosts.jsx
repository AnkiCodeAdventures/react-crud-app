import RenderComponent from "./RenderComponent";
import { API_ROUTES } from "../utils/constants";

function AllPosts({ posts, setPosts, updatePost, fetchAllPosts }) {
  function handleDeletePost(postId) {
    fetch(`${API_ROUTES.POSTS}/${postId}`, {
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
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      {posts.map((post) => (
        <RenderComponent
          key={post.id}
          post={post}
          handleDeletePost={handleDeletePost}
          updatePost={updatePost}
          fetchAllPosts={fetchAllPosts}
        />
      ))}
    </div>
  );
}

export default AllPosts;
