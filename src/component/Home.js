import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{display:"flex", flexDirection:"column", paddingLeft:"20px"}}>
            <h2>Home</h2>
            <Link to="/artwork/0" style={{marginTop:"10px"}}> artwork0</Link>
            <Link to="/artwork/1" style={{marginTop:"10px"}}> artwork1</Link>
        </div>
      
    )
}

export default Home
