import React from 'react';
import clsx from 'clsx';
// import {Toolbar,Typography} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { staticMenu } from '../static/Menus';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import ListItemLinkContainer from '../container/ListItemLinkContainer';
import { useStyles } from '../static/MiniDrawerStyles';
// import {MenuReal} from '../static/Menu-main'
import {RecepMenu} from '../static/Menu/recep-menu'
import ProfileDetails from './profileDetails';
function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { openSideBar, handlerSideBar } = props;

// const role=['admin','store-keeper','cheif']
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openSideBar,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handlerSideBar}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: openSideBar,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ color: 'white' }} component={Link} to='/' variant="h6" noWrap>
                        Cogent Health
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
            
                variant="permanent"
                className={ clsx(classes.drawer,{
                    [classes.drawerOpen]: openSideBar,
                    [classes.drawerClose]: !openSideBar,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openSideBar,
                        [classes.drawerClose]: !openSideBar,
                    }),
                }}
                open={openSideBar}
            >
                <div style={{minHeight:'64px',display:'flex',justifyContent:'space-between'}} >
                <h1 style={{color:"black"}}>Logo</h1>

<IconButton onClick={handlerSideBar} >
    {theme.direction === 'rtl' ? <ChevronRightIcon style={{color:'black'}}/> : <ChevronLeftIcon style={{color:'black'}}/>}
</IconButton>
                </div>
                {/* <div className={classes.toolbar}>
               
                </div> */}
                <Divider />
                
            {/* <ProfileDetails profile={{name: "Mubeen chughtai",email:"chughtaimubeen5@gmail.com"}}/> */}
                {/* <nav className={classes.lists}>
                    <List>
                        {staticMenu.map((menu, index) => (
                            <React.Fragment className="child-menu-test-case" key={index}>
                                <ListItemLinkContainer  menuObj={menu} />
                            </React.Fragment>
                        ))}
                    </List>
                </nav> */}


<nav className={classes.lists}>
                    <List>
                        {RecepMenu.map((menu, index) => (
                            <React.Fragment className="child-menu-test-case" key={index}>
                                <ListItemLinkContainer  menuObj={menu}  />
                            </React.Fragment>
                        ))}
                    </List>
                </nav>

                {/* <nav className={classes.lists}>
                    <List>
                        {MenuReal.map((menu, index) => (
                            <React.Fragment className="child-menu-test-case" key={index}>
                                <ListItemLinkContainer  menuObj={menu}  />
                            </React.Fragment>
                        ))}
                    </List>
                </nav> */}
                
                <Divider />

                <Toolbar style={{position:'absolute',bottom:'1px',width:'100%'}} >
                <Typography variant="h6" noWrap>
                        Setting
                    </Typography>
                </Toolbar>
                
            </Drawer>
        </React.Fragment >
    );
}

export default MiniDrawer;
