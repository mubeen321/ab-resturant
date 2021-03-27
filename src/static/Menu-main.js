import React from 'react';
import { GeneralSetup } from "../pages/GeneralSetup";
import { AdminSetupPage } from "../pages/AdminSetupPage";
import { DepartmentSetupPage } from "../pages/DepartmentSetupPage";
import { SubDepartmentSetupPage } from "../pages/SubDepartmentSetupPage";
import { DeviceSetupPage } from "../pages/DeviceSetupPage";
import { Settings, DesktopMac, Store, AccountBox } from "@material-ui/icons";

export const MenuReal = [
    {
        id:1,
        menuName: 'Admin',
        menuDescription: 'General setups menus',
        path: '/generalSetup',
        component: GeneralSetup,
        exact: true,
        icon :<Settings />,
        submenu: []
    },
    {
        id:2,
        menuName: 'Resource Management',
        menuDescription: 'Device mac id setup menus',
        path: '/device',
        component: DeviceSetupPage,
        exact: true,
        icon: <DesktopMac />,
        submenu: []
    },
    {
        id: 3,
        menuName: 'Store Keeper',
        menuDescription: 'Inventory setup menus',
        path: '/inventory',
        component: DeviceSetupPage,
        exact: true,
        icon: <Store />,
        submenu: []
        
    }
    
];