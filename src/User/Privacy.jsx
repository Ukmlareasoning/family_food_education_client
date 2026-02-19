import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import InsightsIcon from '@mui/icons-material/Insights'
import ShareIcon from '@mui/icons-material/Share'
import SecurityIcon from '@mui/icons-material/Security'

const privacyHeroSx = {
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

function Privacy() {
    const theme = useTheme()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sections = [
        {
            title: "Information Collection",
            icon: <FingerprintIcon fontSize="large" />,
            color: '#534bae',
            content: "We collect information to provide better services to all our users. This includes information you provide to us, such as your name, email address, and preferences when you create an account or interact with our features. When you use our scanning tool, we may collect data about the items you scan to improve our database and provide personalized nutritional insights."
        },
        {
            title: "Data Usage",
            icon: <InsightsIcon fontSize="large" />,
            color: '#4CAF50',
            content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our users and our website. We also use this information to offer you tailored content, like giving you more relevant nutritional tips through our scanning technology."
        },
        {
            title: "Sharing & Disclosure",
            icon: <ShareIcon fontSize="large" />,
            color: '#ff9500',
            content: "We do not share personal information with companies, organizations, or individuals outside of Please Scan unless one of the following circumstances applies: with your explicit consent, for external processing by trusted partners, or for necessary legal reasons."
        },
        {
            title: "Your Privacy Rights",
            icon: <SecurityIcon fontSize="large" />,
            color: '#00bcd4',
            content: "You have the right to access, update, or delete the information we have on you. Whenever you use our services, we aim to provide you with access to your personal information. If that information is wrong, we strive to give you ways to update it quickly or to delete it."
        }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                {/* Spacer for fixed Header */}
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={privacyHeroSx}>
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
                            <ShieldOutlinedIcon fontSize="large" />
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 800
                        }}>
                            Privacy <Box component="span" sx={{ color: 'secondary.main' }}>Policy</Box>
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: 'text.secondary',
                            maxWidth: '700px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}>
                            Protecting your information is our priority. Dive into the details of our transparent privacy practices.
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
                            Questions About Our Privacy Policy?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
                            We're here to help clarify how we handle your data. Feel free to reach out to our team at any time.
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

export default Privacy
