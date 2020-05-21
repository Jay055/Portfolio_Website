import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
// Used for markdown field (make the blog more visible)
import ReactMarkdown from "react-markdown"
/// set it up as a component and pass the src 


// Destructure from queryQL 
const ComponentName = ({data}) => {
  console.log(data);
  const {content} = data.blog
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
              {/* React Markdown inherits the css properties, without markdown the page data would be raw  */}
            <ReactMarkdown source={content} /> 
            
        </article>
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      </div>
    </section>

  </Layout>
}

// Add Cloudinary to Strapi 



  // Get specific blog with unique slog
export const query = graphql`
  query GetSingleBlog($slog: String) {
    blog: strapiBlogs(slog: { eq: $slog }) {
      content

    }
  }
`

export default ComponentName
