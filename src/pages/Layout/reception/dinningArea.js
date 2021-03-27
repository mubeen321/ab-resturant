import React from 'react';
import PureBreadcrumbs from '../../../component/Breadcrumb'

import './reception.css';
import { table } from './data'
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Para from '../../../component/partials/Para'
import Btn from '../../../component/partials/Button'
import { BorderColor } from '@material-ui/icons';
import {Link} from 'react-router-dom'
// import {dineData} from '../../../component/partials/dineData';
// import {table} from './data'
// import Btn from '../../../component/partials/Button'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';






export const Dinning = () => {



    return (
    <div>
        <PureBreadcrumbs />
        <h1 style={{textAlign:'center'}}>Dinning Setup page!</h1>
<br/>

{/* <AccountTreeIcon color="primary"/> */}
        <div className='container'>



        {/* <AccountTreeIcon /> */}

            <div className='row'>
                <div className="col-lg-4 ">
                    <p ><u className="dinning-p-line">Floor A</u></p>
                </div>


                <div className="col-lg-4 ">
                    <p><p><u className='dinning-p-line'>occupied 17</u></p></p>
                </div>


                <div className="col-lg-4 ">
                    <p><u className='dinning-p-line'>vacant tables : 05</u></p>
                </div>
            </div>

<br className='m-5'/>




            {/* <dineTable /> */}
            {/* <dineData/> */}
            
            {/* <Popup trigger={<button> Trigger</button>} position="right center"> */}
          <Popup trigger={
            <div className='row' style={{boxShadow:'0px 8px 23px #E899993B'}}>
                {table.map((data) => {

                    return (
                        
                        <div className='col-lg-2' >


                            <div style={{border:'1px solid black',marginBottom:'10px'}}>

                                <nav style={{ float: 'right' }}></nav>
                                <br/>
                                {/* <img src={AccountTreeIcon} alt="" /> */}
                                <AccountTreeIcon color="primary" style={{textAlign:'center',fontSize:'120px'}}/>
                                <div style={{ display: 'flex', justifyContent: 'space-between',padding:'0px' }}>
                                    <p>{data.id}</p>
                                    <p>{data.status}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }


            </div>
          }  className='popup-effect'>
              <div className='customer-popup'>
                  <Para title='Customer List'/>
                  <hr/>
                  <br/>
                  <div className='customer-popup-item'>
                      <Para title='Customer Id' />
                      <Para title='#232323233'/>
                  </div>
                  <div className='customer-popup-item'>
                      <Para title='Floor No.' />
                      <Para title='03'/>
                  </div>
                  <div className='customer-popup-item'>
                      <Para title='Table No.' />
                      <Para title='05'/>
                  </div>
                  <div className='customer-popup-item'>
                      <Para title='Time In' />
                      <Para title='12:10'/>
                  </div>
                  <div className='customer-popup-item'>
                      <Para title='Floor Served By' />
                      <Para title='Imran'/>
                  </div>
                  <div className='customer-popup-item'>
                      <Para title='' />
                      <Btn title='Print' height='30px' />
                  </div>
                  
              </div>
          </Popup>

<hr/>


<div className='row'>
                <div className="col-lg-4 ">
                    <p ><u className="dinning-p-line">Floor B</u></p>
                </div>


                <div className="col-lg-4 ">
                    <p><p><u className='dinning-p-line'>occupied 17</u></p></p>
                </div>


                <div className="col-lg-4 ">
                    <p><u className='dinning-p-line'>vacant tables : 05</u></p>
                </div>
            </div>

<div className='row' style={{boxShadow:'0px 8px 23px #E899993B'}}>
                {table.map((data) => {
// console.log();


                    return (
                        
                        <div className='col-lg-2'>


                            <div style={{border:'1px solid black',marginBottom:'10px'}}>

                                <nav style={{ float: 'right' }}></nav>
                                <br/>
                                {/* <img src={AccountTreeIcon} alt="" /> */}
                                <AccountTreeIcon color="primary" style={{textAlign:'center',fontSize:'120px'}}/>
                                <div style={{ display: 'flex', justifyContent: 'space-between',padding:'0px' }}>
                                    <p>{data.id}</p>

                                    <p>{data.status}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }



            </div>

        </div>



    </div>
    );
}