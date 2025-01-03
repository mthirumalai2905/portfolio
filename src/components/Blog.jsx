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
      title: "Vector Databases",
      brief: "A vector database is a type of database optimized for storing, indexing, and querying high-dimensional vectors. these vectors often represent data in...",
      coverImage: img1,
    },
    {
      title: "Scaling Whatsapp",
      brief: "Ever wondered how your WhatsApp messages reach instantly, no matter where you are? Scaling chat systems ensures every message gets through, even with...",
      coverImage: img2,
    },
    {
      title: "Scaling Databases",
      brief: "Clustering Clustering involves connecting multiple servers to work together as a single unit to imprve database performance, scalability, and fault...",
      coverImage: img3,
    },
    {
      title: "Why do Databases use B Trees",
      brief: "when we talk about storage RAM and HardDisks come to the picture Let’s understand there fucntions and how they differ from each...",
      coverImage: img4,
    },
    {
      title: "System Design of Google Docs",
      brief: "Let’s do a system design of collaborative Editing and scale them Flowchart Functional Requirements Tools for Collaborative Editing Non-Functional...",
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
