import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import useBlogPosts from "../../hooks/useBlogPosts";
import "./blogContent.styles.css";

export default function BlogContentPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const contextData = useContext(MyContext);
  const { user } = contextData;
  const blogPosts = useBlogPosts();
  useEffect(() => {
    console.log("user:", user.username);
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:8000/api/blogcontent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([formData]),
    }).then((response) => {
      blogPosts();
    });
  };

  function formatDate(isoString) {
    const date = new Date(isoString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Get the suffix for the day (st, nd, rd, or th)
    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[monthIndex];

    return `${day}${daySuffix} ${monthName} ${year}`;
  }

  return (
    <div>
      <section className="section-container">
        {user.username === "Admin" && (
          <div className="new-article-container">
            <h1 className="new-article-greeting">New Article</h1>
            <form
              className="new-article-form"
              id="new-article"
              onSubmit={onHandleSubmit}
            >
              <input
                type="text"
                placeholder="Title"
                className="new-article-title"
                id="new-article-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <textarea
                className="new-article-textarea"
                name="description"
                value={formData.content}
                onChange={handleInputChange}
                required
              />
              <input
                type="submit"
                value="Submit"
                className="new-article-submit"
                required
              />
            </form>
          </div>
        )}

        {blogPosts.map((blogPost) => (
          <div className="post-container" key={blogPost.title}>
            {user.username === "Admin" ? (
              <div className="article-button-admin-container">
                <button className="post-edit buttons-edit">Edit</button>
                <button className="post-delete buttons-edit">Delete</button>
              </div>
            ) : null}
            <div className="article-container">
              <h2 className="post-title">{blogPost.title}</h2>
              <p className="post-date">{formatDate(blogPost.date)}</p>
              <p className="post-description">{blogPost.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
