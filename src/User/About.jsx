import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, useMediaQuery } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded'
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded'
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded'

const About = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    // Auto-scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sectionTitleSx = {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 800,
        fontSize: { xs: '1.75rem', md: '2.5rem' },
        color: '#1a237e',
        textAlign: 'center',
        mb: 2,
    }

    const cardSx = {
        borderRadius: '7px',
        border: '1px solid rgba(33, 150, 243, 0.1)',
        bgcolor: '#ffffff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
        height: '100%',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'translateY(-5px)' },
    }

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop',
            bio: 'Sarah is a visionary leader with over a decade of experience in educational technology. She is dedicated to creating platforms that empower families through innovative learning solutions and gamified nutrition education.'
        },
        {
            name: 'Dr. Michael Chen',
            role: 'Chief Nutritionist',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop',
            bio: 'Dr. Michael Chen is a renowned registered dietitian specializing in pediatric nutrition and wellness. He brings a wealth of scientific knowledge to ensure our app provides accurate and actionable health advice for kids.'
        },
        {
            name: 'Emma Davis',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop',
            bio: 'Emma is our Lead Developer, passionate about building engaging and accessible digital experiences. With a background in full-stack development, she ensures our platform is robust, safe, and fun for all users.'
        }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
                    <Container maxWidth="md">
                        <Typography variant="h1" sx={sectionTitleSx}>
                            About Us
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                color: '#000000',
                                textAlign: 'center',
                                lineHeight: 1.6,
                                mb: 6,
                            }}
                        >
                            We're on a mission to make healthy snacking fun, educational, and rewarding for families everywhere.
                            Our app combines nutrition science with gamification to empower the next generation of healthy eaters.
                        </Typography>
                    </Container>
                </Box>

                {/* Mission & Vision */}
                <Container maxWidth="lg" sx={{ pb: 8, position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card sx={cardSx}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        <FavoriteRoundedIcon sx={{ fontSize: 40, color: '#ff6b35' }} />
                                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a237e' }}>Our Mission</Typography>
                                    </Box>
                                    <Typography sx={{ color: '#000000', lineHeight: 1.7 }}>
                                        To bridge the gap between nutrition data and family fun. We believe that understanding what we eat
                                        shouldn't be a chore, but an exciting journey of discovery. By scanning snacks and earning points,
                                        kids learn lifelong healthy habits through play.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={cardSx}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        <EmojiObjectsRoundedIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
                                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#1a237e' }}>Our Vision</Typography>
                                    </Box>
                                    <Typography sx={{ color: '#000000', lineHeight: 1.7 }}>
                                        A world where every child grows up with the knowledge and confidence to make healthy choices.
                                        We're building the go-to platform for family food education, powered by community, technology,
                                        and a shared love for wellness.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

                {/* Core Values */}
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.7)', py: 10, position: 'relative', zIndex: 1, borderY: '1px solid rgba(33, 150, 243, 0.1)' }}>
                    <Container maxWidth="lg">
                        <Typography variant="h2" sx={sectionTitleSx}>
                            Our Core Values
                        </Typography>
                        <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
                            {[
                                { title: 'Education First', icon: <SchoolRoundedIcon sx={{ fontSize: 45, color: '#2196f3' }} />, desc: 'We prioritize learning outcomes in every feature we build.' },
                                { title: 'Family Safe', icon: <HealthAndSafetyRoundedIcon sx={{ fontSize: 45, color: '#4CAF50' }} />, desc: 'Privacy and age-appropriate content are at our heart.' },
                                { title: 'Fun & Engaging', icon: <CelebrationRoundedIcon sx={{ fontSize: 45, color: '#ff9800' }} />, desc: 'Because learning is better when you\'re having a blast.' },
                                { title: 'Community Driven', icon: <VolunteerActivismRoundedIcon sx={{ fontSize: 45, color: '#e91e63' }} />, desc: 'We grow alongside the families who use our app.' },
                            ].map((value, idx) => (
                                <Grid item xs={12} sm={6} md={3} key={idx}>
                                    <Box sx={{ textAlign: 'center', p: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                                            <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.9)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                                {value.icon}
                                            </Box>
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a237e', mb: 1 }}>{value.title}</Typography>
                                        <Typography sx={{ fontSize: '0.95rem', color: '#000000', lineHeight: 1.6 }}>{value.desc}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Team Section */}
                <Container maxWidth="lg" sx={{ py: 10, position: 'relative', zIndex: 1 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <GroupsRoundedIcon sx={{ fontSize: 60, color: '#1a237e', mb: 2 }} />
                        <Typography variant="h2" sx={sectionTitleSx}>
                            Meet the Team
                        </Typography>
                        <Typography sx={{ color: '#000000', maxWidth: 650, mx: 'auto', fontSize: '1.1rem' }}>
                            We are a passionate team of parents, educators, and developers dedicated to improving family wellness through technology.
                        </Typography>
                    </Box>
                    <Grid container spacing={2} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Box sx={{ textAlign: 'center', height: '100%' }}>
                                    <Box
                                        component="img"
                                        src={member.image}
                                        alt={member.name}
                                        sx={{
                                            width: { xs: 80, sm: 120, md: 150 },
                                            height: { xs: 80, sm: 120, md: 150 },
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            mx: 'auto',
                                            mb: 2,
                                            border: '4px solid white',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            transition: '0.3s',
                                            '&:hover': { transform: 'rotate(5deg) scale(1.05)' }
                                        }}
                                    />
                                    <Typography variant="h6" sx={{
                                        fontWeight: 800,
                                        color: '#1a237e',
                                        mb: 0.5,
                                        fontSize: { xs: '0.9rem', sm: '1.25rem' }
                                    }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{
                                        fontWeight: 700,
                                        color: '#3949ab',
                                        mb: 1.5,
                                        textTransform: 'uppercase',
                                        letterSpacing: 1,
                                        fontSize: { xs: '0.6rem', sm: '0.8rem' }
                                    }}>
                                        {member.role}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xs: '0.7rem', sm: '0.9rem' },
                                        color: '#000000',
                                        px: 1,
                                        maxWidth: 280,
                                        mx: 'auto',
                                        lineHeight: 1.6,
                                        textAlign: 'left'
                                    }}>
                                        {member.bio}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Footer />
                <BottomMobileNav />
                <Box sx={{ display: { xs: 'block', md: 'none' }, height: 80 }} />
            </Box>
        </FoodPatternBackground>
    )
}

export default About
