import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, useTheme, useMediaQuery } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const Contact = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sectionTitleSx = {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 800,
        fontSize: { xs: '2.5rem', md: '3.5rem' },
        background: 'linear-gradient(135deg, #1a237e 0%, #4CAF50 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        mb: 2,
    }

    const cardSx = {
        borderRadius: '7px',
        border: '1px solid rgba(33, 150, 243, 0.1)',
        bgcolor: '#ffffff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        p: { xs: 3, md: 5 },
    }

    const inputSx = {
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
        backgroundColor: '#1a237e',
        color: 'white',
        py: 1.8,
        borderRadius: '12px',
        fontSize: '1.05rem',
        fontWeight: 700,
        textTransform: 'none',
        boxShadow: '0 4px 14px rgba(26, 35, 126, 0.4)',
        '&:hover': {
            backgroundColor: '#0d1642',
            boxShadow: '0 6px 18px rgba(26, 35, 126, 0.45)',
            transform: 'translateY(-2px)',
        },
        transition: 'all 0.2s ease',
    }

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={{ py: { xs: 8, md: 10 }, position: 'relative', zIndex: 1 }}>
                    <Container maxWidth="md">
                        <Typography variant="h1" sx={sectionTitleSx}>
                            Contact Us
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                color: '#000000',
                                textAlign: 'center',
                                lineHeight: 1.6,
                                mb: 0,
                                maxWidth: 600,
                                mx: 'auto',
                                fontFamily: '"Poppins", sans-serif',
                            }}
                        >
                            Have questions? We'd love to hear from you! Our team is here to help you and your family on your healthy snacking journey.
                        </Typography>
                    </Container>
                </Box>

                <Container maxWidth="lg" sx={{ pb: 12, position: 'relative', zIndex: 1, ml: { md: 'auto' }, mr: { md: '0.0%' } }}>
                    <Grid container spacing={4}>

                        {/* Contact Form — 8 Columns on desktop */}
                        <Grid item xs={12} md={8}>
                            <Card sx={cardSx}>
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 800,
                                                color: '#1a237e',
                                                mb: 1.5,
                                                fontFamily: '"Poppins", sans-serif',
                                                fontSize: { xs: '1.75rem', sm: '2.25rem' }
                                            }}
                                        >
                                            Send us a Message
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#000000' }}>
                                            Fill out the form below and we'll get back to you shortly.
                                        </Typography>
                                    </Box>

                                    <form>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                variant="outlined"
                                                sx={inputSx}
                                                placeholder="John Doe"
                                            />

                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                variant="outlined"
                                                sx={inputSx}
                                                placeholder="john@example.com"
                                            />

                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                variant="outlined"
                                                sx={inputSx}
                                                placeholder="How can we help?"
                                            />

                                            <TextField
                                                fullWidth
                                                label="Message"
                                                variant="outlined"
                                                multiline
                                                rows={5}
                                                sx={inputSx}
                                                placeholder="Tell us more about your inquiry..."
                                            />

                                            <Button
                                                variant="contained"
                                                fullWidth
                                                startIcon={<SendRoundedIcon />}
                                                sx={{ ...primaryButtonSx, mt: 1 }}
                                            >
                                                Send Message
                                            </Button>
                                        </Box>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Contact Info — 4 Columns on desktop */}
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column', // ✅ Always column on this side
                                    gap: 3,
                                    height: '100%'
                                }}
                            >
                                {[
                                    {
                                        icon: <EmailRoundedIcon />,
                                        title: 'Email Us',
                                        detail: 'hello@pleasescan.com',
                                        color: '#2196f3',
                                        bg: '#e3f2fd'
                                    },
                                    {
                                        icon: <PhoneRoundedIcon />,
                                        title: 'Call Us',
                                        detail: '+1 (555) 123-4567',
                                        color: '#4CAF50',
                                        bg: '#e8f5e9'
                                    },
                                    {
                                        icon: <LocationOnRoundedIcon />,
                                        title: 'Visit Us',
                                        detail: '123 Wellness Way, Healthy City, HC 12345',
                                        color: '#ff9800',
                                        bg: '#fff3e0'
                                    }
                                ].map((item, idx) => (
                                    <Card
                                        key={idx}
                                        sx={{
                                            ...cardSx,
                                            p: 4, // More padding for vertical look
                                            flex: { md: 1 }, // Take equal space when in sidebar
                                            transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            '&:hover': {
                                                transform: 'translateY(-8px) scale(1.02)',
                                                borderColor: item.color,
                                                boxShadow: `0 20px 40px ${item.color}22`,
                                                bgcolor: '#ffffff'
                                            },
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                borderRadius: '20px',
                                                bgcolor: item.bg,
                                                color: item.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: `0 8px 24px ${item.color}22`,
                                                transition: '0.3s',
                                                mb: 2.5,
                                                '& .MuiSvgIcon-root': { fontSize: 32 }
                                            }}
                                        >
                                            {item.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 800,
                                                color: '#1a237e',
                                                mb: 1,
                                                fontSize: '1.1rem',
                                                fontFamily: '"Poppins", sans-serif'
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#000000',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                fontFamily: '"Poppins", sans-serif',
                                                lineHeight: 1.5
                                            }}
                                        >
                                            {item.detail}
                                        </Typography>
                                    </Card>
                                ))}
                            </Box>
                        </Grid>

                    </Grid>
                </Container>


                <Footer />
                <BottomMobileNav />
                <Box sx={{ display: { xs: 'block', md: 'none' }, height: 80 }} />
            </Box>
        </FoodPatternBackground>
    )
}

export default Contact
