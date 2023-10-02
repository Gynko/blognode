import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
import "./home.styles.css";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="section-page">
        <h1>Welcome to the DevBlog of Yoann</h1>
        <Link to="/api/blogcontent">Blog</Link>
        <Link to="/api/login">Login</Link>
      </section>
    </div>
  );
}
