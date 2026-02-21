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

const sectionTitleSx = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 800,
    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
    color: '#1a237e',
    textAlign: 'left',
    mb: 1,
}

const statsCardSx = {
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 8px 32px rgba(26, 35, 126, 0.08)',
    p: 3,
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: '0 20px 48px rgba(26, 35, 126, 0.12)',
        borderColor: 'rgba(26, 35, 126, 0.2)',
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
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif', pb: 10 }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={{
                    background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                    color: 'white',
                    py: { xs: 8, md: 12 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
                        zIndex: 1
                    }
                }}>
                    {/* Floating elements */}
                    <Box sx={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.03)',
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
                        background: 'rgba(255, 255, 255, 0.02)',
                        bottom: '-50px',
                        right: '-50px',
                        animation: 'float 15s infinite linear reverse',
                        zIndex: 0
                    }} />

                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        letterSpacing: 4,
                                        fontWeight: 800,
                                        opacity: 0.8,
                                        display: 'block',
                                        mb: 2,
                                        animation: 'fadeInDown 0.8s ease-out'
                                    }}
                                >
                                    INSIGHTS & PROGRESS
                                </Typography>
                                <Typography variant="h1" sx={{
                                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                    fontWeight: 900,
                                    mb: 2,
                                    lineHeight: 1.1,
                                    animation: 'fadeInUp 1s ease-out'
                                }}>
                                    Parent <Box component="span" sx={{ color: '#66bb6a', textShadow: '0 0 20px rgba(102, 187, 106, 0.3)' }}>Dashboard</Box>
                                </Typography>
                                <Typography sx={{
                                    opacity: 0.9,
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    maxWidth: 600,
                                    lineHeight: 1.6,
                                    animation: 'fadeInUp 1s ease-out 0.2s both'
                                }}>
                                    Welcome back! Here's a real-time look at how your little explorer is learning to make healthier choices every day.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' }, animation: 'fadeInUp 1s ease-out 0.4s both' }}>
                                <Box sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    bgcolor: 'rgba(255,255,255,0.08)',
                                    p: { xs: 2.5, md: 3 },
                                    borderRadius: '24px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                                }}>
                                    <Avatar sx={{
                                        bgcolor: '#ff9500',
                                        width: { xs: 60, md: 80 },
                                        height: { xs: 60, md: 80 },
                                        boxShadow: '0 0 20px rgba(255, 149, 0, 0.4)',
                                        animation: 'pulse 2s infinite ease-in-out'
                                    }}>
                                        <EmojiEventsIcon sx={{ fontSize: { xs: 30, md: 40 } }} />
                                    </Avatar>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5" fontWeight={900}>Level 5</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.8, letterSpacing: 1, fontWeight: 700 }}>TOP EXPLORER</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>

                    {/* Shared Animations Style */}
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
                        @keyframes pulse {
                            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 149, 0, 0.4); }
                            70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 149, 0, 0); }
                            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 149, 0, 0); }
                        }
                    `}</style>
                </Box>

                <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 10 }}>
                    <Grid container spacing={3}>
                        {/* Summary Stats Cards */}
                        <Grid item xs={12} sm={4} sx={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
                            <Paper sx={statsCardSx}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: '#1a237e', opacity: 0.6, letterSpacing: 1 }}>TOTAL GAMES</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, color: '#1a237e', my: 1 }}>42</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box sx={{ px: 1, py: 0.5, borderRadius: '8px', bgcolor: 'rgba(76, 175, 80, 0.12)', color: '#2e7d32', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <TrendingUpIcon fontSize="small" />
                                        <Typography variant="caption" fontWeight={700}>+12%</Typography>
                                    </Box>
                                    <Typography variant="caption" sx={{ color: '#000000', opacity: 0.6 }}>vs last week</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                            <Paper sx={statsCardSx}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: '#ff9800', opacity: 0.7, letterSpacing: 1 }}>ACCURACY</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, color: '#ff9800', my: 1 }}>88%</Typography>
                                <Typography variant="body2" sx={{ color: '#000000', opacity: 0.8, fontWeight: 500 }}>
                                    Fantastic precision! 🎯
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
                            <Paper sx={statsCardSx}>
                                <Typography variant="overline" sx={{ fontWeight: 800, color: '#ab47bc', opacity: 0.7, letterSpacing: 1 }}>NEW BADGES</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 900, color: '#ab47bc', my: 1 }}>14</Typography>
                                <Typography variant="body2" sx={{ color: '#000000', opacity: 0.8, fontWeight: 500 }}>
                                    "Veggie Master" unlocked
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Middle Section: Progress & Insights */}
                        <Grid item xs={12} md={7} sx={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                            <Card sx={{
                                borderRadius: '32px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 15px 45px rgba(26, 35, 126, 0.05)',
                                height: '100%',
                                p: { xs: 2.5, md: 4 }
                            }}>
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
                                        <Box sx={{ p: 1.5, borderRadius: '16px', bgcolor: 'rgba(26, 35, 126, 0.05)', color: '#1a237e' }}>
                                            <AnalyticsIcon />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" sx={{ fontWeight: 900, color: '#1a237e' }}>Game Participation</Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.6 }}>Progress per category</Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                                        {gameStats.map((game) => (
                                            <Box key={game.label}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'flex-end' }}>
                                                    <Typography variant="body1" fontWeight={800} sx={{ color: '#000000' }}>{game.label}</Typography>
                                                    <Box sx={{ textAlign: 'right' }}>
                                                        <Typography variant="h6" fontWeight={900} sx={{ color: game.color, lineHeight: 1 }}>{game.progress}%</Typography>
                                                        <Typography variant="caption" sx={{ opacity: 0.6, fontWeight: 700 }}>{game.plays} PLAYS</Typography>
                                                    </Box>
                                                </Box>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={game.progress}
                                                    sx={{
                                                        height: 14,
                                                        borderRadius: 7,
                                                        bgcolor: 'rgba(0,0,0,0.04)',
                                                        '& .MuiLinearProgress-bar': {
                                                            bgcolor: game.color,
                                                            borderRadius: 7,
                                                            boxShadow: `0 0 15px ${game.color}44`
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={5} sx={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                                <Card sx={{
                                    borderRadius: '32px',
                                    background: 'linear-gradient(135deg, #edf7ed 0%, #c8e6c9 100%)',
                                    border: '1px solid rgba(46, 125, 50, 0.1)',
                                    boxShadow: '0 10px 30px rgba(46, 125, 50, 0.05)',
                                    flexGrow: 1,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, color: '#1b5e20' }}>
                                            <Avatar sx={{ bgcolor: '#2e7d32', width: 44, height: 44 }}>
                                                <CheckCircleIcon />
                                            </Avatar>
                                            <Typography variant="h6" fontWeight={900}>Strengths</Typography>
                                        </Box>
                                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', '& li': { mb: 2, display: 'flex', gap: 2, alignItems: 'flex-start' } }}>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#2e7d32', mt: 0.3 }} fontSize="small" />
                                                <Typography variant="body1" fontWeight={600} sx={{ color: '#1b5e20' }}>Excellent at identifying Green foods.</Typography>
                                            </li>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#2e7d32', mt: 0.3 }} fontSize="small" />
                                                <Typography variant="body1" fontWeight={600} sx={{ color: '#1b5e20' }}>Understands portion balance basics.</Typography>
                                            </li>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#2e7d32', mt: 0.3 }} fontSize="small" />
                                                <Typography variant="body1" fontWeight={600} sx={{ color: '#1b5e20' }}>Great at "Smart Swaps" for snacks.</Typography>
                                            </li>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Card sx={{
                                    borderRadius: '32px',
                                    background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                                    border: '1px solid rgba(230, 81, 0, 0.1)',
                                    boxShadow: '0 10px 30px rgba(230, 81, 0, 0.05)',
                                    flexGrow: 1,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': { transform: 'scale(1.02)' }
                                }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, color: '#e65100' }}>
                                            <Avatar sx={{ bgcolor: '#ef6c00', width: 44, height: 44 }}>
                                                <ReportProblemIcon />
                                            </Avatar>
                                            <Typography variant="h6" fontWeight={900}>Focus Areas</Typography>
                                        </Box>
                                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', '& li': { mb: 2, display: 'flex', gap: 2, alignItems: 'flex-start' } }}>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#e65100', mt: 0.3 }} fontSize="small" />
                                                <Typography variant="body1" fontWeight={600} sx={{ color: '#e65100' }}>Confusion with whole fruit vs juice.</Typography>
                                            </li>
                                            <li>
                                                <StarRoundedIcon sx={{ color: '#e65100', mt: 0.3 }} fontSize="small" />
                                                <Typography variant="body1" fontWeight={600} sx={{ color: '#e65100' }}>Identifying "Sometimes" drinks.</Typography>
                                            </li>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        {/* Bottom Full Width Section: Coaching Tip */}
                        <Grid item xs={12} sx={{ animation: 'fadeInUp 1s ease-out 1s both' }}>
                            <Box sx={{
                                p: { xs: 4, md: 8 },
                                background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                                borderRadius: { xs: '32px', md: '48px' },
                                color: 'white',
                                boxShadow: '0 25px 60px rgba(26, 35, 126, 0.25)',
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
                                    <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                                        <Box sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: '30px',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            backdropFilter: 'blur(10px)',
                                            margin: 'auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                        }}>
                                            <TipsAndUpdatesIcon sx={{ fontSize: 48, color: '#ffeb3b' }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <Typography
                                            variant="overline"
                                            sx={{ letterSpacing: 3, fontWeight: 800, color: '#ffeb3b', mb: 1, display: 'block' }}
                                        >
                                            WEEKLY COACHING TIP
                                        </Typography>
                                        <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>Unlock the Magic of Water</Typography>
                                        <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, fontSize: '1.1rem' }}>
                                            "Your child understands snacks well but struggles with identifying hidden sugars in drinks. Try focusing on <strong style={{ color: '#ffeb3b' }}>Water-based challenges</strong> this week to help them learn the difference between Anytime and Sometimes beverages."
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                                        <Box sx={{
                                            p: 3,
                                            borderRadius: '24px',
                                            bgcolor: 'rgba(255,255,255,0.08)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            display: 'inline-block'
                                        }}>
                                            <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1, opacity: 0.7 }}>FOCUS AGE RANGE</Typography>
                                            <Typography variant="h5" fontWeight={900}>6–8 Years</Typography>
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

