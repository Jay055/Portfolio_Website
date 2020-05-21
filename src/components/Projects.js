import React from "react"
import Title from "./Title"

import Project from "./Project"
import { Link } from "gatsby"


// Get props from index.js 
const Projects = ({projects, title, showLink }) => {
  // console.log(projects)
  return (
    <section className="section projects">
      <Title title ={title} />
      <div className="section-center projects-center">
          {/* Pass props to projects after mapping */}
        {projects.map((project, index)=> {
          return <Project key={project.id} index={index} {...project}  /> 

        })}
      </div>
        
      {
        showLink && <Link to ='/projects' className="btn center-btn">
          Projects
        </Link>
      }
    </section>
  )
}

export default Projects
