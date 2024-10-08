import React ,{useState} from "react";

import { AppBar,IconButton,Toolbar,Drawer,Button,Avatar, useMediaQuery } from "@mui/material";
import { Menu, AccountCircle, Brightness4,Brightness7} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";

import { Sidebar } from '..';
import useStyles from './styles';

const Navbar =() => {
    const [mobileopen, setmobileopen] = useState(false);
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isAuthendicated = true;

    return (
        <>
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                {isMobile && (
                    <IconButton 
                    color="inherit" 
                    edge='start'
                    style={{outline:'none'}}
                    onClick={()=> setmobileopen((prevMobileOpen) => !prevMobileOpen)}
                    className={classes.menuButton}
                    >
                    <Menu/>
                    </IconButton>
                )}
                <IconButton color="inherit" 
                sx={{ml:1}}
                onClick={()=>{}}
                >
                {theme.palette.mode === 'dark'? <Brightness7/>: <Brightness4/>}
                </IconButton>
                {!isMobile && 'Search...'}
                <div>
                    {!isAuthendicated ? (
                        <Button color="inherit" onClick={()=>{}}>
                            Login &nbsp; <AccountCircle/>
                        </Button>
                    ):(
                        <Button
                        color="inherit"
                        component={Link}
                        to= {'/profile/:id'}
                        className={classes.linkButton}
                        onClick={()=> {}}
                        >
                            {!isMobile && <> My Movies &nbsp; </>}
                            <Avatar
                                style={{ width:30, height: 30}}
                                alt = 'Profile'
                                src='C:\Users\soman\Documents\GitHub\Codeonk\flims\public\Profile_avatar_placeholder_large.png'
                            />
                        </Button>
                    )}
                </div>
                {isMobile && 'Search...'}
            </Toolbar>
        </AppBar>

        <div>
            <nav className={classes.drawer} >
                {isMobile ? (
                    <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileopen}
                    onClose={()=> setmobileopen((prevMobileOpen) => !prevMobileOpen)}
                    classes={{paper: classes.drawerPaper}}
                    ModalProps={{ keepMounted : true}}
                    >
                        <Sidebar setmobileopen ={setmobileopen} />
                    </Drawer>
                ):(
                    <Drawer classes={{paper: classes.drawerPaper }} variant="permanent" open>
                        <Sidebar setmobileopen={setmobileopen} />
                    </Drawer>
                )}       
            </nav>
        </div>
        </>       
    );
};

export default Navbar;