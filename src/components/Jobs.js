import React, {useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


  // Set Up Jobs Query from Strapi API 
const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`


const Jobs = () => {
  // useStaticQuery is a hook that takes a GraphQL query and returns your data
  const data = useStaticQuery(query);
  // console.log(data)
  //Destructure out the arrays into jobs 
  const {allStrapiJobs:{nodes:jobs}} = useStaticQuery(query);

  // Use useStateHook to change the array dynamically 
  const [value, setValue] = useState(0);

  const {company, postion, date, desc} = jobs[value];
  console.log(company, postion, date, desc);
  

  return (
  <section className="section jobs">
    <Title title="Education" /> 
    <div className="jobs-center">
        {/* btn container, map through experience for different buttons */}
      <div className="btn-container">
        {jobs.map((item,index)=> {
          return <button 
          key={item.strapiId} 
          onClick={()=> setValue(index)}
           // Active button styling
          className={`job-btn ${index === value && 'active-btn'}`}> 
          
          {item.company}
          

          </button>
        })}
      </div>
    {/* job info */}
    <article className="job-info">
        <h3>{postion}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map(item=>{
          return (
          <div key={item.id} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              {item.name}
          </div>) 
          })
        }

    </article>
    </div>
    {/* Navigate to About  */}
    <Link to ="/about" className="btn center-btn">
        more info
      </Link>
        
  </section>
  )
}

export default Jobs
