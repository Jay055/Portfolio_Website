import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"



//Query Image.  Get query through localhost:8000/__graphql 
const query = graphql`
    {
      file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    }
    `


    
const Hero = () => {
  // Get Static Image
  const data = useStaticQuery(query);
  // console.log(data) 
      // Destructure Image from query 
  const {file: {childImageSharp: {fluid}, }, } = useStaticQuery(query)

  return (
    //  {/* Background color  */}
  <header className="hero">
     
    <div className="section-center hero-center">
      <article className="hero-info">
      <div>
        <div className="underline"></div>
          <h1>I'm Uche </h1>
          <h4> Web Developer </h4>
          <Link to ="/contact" className="btn">
            contact me 
          </Link>
          <SocialLinks /> 
        </div>
        </article>
      
      <Image fluid={fluid} className="hero-img" />

    </div>
  </header>
  
  )}

export default Hero
