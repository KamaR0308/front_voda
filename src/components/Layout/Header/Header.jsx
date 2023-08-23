import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom';
import { useMatchMedia } from '../../../shared/hooks/useMatchMedia';
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import { AdminPanelSettingsOutlined, HomeOutlined, PersonOutline } from '@mui/icons-material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
const Header = () => {

    const { isMobile, isTablet, isDesktop } = useMatchMedia()
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { pathname } = useLocation()

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar color='success'>
                <Toolbar className={styles.toolbar}>
                    <Typography variant='h6' className={styles.title}>
                        Система учета воды
                    </Typography>
                    {
                        (isTablet || isMobile)
                        &&
                        <MenuIcon
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={handleDrawerOpen}
                        />}
                    {
                        isDesktop
                        &&
                        <Box className={styles.box}>
                            <Box className={styles.stack}>
                                {
                                    (pathname == '/admin' || pathname == '/dashboard' || pathname.match('/detail'))
                                        ?
                                        <div>
                                            <Link to='/dashboard'>
                                                Главная
                                            </Link>
                                            <Link to='/admin'>
                                                Aдмин
                                            </Link>
                                        </div>
                                        :
                                        <div>
                                            <Link to='/register'>
                                                Регистрация
                                            </Link>
                                        </div>
                                }
                            </Box>
                            {
                                (pathname == '/admin' || pathname == '/dashboard'  || pathname.match('/detail'))
                                &&
                                <Avatar sx={{ ml: 2 }} />
                            }
                        </Box>
                    }
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    style: {
                        width: '50%',
                    },
                }}
            >
                {
                    localStorage.getItem('auth')
                        ?
                        <List>
                            <ListItem button>
                                <ClearOutlinedIcon color='success' onClick={handleDrawerClose} />
                            </ListItem>
                            <Divider />
                            <ListItem button component={Link} to='/'>
                                <HomeOutlined color='success' sx={{ mr: 1.5 }} />
                                <ListItemText primary='Главная' />
                            </ListItem>
                            <ListItem button component={Link} to='/admin'>
                                <AdminPanelSettingsOutlined color='success' sx={{ mr: 1.5 }} />
                                <ListItemText primary='Админ' />
                            </ListItem>
                            <ListItem >
                                <PersonOutline color='success' sx={{ mr: 1.5 }} />
                                <ListItemText primary='Профиль' />
                            </ListItem>
                            <Divider />
                        </List>
                        :
                        <List>
                            <ListItem button>
                                <ClearOutlinedIcon color='success' onClick={handleDrawerClose} />
                            </ListItem>
                            <Divider />
                            <Typography sx={{ml: 1.5, mt: 2}}>
                                Войдите, чтобы увидеть админ панель!
                            </Typography>
                        </List>
                }
            </Drawer>
        </>
    );
};

export default Header;