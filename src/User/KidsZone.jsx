import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, useMediaQuery, Button, Avatar, Paper } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import CategoryIcon from '@mui/icons-material/Category'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import SearchIcon from '@mui/icons-material/Search'
import GroupIcon from '@mui/icons-material/Group'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoIcon from '@mui/icons-material/Info'

const gameCardSx = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '32px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
        transform: 'translateY(-12px) scale(1.02)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
        '& .card-icon-box': {
            transform: 'scale(1.1) rotate(5deg)',
        }
    }
}

function KidsZone() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const games = [
        {
            title: "Build a Balanced Plate",
            desc: "Pick 3 healthy items to make a balanced snack. Can you find a fruit or veggie?",
            icon: <RestaurantIcon sx={{ fontSize: 45 }} />,
            bg: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
            age: "3-5 Years",
            label: "Foundation"
        },
        {
            title: "Color Sort Challenge",
            desc: "Drag food to Green, Yellow, or Red. Remember: Green is for Anytime!",
            icon: <CategoryIcon sx={{ fontSize: 45 }} />,
            bg: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
            age: "4-9 Years",
            label: "Decision Skill"
        },
        {
            title: "Smart Swap Quest",
            desc: "Found a sugary snack? Pick a better option and become a Swap Hero!",
            icon: <SwapHorizIcon sx={{ fontSize: 45 }} />,
            bg: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
            age: "6-8 Years",
            label: "Real-World Skill"
        },
        {
            title: "Food Explorer",
            desc: "Tap food to learn fun facts! Did you know oranges help you fight colds?",
            icon: <SearchIcon sx={{ fontSize: 45 }} />,
            bg: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
            age: "3-5 Years",
            label: "Discovery"
        },
        {
            title: "Family Challenges",
            desc: "Eat 3 different fruit colors this week and earn the Rainbow Badge!",
            icon: <GroupIcon sx={{ fontSize: 45 }} />,
            bg: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
            age: "All Ages",
            label: "Coaching"
        }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif', pb: 10 }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%)',
                    color: 'white',
                    py: { xs: 8, md: 14 },
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)',
                        zIndex: 1
                    }
                }}>
                    {/* Floating Kids Shapes */}
                    <Box sx={{ position: 'absolute', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', top: '-100px', left: '-50px', animation: 'float 20s infinite linear', zIndex: 0 }} />
                    <Box sx={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.04)', bottom: '-50px', right: '-30px', animation: 'float 15s infinite linear reverse', zIndex: 0 }} />

                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                        <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 800, opacity: 0.9, display: 'block', mb: 2, animation: 'fadeInDown 0.8s ease-out' }}>
                            PLAY & LEARN
                        </Typography>
                        <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, fontWeight: 900, mb: 2, lineHeight: 1.1, animation: 'fadeInUp 1s ease-out' }}>
                            Kids <Box component="span" sx={{ color: '#ffeb3b', textShadow: '0 0 20px rgba(255, 235, 59, 0.4)' }}>Zone</Box>
                        </Typography>
                        <Typography variant="h6" sx={{ maxWidth: '700px', mx: 'auto', mb: 5, opacity: 0.9, fontWeight: 500, lineHeight: 1.6, animation: 'fadeInUp 1s ease-out 0.2s both' }}>
                            Explore, play, and become a healthy food hero! No timers, no pressure—just fun learning for every curious explorer.
                        </Typography>
                        <Box sx={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<EmojiEventsIcon />}
                                sx={{
                                    bgcolor: '#ffeb3b',
                                    color: '#4a148c',
                                    px: 5, py: 2,
                                    borderRadius: '20px',
                                    fontSize: '1.2rem',
                                    fontWeight: 800,
                                    textTransform: 'none',
                                    boxShadow: '0 10px 30px rgba(255, 235, 59, 0.3)',
                                    '&:hover': { bgcolor: '#fdd835', transform: 'scale(1.05)' }
                                }}
                            >
                                Enter Badge Room
                            </Button>
                        </Box>
                    </Container>

                    <style>{`
                        @keyframes float {
                            0% { transform: translateY(0) rotate(0deg); }
                            50% { transform: translateY(-20px) rotate(10deg); }
                            100% { transform: translateY(0) rotate(0deg); }
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

                {/* Games Grid */}
                <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 10 }}>
                    <Grid container spacing={4}>
                        {games.map((game, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{ animation: `fadeInUp 1s ease-out ${0.2 * index}s both` }}>
                                <Card sx={gameCardSx}>
                                    <Box className="card-icon-box" sx={{
                                        p: 5,
                                        background: game.bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                    }}>
                                        {game.icon}
                                    </Box>
                                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="caption" sx={{ px: 1.5, py: 0.5, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: '8px', fontWeight: 800, color: 'text.secondary' }}>
                                                {game.label}
                                            </Typography>
                                            <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>
                                                {game.age}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, color: '#1a237e' }}>
                                            {game.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#000000', opacity: 0.7, mb: 3, lineHeight: 1.6, flexGrow: 1 }}>
                                            {game.desc}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            endIcon={<PlayArrowIcon />}
                                            sx={{
                                                borderRadius: '14px',
                                                py: 1.5,
                                                fontWeight: 800,
                                                textTransform: 'none',
                                                background: game.bg,
                                                boxShadow: 'none',
                                                '&:hover': { opacity: 0.9, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }
                                            }}
                                        >
                                            Play Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                        {/* Rewards / Badges Room Preview */}
                        <Grid item xs={12} sx={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}>
                            <Paper sx={{
                                p: { xs: 4, md: 6 },
                                borderRadius: '40px',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f3e5f5 100%)',
                                border: '1px solid rgba(138, 75, 175, 0.1)',
                                boxShadow: '0 20px 60px rgba(106, 27, 154, 0.08)',
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                gap: 4
                            }}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'left' }, flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                        <Avatar sx={{ bgcolor: '#ffeb3b', color: '#4a148c' }}>
                                            <EmojiEventsIcon />
                                        </Avatar>
                                        <Typography variant="h4" sx={{ fontWeight: 900, color: '#4a148c' }}>Badge Room</Typography>
                                    </Box>
                                    <Typography variant="h6" sx={{ opacity: 0.8, mb: 3, color: '#4a148c' }}>
                                        Collect "Explorer" and "Smart Swapper" badges as you learn!
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                        {['Explorer', 'Swapper', 'Plate Master', 'Color Guru'].map((badge) => (
                                            <Box key={badge} sx={{ px: 2, py: 1, borderRadius: '12px', bgcolor: 'white', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="body2" fontWeight={800}>{badge}</Typography>
                                                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4CAF50' }} />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="h2" sx={{ fontWeight: 900, color: '#6a1b9a' }}>14</Typography>
                                    <Typography variant="overline" sx={{ fontWeight: 800, opacity: 0.6 }}>BADGES EARNED</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default KidsZone
