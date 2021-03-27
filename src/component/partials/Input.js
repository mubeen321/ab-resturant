import React from 'react'
import './style.css'


function Input({title,type,color,img,borderColor,borderRadius,min,max,height}){
    return (
        <div >
<input type={type} min={min} max={max} className="input-bar" placeholder={title} style={{borderColor:borderColor,borderRadius:borderRadius,color:color,height:height}}/>
{/* <img src="../../assets/images/paypal.png" style={{}} /> */}
                    {/* <img src="https://www.irmi.com/articles/expert-commentary/airplanes-accidents-and-risk-management" /> */}
                    </div>
    )

}
Input.defaultProps={
    borderRadius:'13px',
    borderColor:'black',
    type:"text",
    color:'white',
    // img:"../../assets/images/invisible.svg"
}
export default Input;