import RenderComponent from "./RenderComponent";

function AllPosts({ posts, updatePost, fetchAllPosts, deletePost }) {
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
          updatePost={updatePost}
          deletePost={deletePost}
          fetchAllPosts={fetchAllPosts}
        />
      ))}
    </div>
  );
}

export default AllPosts;
