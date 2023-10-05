import { useState } from "react";

import "./login.styles.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function onUserSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([formData]),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("yeah");
        } else if (response.status === 401) {
          alert(
            "Are you trying to check if I handled wrong credentials, Egil?"
          );
        } else {
          throw new Error("Something went wrong"); // For other statuses, throw a different error
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
