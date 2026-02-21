import React, { useEffect } from 'react'
import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme, useMediaQuery, Paper } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import ExploreIcon from '@mui/icons-material/Explore'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import SearchIcon from '@mui/icons-material/Search'
import GamepadIcon from '@mui/icons-material/Gamepad'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const sectionTitleSx = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 800,
    fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2.2rem' },
    color: '#1a237e',
    textAlign: 'center',
    mb: 2,
    lineHeight: 1.2,
}

const sectionSubtitleSx = {
    fontFamily: '"Poppins", sans-serif',
    fontSize: { xs: '0.85rem', md: '1.1rem' },
    fontWeight: 400,
    color: '#000000',
    textAlign: 'center',
    mb: 4,
    maxWidth: '800px',
    mx: 'auto',
    lineHeight: 1.6,
    opacity: 0.85
}

const gameCardSx = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '7px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(26, 35, 126, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: '0 20px 40px rgba(26, 35, 126, 0.12)',
        '& .card-icon-box': {
            transform: 'scale(1.1) rotate(5deg)',
        }
    }
}

function Features() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const games = [
        {
            title: "Build a Balanced Plate",
            subtitle: "The Foundation Game",
            description: "Teach kids the art of balance. Choose from 🟢 Fruits & Veg, proteins, and drinks to create a meal that makes the tummy happy.",
            icon: <RestaurantIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
            color: '#4CAF50',
            bg: '#edf7ed',
            rules: ["At least 1 fruit or veg", "Max 1 yellow item", "Reds must be paired with green"]
        },
        {
            title: "Green / Yellow / Red Sorting",
            subtitle: "Decision Skills",
            description: "Categorize foods into Anytime (🟢), Sometimes (🟡), and Rare Treat (🔴). Build decision-making skills without the pressure of a timer.",
            icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
            color: '#ff9800',
            bg: '#fff3e0',
            rules: ["Decision over memorization", "Positive reinforcement only", "No punishment for errors"]
        },
        {
            title: "Smart Swap Challenge",
            subtitle: "Real-World Skills",
            description: "Learn how to make better choices in the moment. Swap a soda for water or crisps for popcorn to see the immediate 'better choice' impact.",
            icon: <SwapHorizIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
            color: '#2196f3',
            bg: '#e3f2fd',
            rules: ["Teaches harm reduction", "Focus on flexibility", "Rewards for 'better' and 'best'"]
        },
        {
            title: "Fruit & Food Explorer",
            subtitle: "Knowledge & Curiosity",
            description: "Interact with fun food cards to learn body-based facts. No chemistry or confusing numbers—just pure, bite-sized knowledge.",
            icon: <ExploreIcon sx={{ fontSize: 40, color: '#ab47bc' }} />,
            color: '#ab47bc',
            bg: '#f3e5f5',
            rules: ["Body-based explanations", "Fun animations", "Unlockable stickers & badges"]
        },
        {
            title: "Weekly Family Challenges",
            subtitle: "Retention & Coaching",
            description: "The heart of your healthy journey. Set weekly goals as a family, track progress, and earn rewards for trying new things.",
            icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#fbc02d' }} />,
            color: '#fbc02d',
            bg: '#fff9c4',
            rules: ["Try new fruit colors", "Build green snacks", "Collective family rewards"]
        }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={{
                    py: { xs: 4, md: 6 },
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {/* Floating elements (Subtle) */}
                    <Box sx={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(26, 35, 126, 0.03)',
                        top: '-100px',
                        left: '-100px',
                        animation: 'float 20s infinite linear',
                        zIndex: 0
                    }} />
                    <Box sx={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'rgba(102, 187, 106, 0.03)',
                        bottom: '-50px',
                        right: '-50px',
                        animation: 'float 15s infinite linear reverse',
                        zIndex: 0
                    }} />

                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                letterSpacing: 4,
                                fontWeight: 800,
                                color: '#4CAF50',
                                display: 'block',
                                mb: 2,
                                animation: 'fadeInDown 0.8s ease-out'
                            }}
                        >
                            BEYOND SCANNING
                        </Typography>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3.5rem' },
                            fontWeight: 900,
                            mb: 2,
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: 1.2,
                            color: '#1a237e',
                            animation: 'fadeInUp 1s ease-out'
                        }}>
                            Interactive <Box component="span" sx={{ color: '#66bb6a' }}>Learning</Box> System
                        </Typography>
                        <Typography variant="h6" sx={{
                            maxWidth: '750px',
                            mx: 'auto',
                            mb: 2,
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', md: '1.25rem' },
                            color: '#000000',
                            opacity: 0.8,
                            animation: 'fadeInUp 1s ease-out 0.2s both'
                        }}>
                            Play, learn, and grow together. Our doctor-backed game system focuses on healthy thinking and positive reinforcement—never shame.
                        </Typography>
                        <Typography variant="body2" sx={{
                            maxWidth: '700px',
                            mx: 'auto',
                            mb: 4,
                            fontWeight: 600,
                            lineHeight: 1.5,
                            fontSize: { xs: '0.8rem', md: '0.95rem' },
                            color: '#1a237e',
                            animation: 'fadeInUp 1s ease-out 0.25s both'
                        }}>
                            For live features, games, and full experience—download our app on Android (Google Play Store) and iOS (Apple App Store).
                        </Typography>
                        <Box sx={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: '#ff9500',
                                    color: 'white',
                                    px: { xs: 3, md: 8 },
                                    py: { xs: 1.5, md: 2.2 },
                                    borderRadius: '7px',
                                    fontSize: { xs: '0.95rem', md: '1.15rem' },
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    boxShadow: '0 10px 30px rgba(255, 149, 0, 0.4)',
                                    '&:hover': {
                                        bgcolor: '#e68600',
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 15px 40px rgba(255, 149, 0, 0.5)',
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Start Exploring
                            </Button>
                        </Box>
                    </Container>

                    {/* Simple Global CSS for animations */}
                    <style>{`
                        @keyframes float {
                            0% { transform: translate(0, 0) rotate(0deg); }
                            50% { transform: translate(20px, 20px) rotate(180deg); }
                            100% { transform: translate(0, 0) rotate(360deg); }
                        }
                        @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(30px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes fadeInDown {
                            from { opacity: 0; transform: translateY(-30px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>
                </Box>

                {/* Game Categories Section */}
                <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 4, md: 6 } }}>
                    <Box sx={{ mb: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                            <GamepadIcon sx={{ fontSize: { xs: 24, md: 32 }, color: '#4CAF50' }} />
                            <Typography sx={{ ...sectionTitleSx, mb: 0 }}>Game Categories</Typography>
                            <GamepadIcon sx={{ fontSize: { xs: 24, md: 32 }, color: '#4CAF50' }} />
                        </Box>
                        <Typography sx={sectionSubtitleSx}>
                            Designed to teach kids <Box component="span" sx={{ fontWeight: 700, color: '#1a237e' }}>how to choose food</Box>, not just what to avoid. Our games follow strict educational principles: no timers, no punishments, and positive reinforcement only. To play these games and use all features, download the app from Google Play (Android) or the App Store (iOS).
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {games.map((game, index) => (
                            <Grid item xs={12} sx={{ width: '100%', boxSizing: 'border-box' }} key={game.title}>
                                <Card sx={gameCardSx}>
                                    <CardContent sx={{ p: { xs: 3, md: 4, lg: 6 }, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                                            <Box>
                                                <Typography variant="overline" sx={{ color: game.color, fontWeight: 700, display: 'block', mb: 1 }}>
                                                    {game.subtitle}
                                                </Typography>
                                                <Typography variant="h5" sx={{
                                                    fontWeight: 900,
                                                    color: '#1a237e',
                                                    lineHeight: 1.2,
                                                    fontSize: { xs: '1.1rem', md: '1.5rem' }
                                                }}>
                                                    {game.title}
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                padding: '12px',
                                                borderRadius: '7px',
                                                background: game.bg,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            }} className="card-icon-box">
                                                {game.icon}
                                            </Box>
                                        </Box>
                                        <Typography variant="body1" sx={{
                                            color: '#000000',
                                            mb: 3,
                                            lineHeight: 1.6,
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            opacity: 0.9,
                                            wordBreak: 'break-word',
                                            overflowWrap: 'break-word',
                                            hyphens: 'auto'
                                        }}>
                                            {game.description}
                                        </Typography>

                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1a237e', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <StarRoundedIcon sx={{ fontSize: { xs: 16, md: 18 }, color: '#ffc107' }} /> Key Learnings:
                                        </Typography>
                                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                            {game.rules.map((rule) => (
                                                <Typography component="li" variant="body2" key={rule} sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1.5,
                                                    mb: 1,
                                                    color: '#000000'
                                                }}>
                                                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: game.color }} />
                                                    {rule}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Reward System & Final CTA Row */}
                <Box sx={{ bgcolor: 'rgba(26, 35, 126, 0.02)', py: { xs: 4, md: 6 } }}>
                    <Container maxWidth="lg">
                        {/* Intro / Header for this bottom section */}
                        <Box sx={{ mb: 6, textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                                <TrendingUpIcon sx={{ fontSize: { xs: 24, md: 32 }, color: '#1a237e' }} />
                                <Typography sx={{ ...sectionTitleSx, mb: 0 }}>Beyond the Game</Typography>
                                <TrendingUpIcon sx={{ fontSize: { xs: 24, md: 32 }, color: '#1a237e' }} />
                            </Box>
                            <Typography sx={sectionSubtitleSx}>
                                We reward choices, learning, and trying again. Get real insights into how your child is learning with our integrated dashboard. Download the app from Google Play or the App Store to access the full parent dashboard and live features.
                            </Typography>
                        </Box>

                        <Grid container spacing={4} alignItems="stretch">
                            {/* Column 1: Parent Dashboard */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    p: { xs: 4, md: 6 },
                                    background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                                    borderRadius: '7px',
                                    color: 'white',
                                    boxShadow: '0 20px 48px rgba(76, 175, 80, 0.25)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '-20%',
                                        right: '-10%',
                                        width: '200px',
                                        height: '200px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '50%',
                                    }
                                }}>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 900,
                                        mb: 2,
                                        fontSize: { xs: '1.1rem', md: '1.5rem' },
                                        lineHeight: 1.2,
                                        maxWidth: '300px',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}>
                                        <DashboardIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
                                        Parent Dashboard
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        mb: 3,
                                        opacity: 1,
                                        lineHeight: 1.6,
                                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                                        maxWidth: '380px',
                                        color: 'white'
                                    }}>
                                        Get real insights into how your child is learning. Identify strengths and gently address gaps with suggested coaching tips.
                                    </Typography>
                                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', mb: 4, flexGrow: 1, '& li': { mb: 2.5, display: 'flex', gap: 2, alignItems: 'flex-start', color: 'white' } }}>
                                        <li>
                                            <CheckCircleIcon sx={{ mt: 0.3, color: '#ffffff' }} />
                                            <Typography variant="body1" sx={{ fontWeight: 600, color: 'white' }}>Track game participation and favorite categories.</Typography>
                                        </li>
                                        <li>
                                            <CheckCircleIcon sx={{ mt: 0.3, color: '#ffffff' }} />
                                            <Typography variant="body1" sx={{ fontWeight: 600, color: 'white' }}>Monitor understanding of food classifications.</Typography>
                                        </li>
                                        <li>
                                            <CheckCircleIcon sx={{ mt: 0.3, color: '#ffffff' }} />
                                            <Typography variant="body1" sx={{ fontWeight: 600, color: 'white' }}>Receive tailored suggestions for challenges.</Typography>
                                        </li>
                                    </Box>
                                    <Button variant="contained" sx={{
                                        bgcolor: '#ffffff',
                                        color: '#1a237e',
                                        fontWeight: 800,
                                        borderRadius: '7px',
                                        py: 1.5,
                                        textTransform: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 1,
                                        '&:hover': { bgcolor: '#f0f0f0' }
                                    }}>
                                        <DashboardIcon sx={{ fontSize: 20 }} />
                                        Go to Dashboard
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Column 2: Final CTA */}
                            <Grid item xs={12} sm={6}>
                                <Box sx={{
                                    p: { xs: 4, md: 6 },
                                    background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                                    borderRadius: '7px',
                                    color: 'white',
                                    boxShadow: '0 24px 64px rgba(26, 35, 126, 0.3)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Typography variant="h3" sx={{
                                        fontWeight: 900,
                                        mb: 2,
                                        fontSize: { xs: '1.1rem', md: '1.5rem' },
                                        lineHeight: 1.2,
                                        maxWidth: '400px',
                                        mx: 'auto',
                                        color: 'white'
                                    }}>
                                        Ready to Scan & Learn?
                                    </Typography>
                                    <Typography sx={{
                                        mb: 1.5,
                                        opacity: 1,
                                        maxWidth: '420px',
                                        mx: 'auto',
                                        fontSize: { xs: '0.9rem', md: '1.2rem' },
                                        lineHeight: 1.6,
                                        color: 'white'
                                    }}>
                                        Join thousands of families making snack choices simpler and more educational every day.
                                    </Typography>
                                    <Typography sx={{
                                        mb: 3,
                                        opacity: 0.95,
                                        maxWidth: '420px',
                                        mx: 'auto',
                                        fontSize: { xs: '0.8rem', md: '0.95rem' },
                                        lineHeight: 1.5,
                                        color: 'white',
                                        fontWeight: 600
                                    }}>
                                        For live features, scanning, games, and full implementation—download the app from Google Play Store (Android) and Apple App Store (iOS).
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, alignItems: 'center', justifyContent: 'center', mt: 'auto' }}>
                                        <Button size="small" variant="contained" sx={{
                                            bgcolor: '#ff9500',
                                            px: { xs: 1, md: 1.5 },
                                            py: { xs: 0.25, md: 0.4 },
                                            borderRadius: '6px',
                                            fontWeight: 700,
                                            fontSize: { xs: '0.63rem', md: '0.72rem' },
                                            textTransform: 'none',
                                            width: { xs: '100%', sm: 'auto' },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 0.5,
                                            minHeight: 'auto',
                                            '&:hover': { bgcolor: '#e68600' }
                                        }}>
                                            <DownloadIcon sx={{ fontSize: { xs: 12, md: 13 } }} />
                                            Download Google Play
                                        </Button>
                                        <Button size="small" variant="contained" sx={{
                                            bgcolor: 'rgba(255,255,255,0.95)',
                                            color: '#1a237e',
                                            px: { xs: 1, md: 1.5 },
                                            py: { xs: 0.25, md: 0.4 },
                                            borderRadius: '6px',
                                            fontWeight: 700,
                                            fontSize: { xs: '0.63rem', md: '0.72rem' },
                                            textTransform: 'none',
                                            width: { xs: '100%', sm: 'auto' },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 0.5,
                                            minHeight: 'auto',
                                            '&:hover': { bgcolor: '#fff' }
                                        }}>
                                            <DownloadIcon sx={{ fontSize: { xs: 12, md: 13 } }} />
                                            Download App Store
                                        </Button>
                                        <Button size="small" variant="outlined" sx={{
                                            borderColor: 'white',
                                            color: 'white',
                                            px: { xs: 1, md: 1.5 },
                                            py: { xs: 0.25, md: 0.4 },
                                            borderRadius: '6px',
                                            fontWeight: 700,
                                            fontSize: { xs: '0.63rem', md: '0.72rem' },
                                            textTransform: 'none',
                                            width: { xs: '100%', sm: 'auto' },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 0.5,
                                            minHeight: 'auto',
                                            '&:hover': { borderColor: '#e3f2fd', color: '#e3f2fd' }
                                        }}>
                                            <EmailIcon sx={{ fontSize: { xs: 12, md: 13 } }} />
                                            Contact Team
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default Features
