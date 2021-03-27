import React from 'react';
import Heading from '../../../component/partials/Heading'
import Para from '../../../component/partials/Para';
import Input from '../../../component/partials/Input';
import Btn from '../../../component/partials/Button'
import '../../style.css';

export class SignIn extends React.Component {
    render() {
      return (<div className='signIn'>


<br/>
<br/>
<br/>
<br/>
<div className='signIn-div'>
  <div style={{textAlign:'center'}}>
<Heading  title="Sign In" color='white' />
</div>
{/* <button className="btn btn-primary mt-5">Button</button> */}
<div style={{textAlign:'center'}}>
<Para title="Please enter your email to continue" color='white' />
</div>
<div className="p-left mt-5">
<Para title="Enter Email" color="white"  /> 
</div>
<div className="mt-3"></div>
<Input title="Email" />
<div className="mt-3"></div>
<div className="p-left ">
<Para title="Enter Password" color="white"  /> 
</div>
<Input title="********" type="password" />

<div className="mt-5"></div>

<Btn title="Sign In"/>
</div>

</div>
      )
    }
  }

//   export default SignIn;