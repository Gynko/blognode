import useBlogPosts from "../../hooks/useBlogPosts";

import Header from "../../components/header/header.component";
import "./blogContent.styles.css";

export default function BlogContentPage() {
  const blogPosts = useBlogPosts();
  return (
    <div>
      <Header />
      <section className="section-container">
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
