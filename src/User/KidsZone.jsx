import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, useMediaQuery, Button } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import CategoryIcon from '@mui/icons-material/Category'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import ExploreIcon from '@mui/icons-material/Explore'
import GroupIcon from '@mui/icons-material/Group'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GamepadIcon from '@mui/icons-material/Gamepad'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import DownloadIcon from '@mui/icons-material/Download'

// ── Shared style tokens (match Features.jsx & ParentDashboard.jsx) ─────────
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
    opacity: 0.85,
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
        },
    },
}

function KidsZone() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const games = [
        {
            title: 'Build a Balanced Plate',
            desc: 'Pick 3 healthy items to make a balanced snack. Can you find a fruit or veggie?',
            icon: <RestaurantIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
            color: '#4CAF50',
            bg: '#edf7ed',
            age: '3–5 Years',
            label: 'Foundation',
        },
        {
            title: 'Color Sort Challenge',
            desc: 'Drag food to Green, Yellow, or Red. Remember: Green is for Anytime!',
            icon: <CategoryIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
            color: '#ff9800',
            bg: '#fff3e0',
            age: '4–9 Years',
            label: 'Decision Skill',
        },
        {
            title: 'Smart Swap Quest',
            desc: 'Found a sugary snack? Pick a better option and become a Swap Hero!',
            icon: <SwapHorizIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
            color: '#2196f3',
            bg: '#e3f2fd',
            age: '6–8 Years',
            label: 'Real-World Skill',
        },
        {
            title: 'Food Explorer',
            desc: 'Tap food to learn fun facts! Did you know oranges help you fight colds?',
            icon: <ExploreIcon sx={{ fontSize: 40, color: '#ab47bc' }} />,
            color: '#ab47bc',
            bg: '#f3e5f5',
            age: '3–5 Years',
            label: 'Discovery',
        },
        {
            title: 'Family Challenges',
            desc: 'Eat 3 different fruit colors this week and earn the Rainbow Badge!',
            icon: <GroupIcon sx={{ fontSize: 40, color: '#fbc02d' }} />,
            color: '#fbc02d',
            bg: '#fff9c4',
            age: 'All Ages',
            label: 'Coaching',
        },
        {
            title: 'Rainbow Plate Challenge',
            desc: 'Try foods from every color of the rainbow and earn your Rainbow Explorer badge!',
            icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#e91e63' }} />,
            color: '#e91e63',
            bg: '#fce4ec',
            age: '4–8 Years',
            label: 'Fun Challenge',
        },
    ]

    const badges = ['Explorer', 'Swapper', 'Plate Master', 'Color Guru']

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section — matches Features/ParentDashboard (light bg + blobs) */}
                <Box sx={{
                    py: { xs: 4, md: 6 },
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <Box sx={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(26, 35, 126, 0.03)',
                        top: '-100px',
                        left: '-100px',
                        animation: 'float 20s infinite linear',
                        zIndex: 0,
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
                        zIndex: 0,
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
                                animation: 'fadeInDown 0.8s ease-out',
                            }}
                        >
                            PLAY & LEARN
                        </Typography>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3.5rem' },
                            fontWeight: 900,
                            mb: 2,
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: 1.2,
                            color: '#1a237e',
                            animation: 'fadeInUp 1s ease-out',
                        }}>
                            Kids <Box component="span" sx={{ color: '#66bb6a' }}>Zone</Box>
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
                            animation: 'fadeInUp 1s ease-out 0.2s both',
                        }}>
                            Explore, play, and become a healthy food hero! No timers, no pressure—just fun learning for every curious explorer.
                        </Typography>
                        <Typography variant="body2" sx={{
                            maxWidth: '700px',
                            mx: 'auto',
                            mb: 4,
                            fontWeight: 600,
                            lineHeight: 1.5,
                            fontSize: { xs: '0.8rem', md: '0.95rem' },
                            color: '#1a237e',
                            animation: 'fadeInUp 1s ease-out 0.25s both',
                        }}>
                            For live games, badges, and full experience—download our app from Google Play Store (Android) and Apple App Store (iOS).
                        </Typography>
                        <Box sx={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<EmojiEventsIcon />}
                                sx={{
                                    bgcolor: '#ff9500',
                                    color: 'white',
                                    px: { xs: 3, md: 6 },
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
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Enter Badge Room
                            </Button>
                        </Box>
                    </Container>

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
                            <Typography sx={{ ...sectionTitleSx, mb: 0 }}>Choose Your Adventure</Typography>
                            <GamepadIcon sx={{ fontSize: { xs: 24, md: 32 }, color: '#4CAF50' }} />
                        </Box>
                        <Typography sx={sectionSubtitleSx}>
                            Play games that teach <Box component="span" sx={{ fontWeight: 700, color: '#1a237e' }}>how to choose food</Box>—no timers, no pressure. Every game rewards trying and learning! To play these games and unlock badges, download the app from Google Play (Android) or the App Store (iOS).
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {games.map((game, index) => (
                            <Grid item xs={12} sm={6} key={game.title} sx={{ animation: `fadeInUp 1s ease-out ${0.3 + index * 0.1}s both` }}>
                                <Card sx={gameCardSx}>
                                    <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                                <Typography variant="overline" sx={{ color: game.color, fontWeight: 700, display: 'block', mb: 0.5 }}>
                                                    {game.label}
                                                </Typography>
                                                <Typography variant="h6" sx={{
                                                    fontWeight: 900,
                                                    color: '#1a237e',
                                                    lineHeight: 1.2,
                                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                                }}>
                                                    {game.title}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: '#78909c', fontWeight: 600, fontSize: '0.7rem' }}>
                                                    {game.age}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    padding: '12px',
                                                    borderRadius: '7px',
                                                    background: game.bg,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                }}
                                                className="card-icon-box"
                                            >
                                                {game.icon}
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" sx={{
                                            color: '#000000',
                                            lineHeight: 1.6,
                                            fontSize: { xs: '0.85rem', md: '0.9rem' },
                                            opacity: 0.9,
                                            whiteSpace: 'normal',
                                            wordBreak: 'break-word',
                                            overflowWrap: 'break-word',
                                            hyphens: 'auto',
                                            maxWidth: '48ch',
                                        }}>
                                            {game.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Badge Room — indigo gradient block (matches sample CTA sections) */}
                <Box sx={{ bgcolor: 'rgba(26, 35, 126, 0.02)', py: { xs: 4, md: 6 } }}>
                    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
                        <Box sx={{
                            p: { xs: 4, md: 6 },
                            background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                            borderRadius: '7px',
                            color: 'white',
                            boxShadow: '0 20px 48px rgba(26, 35, 126, 0.25)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-10%',
                                width: '200px',
                                height: '200px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                zIndex: 0,
                            }} />
                            <Box sx={{
                                position: 'absolute',
                                bottom: '-30%',
                                left: '-5%',
                                width: '160px',
                                height: '160px',
                                background: 'rgba(255, 235, 59, 0.06)',
                                borderRadius: '50%',
                                zIndex: 0,
                            }} />

                            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
                                <Box sx={{ flex: '1 1 280px', minWidth: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        <Box sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: '7px',
                                            bgcolor: 'rgba(255,255,255,0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                        }}>
                                            <EmojiEventsIcon sx={{ fontSize: 32, color: '#ffeb3b' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" sx={{ fontWeight: 900, color: 'white', fontSize: { xs: '1.2rem', md: '1.5rem' }, fontFamily: '"Poppins", sans-serif' }}>
                                                Badge Room
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.9, color: 'white', fontSize: '0.9rem' }}>
                                                Collect badges as you learn!
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="body1" sx={{ mb: 1.5, opacity: 0.95, lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' }, color: 'white' }}>
                                        Unlock "Explorer", "Smart Swapper", "Plate Master" and more. Every game brings you closer to the next badge.
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 2.5, fontWeight: 600, opacity: 0.95, fontSize: { xs: '0.8rem', md: '0.9rem' }, color: 'white' }}>
                                        For live games and full implementation—download the app from Google Play Store (Android) and Apple App Store (iOS).
                                    </Typography>
                                    <Box sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                                        gap: { xs: 1, sm: 1.5 },
                                    }}>
                                        {badges.map((badge) => (
                                            <Box
                                                key={badge}
                                                sx={{
                                                    px: { xs: 1, sm: 1.5 },
                                                    py: { xs: 0.5, sm: 0.75 },
                                                    borderRadius: '7px',
                                                    bgcolor: 'rgba(255,255,255,0.12)',
                                                    border: '1px solid rgba(255,255,255,0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: { xs: 'center', sm: 'flex-start' },
                                                    gap: { xs: 0.5, sm: 1 },
                                                    minWidth: 0,
                                                }}
                                            >
                                                <StarRoundedIcon sx={{ fontSize: { xs: 14, sm: 16 }, color: '#ffeb3b', flexShrink: 0 }} />
                                                <Typography variant="body2" fontWeight={700} sx={{ color: 'white', fontSize: { xs: '0.7rem', sm: '0.8rem' }, lineHeight: 1.2, wordBreak: 'break-word' }}>
                                                    {badge}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2, justifyContent: 'center' }}>
                                        <Button size="small" variant="contained" sx={{
                                            bgcolor: '#ff9500', color: 'white', borderRadius: '7px', fontWeight: 700,
                                            fontSize: '0.75rem', textTransform: 'none', px: 2, py: 0.6,
                                            '&:hover': { bgcolor: '#e68600' },
                                        }}>
                                            <DownloadIcon sx={{ fontSize: 14, mr: 0.5 }} />
                                            Google Play
                                        </Button>
                                        <Button size="small" variant="contained" sx={{
                                            bgcolor: 'rgba(255,255,255,0.95)', color: '#1a237e', borderRadius: '7px', fontWeight: 700,
                                            fontSize: '0.75rem', textTransform: 'none', px: 2, py: 0.6,
                                            '&:hover': { bgcolor: '#fff' },
                                        }}>
                                            <DownloadIcon sx={{ fontSize: 14, mr: 0.5 }} />
                                            App Store
                                        </Button>
                                    </Box>
                                </Box>
                                <Box sx={{ flexShrink: 0, textAlign: 'center' }}>
                                    <Typography variant="h2" sx={{ fontWeight: 900, color: 'white', lineHeight: 1.1, fontFamily: '"Poppins", sans-serif', fontSize: { xs: '3rem', md: '4rem' } }}>
                                        14
                                    </Typography>
                                    <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, opacity: 0.8, fontSize: '0.7rem' }}>
                                        Badges earned
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default KidsZone
