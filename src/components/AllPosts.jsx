import { useEffect } from "react";
import RenderComponent from "./RenderComponent";

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

  function handleUpdatePost(UpdateId, text) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${UpdateId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: text,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((err) => console.log(err));
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
          handleUpdatePost={handleUpdatePost}
        />
      ))}
    </div>
  );
}

export default AllPosts;
