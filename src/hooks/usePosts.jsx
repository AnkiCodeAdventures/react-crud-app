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
    const response = await fetch(API_ROUTES.POSTS, {
      method: "POST",
      body: `{ "body": "${text}", "title": "foo", "userId": 1 }`,
    });
  }

  async function updatePost(updatedText, postId) {
    const response = await fetch(`${API_ROUTES.POSTS}/${postId}`, {
      method: "PUT",
      body: `{
        "body" : "${updatedText}",
        "userId" : 1,
        "title" : "foo"
        }`,
    });
  }

  return { posts, setPosts, fetchAllPosts, addPost, updatePost };
}

export default usePosts;
