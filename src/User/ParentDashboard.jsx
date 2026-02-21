import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, useMediaQuery, Paper, LinearProgress, Avatar } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import BarChartIcon from '@mui/icons-material/BarChart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

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

const statsCardSx = {
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 8px 32px rgba(26, 35, 126, 0.05)',
    p: 3,
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 15px 40px rgba(26, 35, 126, 0.08)',
        borderColor: 'rgba(26, 35, 126, 0.15)',
    }
}

function ParentDashboard() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const gameStats = [
        { label: "Build a Balanced Plate", progress: 85, color: '#4CAF50', plays: 12 },
        { label: "Green / Yellow / Red Sorting", progress: 92, color: '#ff9800', plays: 8 },
        { label: "Smart Swap Challenge", progress: 60, color: '#2196f3', plays: 5 },
        { label: "Fruit & Food Explorer", progress: 45, color: '#ab47bc', plays: 15 }
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif', pb: 8 }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
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
                            INSIGHTS & PROGRESS
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
                            Parent <Box component="span" sx={{ color: '#66bb6a' }}>Dashboard</Box>
                        </Typography>
                        <Typography variant="h6" sx={{
                            maxWidth: '750px',
                            mx: 'auto',
                            mb: 4,
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', md: '1.25rem' },
                            color: '#000000',
                            opacity: 0.8,
                            animation: 'fadeInUp 1s ease-out 0.2s both'
                        }}>
                            Welcome back! Here's a real-time look at how your little explorer is learning to make healthier choices every day.
                        </Typography>
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

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
                    <Grid container spacing={1.5} sx={{ mb: 4 }}>
                        {/* Summary Stats Cards */}
                        <Grid item xs={4} sm={4} md={4} sx={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
                            <Paper sx={statsCardSx}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: '#1a237e', opacity: 0.6, letterSpacing: 1, fontSize: '0.7rem' }}>TOTAL GAMES</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, color: '#1a237e', my: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>42</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ px: 1, py: 0.5, borderRadius: '8px', bgcolor: 'rgba(76, 175, 80, 0.12)', color: '#2e7d32', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <TrendingUpIcon sx={{ fontSize: 16 }} />
                                        <Typography variant="caption" fontWeight={700} sx={{ fontSize: '0.65rem' }}>+12%</Typography>
                                    </Box>
                                    <Typography variant="caption" sx={{ color: '#000000', opacity: 0.6, fontSize: '0.65rem' }}>vs last week</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} sx={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                            <Paper sx={statsCardSx}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: '#ff9800', opacity: 0.7, letterSpacing: 1, fontSize: '0.7rem' }}>ACCURACY</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, color: '#ff9800', my: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>88%</Typography>
                                <Typography variant="body2" sx={{ color: '#000000', opacity: 0.8, fontWeight: 500, fontSize: '0.85rem' }}>
                                    Fantastic precision! 🎯
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} sx={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
                            <Paper sx={statsCardSx}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: '#ab47bc', opacity: 0.7, letterSpacing: 1, fontSize: '0.7rem' }}>NEW BADGES</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, color: '#ab47bc', my: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>14</Typography>
                                <Typography variant="body2" sx={{ color: '#000000', opacity: 0.8, fontWeight: 500, fontSize: '0.85rem' }}>
                                    "Veggie Master" unlocked
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2.5}>
                        {/* Middle Section: Progress & Insights */}
                        <Grid item xs={12} sx={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                            <Card sx={{
                                borderRadius: '24px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 8px 32px rgba(26, 35, 126, 0.05)',
                                height: '100%',
                                p: { xs: 2.5, md: 4 },
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 15px 40px rgba(26, 35, 126, 0.08)'
                                }
                            }}>
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                                        <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'rgba(26, 35, 126, 0.08)', color: '#1a237e' }}>
                                            <AnalyticsIcon sx={{ fontSize: 24 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 900, color: '#1a237e', fontSize: { xs: '1rem', md: '1.2rem' } }}>Game Participation</Typography>
                                            <Typography variant="caption" sx={{ opacity: 0.6, fontSize: '0.75rem' }}>Progress per category</Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        {gameStats.map((game) => (
                                            <Box key={game.label}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'flex-end' }}>
                                                    <Typography variant="body2" fontWeight={800} sx={{ color: '#000000', fontSize: { xs: '0.85rem', md: '0.95rem' } }}>{game.label}</Typography>
                                                    <Box sx={{ textAlign: 'right' }}>
                                                        <Typography variant="h6" fontWeight={900} sx={{ color: game.color, lineHeight: 1, fontSize: { xs: '1rem', md: '1.2rem' } }}>{game.progress}%</Typography>
                                                        <Typography variant="caption" sx={{ opacity: 0.6, fontWeight: 700, fontSize: '0.65rem' }}>{game.plays} PLAYS</Typography>
                                                    </Box>
                                                </Box>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={game.progress}
                                                    sx={{
                                                        height: 12,
                                                        borderRadius: 6,
                                                        bgcolor: 'rgba(0,0,0,0.04)',
                                                        '& .MuiLinearProgress-bar': {
                                                            bgcolor: game.color,
                                                            borderRadius: 6,
                                                            boxShadow: `0 0 12px ${game.color}44`
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1.5}>
                        <Grid item xs={12} md={7} sx={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                                <Card sx={{
                                    borderRadius: '24px',
                                    background: 'linear-gradient(135deg, #edf7ed 0%, #c8e6c9 100%)',
                                    border: '1px solid rgba(46, 125, 50, 0.1)',
                                    boxShadow: '0 8px 32px rgba(46, 125, 50, 0.05)',
                                    flexGrow: 1,
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 15px 40px rgba(46, 125, 50, 0.08)' }
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, color: '#1b5e20' }}>
                                            <Avatar sx={{ bgcolor: '#2e7d32', width: 40, height: 40 }}>
                                                <CheckCircleIcon sx={{ fontSize: 20 }} />
                                            </Avatar>
                                            <Typography variant="h6" fontWeight={900} sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>Strengths</Typography>
                                        </Box>
                                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', '& li': { mb: 1.5, display: 'flex', gap: 2, alignItems: 'flex-start' } }}>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#2e7d32', mt: 0.3, flexShrink: 0 }} fontSize="small" />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#1b5e20' }}>Excellent at identifying Green foods.</Typography>
                                            </li>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#2e7d32', mt: 0.3, flexShrink: 0 }} fontSize="small" />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#1b5e20' }}>Understands portion balance basics.</Typography>
                                            </li>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#2e7d32', mt: 0.3, flexShrink: 0 }} fontSize="small" />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#1b5e20' }}>Great at "Smart Swaps" for snacks.</Typography>
                                            </li>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Card sx={{
                                    borderRadius: '24px',
                                    background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                                    border: '1px solid rgba(230, 81, 0, 0.1)',
                                    boxShadow: '0 8px 32px rgba(230, 81, 0, 0.05)',
                                    flexGrow: 1,
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 15px 40px rgba(230, 81, 0, 0.08)' }
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, color: '#e65100' }}>
                                            <Avatar sx={{ bgcolor: '#ef6c00', width: 40, height: 40 }}>
                                                <ReportProblemIcon sx={{ fontSize: 20 }} />
                                            </Avatar>
                                            <Typography variant="h6" fontWeight={900} sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>Focus Areas</Typography>
                                        </Box>
                                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', '& li': { mb: 1.5, display: 'flex', gap: 2, alignItems: 'flex-start' } }}>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#e65100', mt: 0.3, flexShrink: 0 }} fontSize="small" />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#e65100' }}>Confusion with whole fruit vs juice.</Typography>
                                            </li>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#e65100', mt: 0.3, flexShrink: 0 }} fontSize="small" />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#e65100' }}>Identifying "Sometimes" drinks.</Typography>
                                            </li>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1.5}>
                        {/* Bottom Full Width Section: Coaching Tip */}
                        <Grid item xs={12} sx={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
                            <Box sx={{
                                p: { xs: 3, md: 5 },
                                background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                                borderRadius: '24px',
                                color: 'white',
                                boxShadow: '0 15px 40px rgba(26, 35, 126, 0.15)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Decorative circle */}
                                <Box sx={{
                                    position: 'absolute',
                                    width: '300px',
                                    height: '300px',
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%',
                                    top: '-150px',
                                    right: '-50px',
                                    zIndex: 0
                                }} />

                                <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
                                    <Grid item xs={12} md={2} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: '20px',
                                            bgcolor: 'rgba(255,255,255,0.08)',
                                            backdropFilter: 'blur(10px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                        }}>
                                            <TipsAndUpdatesIcon sx={{ fontSize: 40, color: '#ffeb3b' }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <Typography
                                            variant="overline"
                                            sx={{ letterSpacing: 3, fontWeight: 800, color: '#ffeb3b', mb: 1, display: 'block', fontSize: { xs: '0.7rem', md: '0.8rem' } }}
                                        >
                                            WEEKLY COACHING TIP
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>Unlock the Magic of Water</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.7, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                                            "Your child understands snacks well but struggles with identifying hidden sugars in drinks. Try focusing on <strong style={{ color: '#ffeb3b' }}>Water-based challenges</strong> this week to help them learn the difference between Anytime and Sometimes beverages."
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'right' }, display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                                        <Box sx={{
                                            p: 2.5,
                                            borderRadius: '16px',
                                            bgcolor: 'rgba(255,255,255,0.08)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            display: 'inline-block'
                                        }}>
                                            <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1, opacity: 0.7, fontSize: '0.7rem' }}>FOCUS AGE RANGE</Typography>
                                            <Typography variant="h6" fontWeight={900} sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }}>6–8 Years</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default ParentDashboard

