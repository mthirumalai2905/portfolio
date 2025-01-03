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
      link: "https://tthirruu.hashnode.dev/vector-databases", // Add the link here
    },
    {
      title: "Scaling Whatsapp",
      brief: "Ever wondered how your WhatsApp messages reach instantly, no matter where you are? Scaling chat systems ensures every message gets through, even with...",
      coverImage: img2,
      link: "https://tthirruu.hashnode.dev/scaling-whatsapp", // Add the link here
    },
    {
      title: "Scaling Databases",
      brief: "Clustering Clustering involves connecting multiple servers to work together as a single unit to improve database performance, scalability, and fault...",
      coverImage: img3,
      link: "https://tthirruu.hashnode.dev/scaling-databases", // Add the link here
    },
    {
      title: "Why do Databases use B Trees",
      brief: "When we talk about storage, RAM and Hard Disks come into the picture. Let’s understand their functions and how they differ from each...",
      coverImage: img4,
      link: "https://tthirruu.hashnode.dev/why-do-databases-use-b-trees", // Add the link here
    },
    {
      title: "System Design of Google Docs",
      brief: "Let’s do a system design of collaborative Editing and scale them. Flowchart, Functional Requirements, Tools for Collaborative Editing, Non-Functional...",
      coverImage: img5,
      link: "https://tthirruu.hashnode.dev/system-design-of-google-docs", // Add the link here
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
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
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
