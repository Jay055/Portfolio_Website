import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"



  // With the query we have access to the nodes of the data
export default ({data}) => {
  // data gives access to nodes 
  // console.log(data);
  const{allStrapiProjects:{nodes:projects}} = data; 


  return (
  <Layout> 
    <Hero />
    <Services />
    <Jobs />
      {/* Pass projects as props  */}
    <Projects projects={projects} title="featured projects"
    showLink />

  </Layout>
  
  )
}
// ...


// Replace scr from the query with fragment ...GatsbyImageSharpFluid
// Get our Projects Query from graphql 
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid

            }
          }
        }
        stack {
          id
          title
        }
        title
        url
      }
    }
  }
`

// export default ComponentName

