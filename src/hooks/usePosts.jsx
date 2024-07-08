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

      //   body: JSON.stringify({ body: text, title: "foo", userId: "1" }),
      body: `{ "body": "${text}", "title": "foo", "userId": 1 }`,
    });
    const json = await response.json();
  }

  return { posts, setPosts, fetchAllPosts, addPost };
}

export default usePosts;
