import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../static/MiniDrawerStyles';
import clsx from 'clsx';
import ProfileDetails from './profileDetails';

function AppBarComponent() {
    const { appBar, appBarShift, menuButton, hide } = useStyles();

    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(appBar, {
                    [appBarShift]: open,
                })}
            >   
            <ProfileDetails />
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(menuButton, {
                            [hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>



                    {/* <div className={classes.toolbar}>
                    <IconButton onClick={handlerSideBar}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div> */}
                
                    <Typography variant="h6" noWrap>
                        Cogent Health
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default AppBarComponent;