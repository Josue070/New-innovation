import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import "./banner.css"

//banner de inicio en la vista del homes
function banner() {
  return (
    <div className='banner'>
        <div className='cont_birret'>
            <SchoolIcon className='birret'/>
        </div>
        <br></br>
        <h1>Descubre el futuro del comercio </h1>
        <br></br>
        <h2>con New Innovations</h2>
        
    </div>
  )
}

export default banner