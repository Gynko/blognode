const API_URL = "http://localhost:8000";

async function httpGetBlogPosts() {
  const response = await fetch(`${API_URL}/api/blogcontent`);
  return await response.json();
}

export { httpGetBlogPosts };
