import React from 'react'
// import Button from '@material-ui/core/Button'
import './style.css'

function Heading({title,color,fontSize}){
    return (
        <div>

<h1 style={{color:color}} className='heading-sign'>{title}</h1>

</div>
    )

}   
export default Heading;