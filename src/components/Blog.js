import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

// Destructure props from Blogs.js
const Blog = ({id, title, image, date,category, slog, desc}) => {
  // Send to Unique Page 
  return <Link to={`/blogs/${slog}`} key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid}
      className="blog-img" /> 
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
        </div>
    </article>


  </Link>
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
