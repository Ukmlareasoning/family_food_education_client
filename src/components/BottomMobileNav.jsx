import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded'

const BottomMobileNav = () => {
    const [value, setValue] = useState(0)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setValue(0)
        } else if (location.pathname === '/about') {
            setValue(1)
        } else if (location.pathname === '/contact') {
            setValue(2)
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
                            color: '#4F5C80',
                            padding: '12px 0',
                            minWidth: 'auto',
                            transition: 'all 0.3s ease',
                            '&.Mui-selected': {
                                color: '#534bae',
                                '& .MuiBottomNavigationAction-label': {
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    transition: 'all 0.3s ease',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.75rem',
                                    transform: 'translateY(-2px)',
                                    transition: 'all 0.3s ease',
                                },
                            },
                            '&:hover': {
                                color: '#534bae',
                                backgroundColor: 'rgba(83, 75, 174, 0.05)',
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
                        label="About"
                        icon={<StarRoundedIcon />}
                        component={Link}
                        to="/about"
                    />
                    <BottomNavigationAction
                        label="Contact"
                        icon={<ContactMailRoundedIcon />}
                        component={Link}
                        to="/contact"
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default BottomMobileNav
