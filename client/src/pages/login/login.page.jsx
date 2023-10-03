import Header from "../../components/header/header.component";
import "./login.styles.css";

export default function LoginPage() {
  return (
    <div>
      <Header />
      <section className="section-container">
        <h1 className="login-title">Administrator Login</h1>
        <form className="form">
          <div className="input-container">
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <input className="login-input" type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input className="login-input" type="text" placeholder="Password" />
          </div>
          <input className="login-submit" type="submit" />
        </form>
      </section>
    </div>
  );
}
