import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{color: "black", display: "flex",flexDirection:"row",width: "100%",backgroundColor:"black",justifyContent:"space-between"}}>
        <Link to = {"/"}>
        <h1 style={{cursor: "pointer"}}>Kalvium ❤️</h1>
        </Link>
        
        <div style={{display: "flex",flexDirection:"row",justifyContent:"space-evenly",width:"400px"}}>
            <Link to = {"/about"}><h1>About</h1></Link>
            <Link to = {"/contact"}><h1>Contact</h1></Link>
        </div>
    </div>
  )
}

export default Navbar