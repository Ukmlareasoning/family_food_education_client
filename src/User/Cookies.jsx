import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import CookieIcon from '@mui/icons-material/Cookie'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import InfoIcon from '@mui/icons-material/Info'
import SecurityIcon from '@mui/icons-material/Security'

const cookiesHeroSx = {
    pt: { xs: 8, md: 12 },
    pb: { xs: 6, md: 8 },
    textAlign: 'center',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(227,242,253,0.4) 100%)',
}

const cardSx = {
    p: 4,
    height: '100%',
    borderRadius: '7px',
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
    borderRadius: '7px',
    color: 'white',
    flexShrink: 0,
}

function Cookies() {
    const theme = useTheme()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sections = [
        {
            title: "What are Cookies?",
            icon: <InfoIcon fontSize="large" />,
            color: '#534bae',
            content: "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience by providing personalized content and features."
        },
        {
            title: "Essential Cookies",
            icon: <SecurityIcon fontSize="large" />,
            color: '#4CAF50',
            content: "These cookies are necessary for the website to function properly. They enable basic settings like page navigation and access to secure areas of the website. The website cannot function correctly without these cookies."
        },
        {
            title: "Analytics & Performance",
            icon: <AnalyticsIcon fontSize="large" />,
            color: '#ff9500',
            content: "We use analytics cookies to understand how visitors interact with our website. This information helps us improve the user experience and the overall performance of the service by tracking metrics like page views and traffic sources."
        },
        {
            title: "Managing Preferences",
            icon: <ManageAccountsIcon fontSize="large" />,
            color: '#00bcd4',
            content: "You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can usually modify your setting to decline them if you prefer. However, this may prevent you from taking full advantage of the website."
        }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                {/* Spacer for fixed Header */}
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={cookiesHeroSx}>
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
                            <CookieIcon fontSize="large" />
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 800
                        }}>
                            Cookies <Box component="span" sx={{ color: 'secondary.main' }}>Policy</Box>
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: 'text.secondary',
                            maxWidth: '700px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}>
                            Learn more about how we use cookies to improve your experience on our platform.
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
                        borderRadius: '7px',
                        boxShadow: '0 20px 48px rgba(76, 175, 80, 0.3)',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                            Questions About Our Cookies Policy?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
                            We're committed to being transparent about your data. Contact us if you have any further questions.
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'white' }}>
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

export default Cookies
