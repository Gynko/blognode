import { useEffect, useState, useCallback } from "react";
import { httpGetBlogPosts } from "./requests";

export default function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  const getBlogPosts = useCallback(async () => {
    const fetchedBlogPosts = await httpGetBlogPosts();
    setBlogPosts(fetchedBlogPosts);
  }, []);

  useEffect(() => {
    getBlogPosts();
  }, [getBlogPosts]);
  return { blogPosts, refetch: getBlogPosts };
}
