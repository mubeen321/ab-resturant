import React from 'react';
import ProfileDetails from './profileDetails';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { GeneralSetup } from '../pages/GeneralSetup';
import { AdminSetupPage } from '../pages/AdminSetupPage';
import { DepartmentSetupPage } from '../pages/DepartmentSetupPage';
import { SubDepartmentSetupPage } from '../pages/SubDepartmentSetupPage';
import { DeviceSetupPage } from '../pages/DeviceSetupPage';
import { useStyles } from '../static/MiniDrawerStyles';
import clsx from 'clsx';
// import {Reset} from '../pages/Layout/sign-In/Reset'
import SimpleAppBar from './SimpleAppBar';
import {Reset} from '../pages/Layout/sign-In/Reset'
import {Dinning} from '../pages/Layout/reception/dinningArea';
import AddCustomer from '../pages/Layout/reception/addCustomer';
import {CustomerList} from '../pages/Layout/reception/CustomerList';
export const Routing = (props) => {
    const { content, toolbar, contentShift } = useStyles();
    const { openSideBar } = props;

    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            {/* <SimpleAppBar /> */}
            {/* <ProfileDetails /> */}
            {/* <div className={toolbar} /> */}
            <Switch>
                
                <Route exact path='/' component={Home} />
                
                {/* <Route path='/reception' component={Dinning} /> */}
                <Route path='/reception' component={Dinning} />
                {/* <Route path='/addCustomer'  component={AddCustomer}/> */}
                <Route path='/addCustomer' exact component={AddCustomer}/>

                <Route path='/addCustomer/customerList' exact component={CustomerList}/>

                {/* <Route path='/generalSetup' exact component={GeneralSetup} /> */}
                <Route path='/reset' component={Reset} />
                <Route path='/generalSetup/adminSetup' component={AdminSetupPage} />
                <Route path='/generalSetup/department' component={DepartmentSetupPage} />
                <Route path='/generalSetup/sub-department' component={SubDepartmentSetupPage} />
                <Route path='/device' component={DeviceSetupPage} />
            </Switch>
        </main>);
}