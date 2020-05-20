import React from "react"
import Title from "./Title"
import services from "../constants/services"



const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" /> 

      <div className="section-center services-center">
          {/* Map through services object  */}
        {services.map((service)=>{
          const {id, icon, title, text} = service 
          return <article key={id} className="service">
            {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>

          </article>
        })}
      </div>




    </section>
  )
}

export default Services

// API WITH STRAPI 
// Use Strapi To Set Up back end 
// Strapi.io 
// npm create strap-app my-project --quick start 
// Set up Admin in local host 
// Content types builder 
// Crate new collection type
// Set up a name with a singular name 
// Make each field required to 

// Create New Component 
// Create new component 
// Go back to the Job's collection and link the component

 // Add Fields 

//<----- ACCESS API DATA --------> 
// To access api data we grant public permissions 
// http://localhost:1337/jobs (where jobs is our content type)
// 