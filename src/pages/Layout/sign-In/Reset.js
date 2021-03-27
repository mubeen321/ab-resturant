import React from 'react';
import Heading from '../../../component/partials/Heading'
import Para from '../../../component/partials/Para';
import Input from '../../../component/partials/Input';
import Btn from '../../../component/partials/Button'
import '../../style.css';
import invisible from '../../../assets/images/invisible.svg'

export class Reset extends React.Component {
    render() {
      return (<div className='signIn'>


<br/>
<br/>
<br/>
<br/>
<div className='signIn-div'>
  <div style={{textAlign:'center'}}>
<Heading  title="Reset Password" color='white' />
</div>
{/* <button className="btn btn-primary mt-5">Button</button> */}
<div style={{textAlign:'center'}}>
<Para title="Please choose your new password" color='white' />
</div>


<div style={{position:''}}>

<div className="p-left mt-5">
<Para title="New Password" color="white"  /> 
</div>

<div className="mt-3"></div>
<Input title="Email" />

<img src={invisible} className='reset-icon1'/>
{/* <invisible/> */}



<div className="mt-3"></div>
<div className="p-left ">
<Para title="Confrim Password" color="white"  /> 
</div>
<Input title="" type="password" />


<div className="mt-5"></div>

<Btn title="Send Reset Link"/>

</div>

</div>

</div>
      )
    }
  }

//   export default SignIn;