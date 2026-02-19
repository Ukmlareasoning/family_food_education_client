import React from 'react'
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
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
        p: { xs: 3, md: 4 },
        transition: '0.3s ease-in-out',
    }

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            fontFamily: '"Poppins", sans-serif',
            backgroundColor: 'rgba(248, 250, 252, 0.5)',
            transition: '0.3s',
            '& fieldset': {
                borderColor: 'rgba(0,0,0,0.05)',
            },
            '&:hover fieldset': {
                borderColor: '#4CAF50',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#4CAF50',
                borderWidth: '2px',
            },
            '&.Mui-focused': {
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(76,175,80,0.1)',
            }
        },
        '& .MuiInputLabel-root': {
            fontFamily: '"Poppins", sans-serif',
            '&.Mui-focused': {
                color: '#4CAF50',
            }
        }
    }

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }}>
                    <Container maxWidth="md">
                        <Typography variant="h1" sx={sectionTitleSx}>
                            Contact Us
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                color: '#4F5C80',
                                textAlign: 'center',
                                lineHeight: 1.6,
                                mb: 0,
                                maxWidth: 600,
                                mx: 'auto'
                            }}
                        >
                            Have questions? We'd love to hear from you! Our team is here to help you and your family on your healthy snacking journey.
                        </Typography>
                    </Container>
                </Box>

                <Container maxWidth={false} sx={{ maxWidth: '1400px', pb: 12, position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4}>

                        {/* Contact Form — 12 Columns */}
                        <Grid item xs={12}>
                            <Card sx={{ ...cardSx, width: '100%' }}>
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a237e', mb: 3 }}>
                                        Send us a Message
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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

                                        <Box>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                startIcon={<SendRoundedIcon />}
                                                sx={{
                                                    background: 'linear-gradient(180deg, #66bb6a 0%, #4CAF50 50%, #43a047 100%)',
                                                    color: 'white',
                                                    px: 6,
                                                    py: 2.2,
                                                    borderRadius: '16px',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 700,
                                                    textTransform: 'none',
                                                    border: '2px solid rgba(255,255,255,0.2)',
                                                    boxShadow: '0 8px 24px rgba(76,175,80,0.3)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(180deg, #57a35b 0%, #388e3c 100%)',
                                                        transform: 'translateY(-3px)',
                                                        boxShadow: '0 12px 28px rgba(76,175,80,0.4)',
                                                    },
                                                    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Contact Info — 12 Columns, cards side by side in a row */}
                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' }, // ✅ row on desktop, column on mobile
                                    gap: 3,
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
                                            flex: 1, // ✅ each card takes equal width in the row
                                            transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            '&:hover': {
                                                transform: 'translateY(-8px) scale(1.02)',
                                                borderColor: item.color,
                                                boxShadow: `0 20px 40px ${item.color}22`,
                                                bgcolor: '#ffffff'
                                            },
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <Box
                                                sx={{
                                                    width: 70,
                                                    height: 70,
                                                    borderRadius: '20px',
                                                    bgcolor: item.bg,
                                                    color: item.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: `0 8px 16px ${item.color}33`,
                                                    transition: '0.3s',
                                                    flexShrink: 0,
                                                    '& .MuiSvgIcon-root': { fontSize: 36 }
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a237e', mb: 0.5 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ color: '#546e7a', fontSize: '0.95rem', fontWeight: 500 }}>
                                                    {item.detail}
                                                </Typography>
                                            </Box>
                                        </Box>
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