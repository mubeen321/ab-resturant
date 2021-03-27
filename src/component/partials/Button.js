import React from 'react'
import Button from '@material-ui/core/Button'
import './style.css'

function Btn({title,height}){
    return (
        <div>
<Button  variant="contained" color="primary" className='my-btn' style={{height:height}}  >
                {title}
            </Button>
                    </div>
    )

}

Btn .defaultProps={
    height:'78px'
}
export default Btn;