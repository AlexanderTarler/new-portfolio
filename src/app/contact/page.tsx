"use client";
import React from "react";
import styles from "@/styles/Contact.module.css";

const BlogPosts: React.FC<any> = () => {
  return (
    <div>
      <form
        id="contactForm"
        className={styles.contactForm}
        action="https://formspree.io/f/mnqenkpe"
        method="POST"
      >
        <h2 className="contact__title">
          Please leave a message if you wish to come in contact with me
        </h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BlogPosts;
