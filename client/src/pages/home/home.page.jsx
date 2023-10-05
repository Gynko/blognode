import { Link } from "react-router-dom";
import "./home.styles.css";

export default function Home() {
  return (
    <div>
      <section className="section-page">
        <h1>Yoann Godiet's website </h1>
        <Link className="home-link-blog" to="/blog">
          Blog
        </Link>
      </section>
    </div>
  );
}
