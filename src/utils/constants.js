export const API_ENDPOINT =
  import.meta.env.VITE_ENDPOINT || "http://localhost:3000/";

export const API_ROUTES = {
  POSTS: `${API_ENDPOINT}posts`,
};
