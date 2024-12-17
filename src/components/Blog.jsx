import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import "./Blog.css"; // Import the CSS file

const Blog = () => {
  const blogs = [
    {
      title: "Understanding React Hooks",
      brief: "A complete guide to React Hooks and how they can simplify your code.",
      coverImage: img1,
    },
    {
      title: "Building a REST API with Node.js",
      brief: "Learn how to create a RESTful API using Node.js and Express.",
      coverImage: img2,
    },
    {
      title: "Mastering JavaScript Closures",
      brief: "A deep dive into closures and how they work in JavaScript.",
      coverImage: img3,
    },
    {
      title: "CSS Grid vs Flexbox",
      brief: "When to use CSS Grid and when to stick with Flexbox? Let's find out.",
      coverImage: img4,
    },
    {
      title: "Optimizing React Performance",
      brief: "Best practices to ensure your React apps run efficiently and smoothly.",
      coverImage: img5,
    },
  ];

  return (
    <div className="blog-container">
      <h2>My Recent Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.coverImage} alt={blog.title} />
            <div className="blog-card-content">
              <h3>{blog.title}</h3>
              <p>{blog.brief}</p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
