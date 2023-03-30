import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";
const Notfound = () => {
  return (
    <div>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link to="/" class="more-link">
          Home
        </Link>
      </div>
    </div>
  );
};
export default Notfound;
