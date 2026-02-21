import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'

const BottomMobileNav = () => {
    const [value, setValue] = useState(0)
    const location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setValue(0)
                break
            case '/features':
                setValue(1)
                break
            case '/login':
                setValue(2)
                break
            default:
                setValue(0)
        }
    }, [location.pathname])

    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1200,
                    borderRadius: '20px 20px 0 0',
                    boxShadow: '0 -8px 24px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                }}
                elevation={0}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    sx={{
                        height: 70,
                        background: 'transparent',
                        '& .MuiBottomNavigationAction-root': {
                            color: '#1a237e',
                            padding: '8px 12px',
                            minWidth: 'auto',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            margin: '6px auto',
                            borderRadius: '12px',
                            '&.Mui-selected': {
                                color: '#534bae',
                                backgroundColor: 'rgba(83, 75, 174, 0.15)',
                                boxShadow: '0 0 0 2px rgba(83, 75, 174, 0.3), 0 4px 12px rgba(83, 75, 174, 0.15)',
                                '& .MuiBottomNavigationAction-label': {
                                    fontWeight: 800,
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s ease',
                                    color: '#534bae',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.85rem',
                                    transform: 'translateY(-4px) scale(1.1)',
                                    transition: 'all 0.3s ease',
                                    filter: 'drop-shadow(0 2px 8px rgba(83, 75, 174, 0.3))',
                                },
                            },
                            '&:hover': {
                                color: '#534bae',
                                backgroundColor: 'rgba(83, 75, 174, 0.08)',
                                boxShadow: '0 0 0 1px rgba(83, 75, 174, 0.2)',
                            },
                        },
                    }}
                >
                    <BottomNavigationAction
                        label="Home"
                        icon={<HomeRoundedIcon />}
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction
                        label="Features"
                        icon={<WidgetsRoundedIcon />}
                        component={Link}
                        to="/features"
                    />
                    <BottomNavigationAction
                        label="Login"
                        icon={<PersonRoundedIcon />}
                        component={Link}
                        to="/login"
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default BottomMobileNav
