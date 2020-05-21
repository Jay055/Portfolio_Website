import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid


// Destructure data from graphQL
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {


  const { info, stack, title, image } = nodes[0]

  return (
    <Layout>
      {/* <SEO title="About Me" description="about webdev" /> */}
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section> 
    </Layout>
  )
}




// 


export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        info
        stack {
          id
          title
        }
        title
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

// Create a single type collection in STrapi  for the about 

export default About
