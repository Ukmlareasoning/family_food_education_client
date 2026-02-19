import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import GavelIcon from '@mui/icons-material/Gavel'
import AssignmentIcon from '@mui/icons-material/Assignment'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import BusinessIcon from '@mui/icons-material/Business'

const termsHeroSx = {
    pt: { xs: 8, md: 12 },
    pb: { xs: 6, md: 8 },
    textAlign: 'center',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(227,242,253,0.4) 100%)',
}

const cardSx = {
    p: 4,
    height: '100%',
    borderRadius: 6,
    border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        borderColor: 'secondary.light',
        backgroundColor: '#ffffff',
    },
}

const iconContainerSx = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: '12px',
    color: 'white',
    flexShrink: 0,
}

function Terms() {
    const theme = useTheme()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sections = [
        {
            title: "Agreement to Terms",
            icon: <AssignmentIcon fontSize="large" />,
            color: '#534bae',
            content: "By accessing or using Please Scan, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
        },
        {
            title: "Intellectual Property",
            icon: <BusinessIcon fontSize="large" />,
            color: '#4CAF50',
            content: "The content, original features, and functionality of Please Scan are and will remain the exclusive property of our organization. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent."
        },
        {
            title: "User Obligations",
            icon: <VerifiedUserIcon fontSize="large" />,
            color: '#ff9500',
            content: "You are responsible for your use of the service and for any content you provide. You agree not to engage in any prohibited activities, including unauthorized access, interfering with the service's performance, or using the service for any illegal purposes."
        },
        {
            title: "Termination",
            icon: <GavelIcon fontSize="large" />,
            color: '#00bcd4',
            content: "We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive."
        }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                {/* Spacer for fixed Header */}
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={termsHeroSx}>
                    <Container maxWidth="md">
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 1.5,
                            bgcolor: 'primary.light',
                            borderRadius: '50%',
                            mb: 2,
                            color: 'white'
                        }}>
                            <GavelIcon fontSize="large" />
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 800
                        }}>
                            Terms & <Box component="span" sx={{ color: 'secondary.main' }}>Conditions</Box>
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: 'text.secondary',
                            maxWidth: '700px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}>
                            Please read these terms carefully before using our services.
                        </Typography>
                    </Container>
                </Box>

                {/* Card Content Section */}
                <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, flex: 1 }}>
                    <Grid container spacing={4}>
                        {sections.map((section, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper sx={cardSx} elevation={0}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                                        <Box sx={{ ...iconContainerSx, bgcolor: section.color }}>
                                            {section.icon}
                                        </Box>
                                        <Typography variant="h5" sx={{
                                            color: 'primary.main',
                                            fontWeight: 800,
                                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                                            lineHeight: 1.2
                                        }}>
                                            {section.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontSize: '1.05rem'
                                    }}>
                                        {section.content}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{
                        mt: 10,
                        p: { xs: 4, md: 6 },
                        background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
                        borderRadius: 8,
                        boxShadow: '0 20px 48px rgba(76, 175, 80, 0.3)',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                            Need Clarification on Our Terms?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
                            We aim to be as transparent as possible. If you have any questions, our support team is ready to help.
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.7 }}>
                            Last updated: February 19, 2026 • support@pleasescan.com
                        </Typography>
                    </Box>
                </Container>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default Terms
