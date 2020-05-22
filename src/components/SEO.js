import React from "react"
// Install Helmet for SEO 
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


// Get Query from graphql
const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`






const SEO = ({title,description}) => {

  const {site} = useStaticQuery(query);
  console.log(site);
  const { siteDesc,  siteTitle, siteUrl,image  } = site.siteMetadata


  return (
  <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}><meta name="description" content={{description} || siteDesc}></meta>
  <meta name="image" content={image}></meta>
  </Helmet>
  // twitter share 

  )}

export default SEO
 