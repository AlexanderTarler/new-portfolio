"use client";
import React from "react";
import styles from "@/styles/Blog.module.css";

interface BlogPost {
  title: string;
  content: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}

const PlaceholderBlogPost: BlogPost = {
  title: "Placeholder Blog Post",
  content: "This is a placeholder blog post. Replace it with your own content.",
};

const BlogPosts: React.FC<BlogPostsProps> = () => {
  const posts = [PlaceholderBlogPost];

  return (
    <div className={styles.blog}>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
