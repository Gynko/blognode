import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
import "./home.styles.css";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="section-page">
        <h1>Yoann Godiet's website </h1>
        <Link className="home-link-blog" to="/api/blogcontent">
          Blog
        </Link>
      </section>
    </div>
  );
}
