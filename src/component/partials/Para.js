import React from 'react'
// import Button from '@material-ui/core/Button'
import './style.css'

function Para({title,color,textAlign,fontSize}){
    return (
        <div>

<p style={{color:color,textAlign:textAlign,fontSize:fontSize}} className='para-sign'>{title}</p>

</div>
    )


}
Para.defauftProps = {
    color:"black",
// textAlign:'center'
    fontSize:'19px'
}
export default Para;