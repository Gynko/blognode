import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import useBlogPosts from "../../hooks/useBlogPosts";
import "./blogContent.styles.css";

export default function BlogContentPage() {
  const contextData = useContext(MyContext);
  const { user } = contextData;
  const blogPosts = useBlogPosts();
  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  return (
    <div>
      <section className="section-container">
        {user.username === "Admin" ? (
          <div className="new-article-container">
            <h1 className="new-article-greeting">{`Hello, ${user.username}`}</h1>
            <form className="new-article-form">
              <input
                type="text"
                placeholder="Title"
                className="new-article-title"
              />
              <textarea className="new-article-textarea" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        ) : null}
        {blogPosts.map((blogPost) => (
          <div className="post-container" key={blogPost.title}>
            <h2 className="post-title">{blogPost.title}</h2>
            <p className="post-date">{blogPost.date}</p>
            <p className="post-description">{blogPost.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
