import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import "./login.styles.css";

export default function LoginPage() {
  const contextData = useContext(MyContext);
  const { setUser } = contextData;
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function onUserSubmit(event) {
    event.preventDefault();
    fetch("https://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([formData]),
    })
      .then((response) => {
        // Cleaning the state for security
        setFormData({
          ...formData,
          password: "",
        });
        if (response.status === 200) {
          setUser({ username: formData.username });
          return navigate("/blog");
        } else if (response.status === 401) {
          alert(
            "Are you trying to check if I handled wrong credentials, Egil?"
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div>
      <section className="section-container">
        <h1 className="login-title">Administrator Login</h1>
        <form className="form" onSubmit={onUserSubmit}>
          <div className="input-container">
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <input className="login-submit" type="submit" />
        </form>
      </section>
    </div>
  );
}
