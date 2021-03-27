import React from 'react';
import { GeneralSetup } from "../../pages/GeneralSetup";
import { AdminSetupPage } from "../../pages/AdminSetupPage";
import { DepartmentSetupPage } from "../../pages/DepartmentSetupPage";
import { SubDepartmentSetupPage } from "../../pages/SubDepartmentSetupPage";
import { DeviceSetupPage } from "../../pages/DeviceSetupPage";
import { Settings, DesktopMac, Store, AccountBox } from "@material-ui/icons";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddCustomer from '../../pages/Layout/reception/addCustomer'
import {CustomerList} from '../../pages/Layout/reception/CustomerList'
import {Dinning} from '../../pages/Layout/reception/dinningArea'

export const RecepMenu = [
    {
        id:1,
        menuName: 'New Customer',
        menuDescription: 'General setups menus',
        path: '/addCustomer',
        component: AddCustomer,
        exact: true,
        icon :<AddCircleOutlineIcon />,
        submenu: [
            {
                id:3,
                menuName: 'Customer List',
                menuDescription: 'To Setup admins',
                path: '/addCustomer/customerList',
                component: CustomerList,
                icon: <AccountBox />,
            },
            {
                id: 4,
                menuName: 'Add customer',
                menuDescription: 'To Setup departments',
                path: '/addCustomer/addCustomer',
                component: AddCustomer,
                icon: <AccountBox />
            }
        ]
    },
    {
        id:2,
        menuName: 'Dinning Area',
        menuDescription: 'Device mac id setup menus',
        path: '/reception',
        component: Dinning,
        exact: true,
        icon: <DesktopMac />,
        submenu: []
    },
    {
        id: 5,
        menuName: 'Attendance',
        menuDescription: 'Inventory setup menus',
        path: '/attendence',
        component: DeviceSetupPage,
        exact: true,
        icon: <Store />,
        submenu: []
        
    }
    ];