const API_URL = "https://localhost:8000";

async function httpGetBlogPosts() {
  const response = await fetch(`${API_URL}/api/blogcontent`);
  return await response.json();
}

export { httpGetBlogPosts };
