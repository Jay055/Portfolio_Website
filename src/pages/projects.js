import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid


// Destructure data from GraphQl query
const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="all projects" /> 
    </section>
  </Layout> 
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        stack {
          id
          title
        }
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`



export default ProjectsPage
