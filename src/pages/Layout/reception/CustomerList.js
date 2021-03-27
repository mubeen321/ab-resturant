import React from 'react'
import { Component } from 'react';
import {checkData} from './data';
import './reception.css'
import Para from '../../../component/partials/Para'
import Heading from '../../../component/partials/Heading'
import Btn from '../../../component/partials/Button'

export const CustomerList=()=>{


    const [modalShow, setModalShow] = React.useState(false);

        const renderPlayer  =(checkData,index)=>{
            return  (
                <tr key={index}>
                    <td>{checkData.id}</td>
                    <td>{checkData.floor}</td>
                    <td>{checkData.noCus}</td>
                    <td>{checkData.tableNo}</td>

                    <td>{checkData.time}</td>
                    <td><Btn title='print' height='40px'/></td>
                    {/* <td>{checkData.tableNo}</td> */}


                </tr>
            )
        }



        return(
            <div className='container'>



<div className='customerList-nav row mt-3 mb-3'>
    <div className='col-9'>
<Para title='Dashboard / New customer / Customer list' color='#D4D2D2' />
</div>

<div className='col-3'>
    <Btn title='Filter By Day'/>
</div>
</div>


{/* <Para title='Customer List'/> */}
<div className='m-4 '>
<Para title='Customer List' color='#707070' fontSize='22px'/>
</div>
<table class="table table-striped">
  <thead className='customer-list-table-head'>
    <tr>
      <th scope="col">Customer Id </th>
      <th scope="col">Floor No.</th>
      <th scope="col">No. of Customer</th>
      <th scope="col">Table No.</th>
      <th scope="col">Time In</th>
      <th scope="col">Print</th>

    </tr>
  </thead>
  <tbody>
      {checkData.map(renderPlayer)}
    {/* <tr>
      <th scope="row"></th>
      <td>{checkData.map(renderPlayer)}</td>
      <td>{checkData.map(renderPlayer)}</td>
      <td>{checkData.map(renderPlayer)}</td>
      <td>{checkData.map(renderPlayer)}</td>
      
    </tr> */}
   
  </tbody>
</table>
                
            </div>
        )
}