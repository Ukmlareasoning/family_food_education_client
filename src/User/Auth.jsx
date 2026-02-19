import React, { useState } from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    TextField,
    Tabs,
    Tab,
    IconButton,
    InputAdornment,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'

const cardSx = {
    borderRadius: '16px',
    border: '1px solid rgba(33, 150, 243, 0.1)',
    bgcolor: '#ffffff',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    overflow: 'hidden',
}

const textFieldSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        backgroundColor: '#f8f9fa',
        '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.08)',
        },
        '&:hover fieldset': {
            borderColor: '#4CAF50',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4CAF50',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#4CAF50',
    },
}

const primaryButtonSx = {
    fontFamily: '"Poppins", sans-serif',
    background: 'linear-gradient(180deg, #66bb6a 0%, #4CAF50 50%, #43a047 100%)',
    color: 'white',
    py: 1.5,
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
    '&:hover': {
        background: 'linear-gradient(180deg, #57a35a 0%, #388e3c 100%)',
        boxShadow: '0 6px 18px rgba(76,175,80,0.45)',
    },
}

function Auth() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [tabValue, setTabValue] = useState(0)
    const [showPassword, setShowPassword] = useState(false)

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box sx={{ height: { xs: 70, sm: 80 } }} />

                <Container maxWidth="sm" sx={{ flex: 1, py: { xs: 4, md: 8 }, position: 'relative', zIndex: 1 }}>
                    <Card sx={cardSx}>
                        <Box sx={{ borderBottom: 1, borderColor: 'rgba(0,0,0,0.05)', bgcolor: '#fdfdfd' }}>
                            <Tabs
                                value={tabValue}
                                onChange={handleTabChange}
                                variant="fullWidth"
                                sx={{
                                    '& .MuiTabs-indicator': {
                                        backgroundColor: '#4CAF50',
                                        height: 3,
                                        borderRadius: '3px 3px 0 0',
                                    },
                                    '& .MuiTab-root': {
                                        fontFamily: '"Poppins", sans-serif',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        py: 2.5,
                                        color: '#94a3b8',
                                        textTransform: 'none',
                                        transition: 'all 0.2s ease',
                                        '&.Mui-selected': {
                                            color: '#1a237e',
                                            bgcolor: 'rgba(76, 175, 80, 0.03)',
                                        },
                                        '&:hover': {
                                            color: '#1a237e',
                                            bgcolor: 'rgba(0,0,0,0.02)',
                                        }
                                    },
                                }}
                            >
                                <Tab label="Log In" />
                                <Tab label="Register" />
                            </Tabs>
                        </Box>

                        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
                            <Box sx={{ mb: 4, textAlign: 'center' }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: '"Poppins", sans-serif',
                                        fontWeight: 800,
                                        color: '#1a237e',
                                        mb: 1.5,
                                        fontSize: { xs: '1.75rem', sm: '2rem' }
                                    }}
                                >
                                    {tabValue === 0 ? 'Welcome Back!' : 'Join the Family!'}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#64748b', mb: 0 }}>
                                    {tabValue === 0
                                        ? 'Log in to track your family’s healthy snack journey.'
                                        : 'Start making healthy choices fun for your kids today.'}
                                </Typography>
                            </Box>

                            <form>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    {tabValue === 1 && (
                                        <>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                variant="outlined"
                                                sx={textFieldSx}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                variant="outlined"
                                                sx={textFieldSx}
                                            />
                                        </>
                                    )}
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        type="email"
                                        variant="outlined"
                                        sx={textFieldSx}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        variant="outlined"
                                        sx={textFieldSx}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowPassword} edge="end">
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {tabValue === 1 && (
                                        <TextField
                                            fullWidth
                                            label="Confirm Password"
                                            type={showPassword ? 'text' : 'password'}
                                            variant="outlined"
                                            sx={textFieldSx}
                                        />
                                    )}
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ ...primaryButtonSx, mt: 1 }}
                                    >
                                        {tabValue === 0 ? 'Log In' : 'Create Account'}
                                    </Button>
                                </Box>
                            </form>

                            {tabValue === 0 && (
                                <Box sx={{ mt: 3, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                                        Don't have an account?{' '}
                                        <Box
                                            component="span"
                                            onClick={() => setTabValue(1)}
                                            sx={{
                                                color: '#4CAF50',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                ml: 0.5,
                                                '&:hover': { textDecoration: 'underline' },
                                            }}
                                        >
                                            Sign Up
                                        </Box>
                                    </Typography>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Container>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default Auth
