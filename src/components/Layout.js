import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"



// console.log('woring');
const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Navbar /> 
      {children}
    </>
  )
}

export default Layout
