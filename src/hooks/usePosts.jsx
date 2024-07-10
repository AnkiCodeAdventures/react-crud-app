import { useEffect, useState } from "react";
import { API_ROUTES } from "../utils/constants";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts() {
    const response = await fetch(API_ROUTES.POSTS, {
      method: "GET",
    });
    const json = await response.json();
    setPosts(json);
  }

  async function addPost(text) {
    await fetch(API_ROUTES.POSTS, {
      method: "POST",
      body: `{ "body": "${text}", "title": "foo", "userId": 1 }`,
    });
  }

  async function updatePost(updatedText, postId) {
    await fetch(`${API_ROUTES.POSTS}/${postId}`, {
      method: "PUT",
      body: `{
        "body" : "${updatedText}",
        "userId" : 1,
        "title" : "foo"
        }`,
    });
  }

  async function deletePost(deleteId) {
    await fetch(`${API_ROUTES.POSTS}/${deleteId}`, {
      method: "DELETE",
    });
  }

  return { posts, setPosts, fetchAllPosts, addPost, updatePost, deletePost };
}

export default usePosts;
