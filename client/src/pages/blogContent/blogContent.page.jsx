import useBlogPosts from "../../hooks/useBlogPosts";

import Header from "../../components/header/header.component";
import "./blogContent.styles.css";

export default function BlogContentPage() {
  const blogPosts = useBlogPosts();
  return (
    <div>
      <Header />
      <section>
        <h1>Blog</h1>
        {blogPosts.map((blogPost) => (
          <div key={blogPost.title}>
            <h2>{blogPost.title}</h2>
            <p>{blogPost.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
