import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid


//  Get Data from query 
const Blog = ({data:{allStrapiBlogs: {nodes:blogs}}}) => {
  console.log(blogs)
  return <Layout>
    <section className="blog-page">
          {/* pass props to Blogs component */}
        <Blogs blogs={blogs} title="blog" />

    </section>
     </Layout>
}



// Query without content

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slog
        title
        date(formatString: "MMMM Do, YYYY")
        desc
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`

export default Blog
