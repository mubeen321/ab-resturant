import React from 'react';

import Para from '../../../component/partials/Para'
import Heading from '../../../component/partials/Heading';
import Input from '../../../component/partials/Input'
function AddCustomer(){
    return(
        <div>




{/* Form  */}
            <div className='conatiner add-customer-main'>

{/* form Header */}
<div className='add-customer-head'>
<Para title='Add Customer' fontSize='22px' color='#707070'/>
</div>
<hr/>
{/* Form Content */}

<div className='mb-3'>
<Para title='Customer Id' />
<Input borderRadius='2px' color='black' />
</div>

<div className='row mb-3'>
<div className='col-6'>
    <Para title='No. of Customer' />
    <Input borderRadius='2px' type='number' min="1" max='5' color='black'/>
</div>

<div className='col-6 '>
    <Para title='Table Number'/>
    <Input borderRadius='2px' color='black' type='number' min="1" max='5'/>
</div>

</div>

<div className='row mb-3'>
<div className='col-6'>
    <Para title='Floor'/>
    <Input borderRadius='2px' color='black' type='number' min="1" max='2'/>
</div>

<div className='col-6'>
    <Para title='Time In'/>
    <Input borderRadius='2px' color='black' type='number' min="1" max='300'/>
</div>
</div>


<Para title='description ' className='mb-3'/>
<Input color='black' height="110px" borderRadius='2px'/>

            </div>
        </div>
    )
}

export default AddCustomer;