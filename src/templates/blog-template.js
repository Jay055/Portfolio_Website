import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = () => {
  return <h2>blog post template</h2>
}


  // Get specific blog with unique slog
export const query = graphql`
  query GetSingleBlog($slog: String) {
    blog: strapiBlogs(slog: { eq: $slog }) {
      content

    }
  }
`

export default ComponentName
