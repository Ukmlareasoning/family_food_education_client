import React, { useEffect } from 'react'
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery, Paper, LinearProgress, Avatar } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

// ── Shared style tokens (same as Features.jsx) ──────────────────────────────
const sectionTitleSx = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 800,
    fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2.2rem' },
    color: '#1a237e',
    textAlign: 'center',
    mb: 2,
    lineHeight: 1.2,
}

const glassCardSx = {
    borderRadius: '24px',
    background: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 8px 32px rgba(26,35,126,0.05)',
    transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
    '&:hover': {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: '0 20px 40px rgba(26,35,126,0.12)',
    },
}

const statCardSx = {
    ...glassCardSx,
    p: { xs: 2.5, md: 3 },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
}

// ────────────────────────────────────────────────────────────────────────────

function ParentDashboard() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const gameStats = [
        { label: 'Build a Balanced Plate', progress: 85, color: '#4CAF50', bg: '#edf7ed', plays: 12, emoji: '🥗' },
        { label: 'Green / Yellow / Red Sorting', progress: 92, color: '#ff9800', bg: '#fff3e0', plays: 8, emoji: '🎨' },
        { label: 'Smart Swap Challenge', progress: 60, color: '#2196f3', bg: '#e3f2fd', plays: 5, emoji: '🔄' },
        { label: 'Fruit & Food Explorer', progress: 45, color: '#ab47bc', bg: '#f3e5f5', plays: 15, emoji: '🍎' },
    ]

    const summaryStats = [
        {
            label: 'Total Games',
            value: '42',
            icon: <SportsEsportsIcon sx={{ fontSize: 24, color: '#1a237e' }} />,
            color: '#1a237e',
            iconBg: 'rgba(26,35,126,0.08)',
            badge: '+12%',
            badgeColor: '#2e7d32',
            badgeBg: 'rgba(76,175,80,0.12)',
            sub: 'vs last week',
        },
        {
            label: 'Accuracy',
            value: '88%',
            icon: <TrackChangesIcon sx={{ fontSize: 24, color: '#ff9800' }} />,
            color: '#ff9800',
            iconBg: 'rgba(255,152,0,0.08)',
            badge: 'Great!',
            badgeColor: '#e65100',
            badgeBg: 'rgba(255,152,0,0.12)',
            sub: 'Fantastic precision 🎯',
        },
        {
            label: 'New Badges',
            value: '14',
            icon: <WorkspacePremiumIcon sx={{ fontSize: 24, color: '#ab47bc' }} />,
            color: '#ab47bc',
            iconBg: 'rgba(171,71,188,0.08)',
            badge: 'New!',
            badgeColor: '#6a1b9a',
            badgeBg: 'rgba(171,71,188,0.12)',
            sub: '"Veggie Master" unlocked 🏅',
        },
    ]

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif', display: 'block', width: '100%' }}>
                <Header />
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* ── Global animations (mirrors Features.jsx) ── */}
                <style>{`
                    @keyframes float {
                        0%   { transform: translate(0,0) rotate(0deg); }
                        50%  { transform: translate(20px,20px) rotate(180deg); }
                        100% { transform: translate(0,0) rotate(360deg); }
                    }
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes fadeInDown {
                        from { opacity: 0; transform: translateY(-30px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                `}</style>

                {/* ── Hero ── */}
                <Box sx={{ py: { xs: 4, md: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    {/* Decorative blobs (same as Features) */}
                    <Box sx={{
                        position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
                        background: 'rgba(26,35,126,0.03)', top: '-100px', left: '-100px',
                        animation: 'float 20s infinite linear', zIndex: 0,
                    }} />
                    <Box sx={{
                        position: 'absolute', width: '200px', height: '200px', borderRadius: '50%',
                        background: 'rgba(102,187,106,0.03)', bottom: '-50px', right: '-50px',
                        animation: 'float 15s infinite linear reverse', zIndex: 0,
                    }} />

                    <Box sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 4 } }}>
                        <Typography variant="overline" sx={{
                            letterSpacing: 4, fontWeight: 800, color: '#4CAF50',
                            display: 'block', mb: 2, animation: 'fadeInDown 0.8s ease-out',
                        }}>
                            INSIGHTS & PROGRESS
                        </Typography>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3.5rem' },
                            fontWeight: 900, mb: 2, fontFamily: '"Poppins", sans-serif',
                            lineHeight: 1.2, color: '#1a237e',
                            animation: 'fadeInUp 1s ease-out',
                        }}>
                            Parent{' '}
                            <Box component="span" sx={{ color: '#66bb6a' }}>Dashboard</Box>
                        </Typography>
                        <Typography variant="h6" sx={{
                            maxWidth: '750px', mx: 'auto', mb: 4,
                            fontWeight: 400, lineHeight: 1.6,
                            fontSize: { xs: '0.9rem', md: '1.25rem' },
                            color: '#000000', opacity: 0.8,
                            animation: 'fadeInUp 1s ease-out 0.2s both',
                        }}>
                            Welcome back! Here's a real-time look at how your little explorer is learning to make
                            healthier choices every day.
                        </Typography>
                    </Box>
                </Box>

                {/* ── Main Content ── */}
                <Box sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 }, pb: 4, boxSizing: 'border-box' }}>

                    {/* ── Row 1: Summary Stats (flexbox — no negative margins) ── */}
                    <Box sx={{
                        display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3,
                        animation: 'fadeInUp 1s ease-out 0.4s both',
                    }}>
                        {summaryStats.map((stat) => (
                            <Box key={stat.label} sx={{ flex: '1 1 220px', minWidth: 0 }}>
                                <Paper elevation={0} sx={statCardSx}>
                                    {/* Top row: icon + badge */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                                        <Box sx={{ p: 1.2, borderRadius: '12px', bgcolor: stat.iconBg, display: 'flex' }}>
                                            {stat.icon}
                                        </Box>
                                        <Box sx={{
                                            px: 1.2, py: 0.4, borderRadius: '8px',
                                            bgcolor: stat.badgeBg, color: stat.badgeColor,
                                            fontSize: '0.68rem', fontWeight: 800, letterSpacing: 0.5,
                                        }}>
                                            {stat.badge}
                                        </Box>
                                    </Box>
                                    <Typography variant="overline" sx={{
                                        fontWeight: 700, color: '#78909c',
                                        letterSpacing: 1.5, fontSize: '0.62rem', lineHeight: 1,
                                    }}>
                                        {stat.label}
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 900, color: stat.color,
                                        fontSize: { xs: '2.4rem', md: '2.8rem' }, lineHeight: 1,
                                        fontFamily: '"Poppins", sans-serif',
                                    }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#546e7a', fontWeight: 500, fontSize: '0.78rem' }}>
                                        {stat.sub}
                                    </Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>

                    {/* ── Row 2: Game Participation  +  Strengths / Focus (flexbox) ── */}
                    <Box sx={{
                        display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3,
                        alignItems: 'stretch',
                    }}>
                        {/* Game Participation — 58% width on desktop */}
                        <Box sx={{
                            flex: '1 1 400px', minWidth: 0,
                            animation: 'fadeInUp 1s ease-out 0.5s both',
                        }}>
                            <Card elevation={0} sx={{ ...glassCardSx, p: { xs: 2.5, md: 3.5 }, height: '100%' }}>
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
                                        <Box sx={{ p: 1.4, borderRadius: '12px', bgcolor: 'rgba(26,35,126,0.08)', color: '#1a237e', display: 'flex' }}>
                                            <AnalyticsIcon sx={{ fontSize: 26 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 900, color: '#1a237e', fontSize: { xs: '1rem', md: '1.15rem' } }}>
                                                Game Participation
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#90a4ae', fontWeight: 600, fontSize: '0.75rem' }}>
                                                Progress per category · Last 7 days
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {gameStats.map((game) => (
                                            <Box key={game.label}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <Typography sx={{ fontSize: '1.1rem' }}>{game.emoji}</Typography>
                                                        <Typography variant="body2" fontWeight={700} sx={{ color: '#1a237e', fontSize: { xs: '0.82rem', md: '0.9rem' } }}>
                                                            {game.label}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <Box sx={{
                                                            px: 1, py: 0.3, borderRadius: '6px',
                                                            bgcolor: game.bg, color: game.color,
                                                            fontSize: '0.62rem', fontWeight: 700,
                                                        }}>
                                                            {game.plays} plays
                                                        </Box>
                                                        <Typography fontWeight={900} sx={{ color: game.color, fontSize: '1rem', minWidth: 42, textAlign: 'right' }}>
                                                            {game.progress}%
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={game.progress}
                                                    sx={{
                                                        height: 10, borderRadius: 6,
                                                        bgcolor: 'rgba(0,0,0,0.05)',
                                                        '& .MuiLinearProgress-bar': {
                                                            bgcolor: game.color,
                                                            borderRadius: 6,
                                                            boxShadow: `0 0 8px ${game.color}66`,
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* Strengths + Focus Areas — 40% width on desktop */}
                        <Box sx={{
                            flex: '1 1 280px', minWidth: 0,
                            display: 'flex', flexDirection: 'column', gap: 2,
                            animation: 'fadeInUp 1s ease-out 0.6s both',
                        }}>
                            {/* Strengths */}
                            <Card elevation={0} sx={{
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #edf7ed 0%, #c8e6c9 100%)',
                                border: '1px solid rgba(76,175,80,0.15)',
                                boxShadow: '0 8px 32px rgba(76,175,80,0.06)',
                                flex: 1,
                                transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
                                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(76,175,80,0.12)' },
                            }}>
                                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                                        <Avatar sx={{ bgcolor: '#4CAF50', width: 38, height: 38 }}>
                                            <CheckCircleIcon sx={{ fontSize: 20 }} />
                                        </Avatar>
                                        <Typography variant="h6" fontWeight={900} sx={{ color: '#1b5e20', fontSize: { xs: '1rem', md: '1.05rem' }, fontFamily: '"Poppins", sans-serif' }}>
                                            Strengths
                                        </Typography>
                                    </Box>
                                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                        {[
                                            'Excellent at identifying Green foods.',
                                            'Understands portion balance basics.',
                                            'Great at "Smart Swaps" for snacks.',
                                        ].map((item) => (
                                            <Box component="li" key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 1.5 }}>
                                                <StarRoundedIcon sx={{ color: '#4CAF50', mt: 0.2, flexShrink: 0, fontSize: 18 }} />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#2e7d32', fontSize: '0.88rem', lineHeight: 1.5 }}>
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Focus Areas */}
                            <Card elevation={0} sx={{
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                                border: '1px solid rgba(255,152,0,0.15)',
                                boxShadow: '0 8px 32px rgba(255,152,0,0.06)',
                                flex: 1,
                                transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
                                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(255,152,0,0.12)' },
                            }}>
                                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                                        <Avatar sx={{ bgcolor: '#ff9800', width: 38, height: 38 }}>
                                            <ReportProblemIcon sx={{ fontSize: 20 }} />
                                        </Avatar>
                                        <Typography variant="h6" fontWeight={900} sx={{ color: '#e65100', fontSize: { xs: '1rem', md: '1.05rem' }, fontFamily: '"Poppins", sans-serif' }}>
                                            Focus Areas
                                        </Typography>
                                    </Box>
                                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                        {[
                                            'Confusion with whole fruit vs juice.',
                                            'Identifying "Sometimes" drinks.',
                                            'Hidden sugars in packaged snacks.',
                                        ].map((item) => (
                                            <Box component="li" key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 1.5 }}>
                                                <StarRoundedIcon sx={{ color: '#ff9800', mt: 0.2, flexShrink: 0, fontSize: 18 }} />
                                                <Typography variant="body2" fontWeight={600} sx={{ color: '#bf360c', fontSize: '0.88rem', lineHeight: 1.5 }}>
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>

                    {/* ── Row 3: Weekly Coaching Tip ── */}
                    <Box sx={{ animation: 'fadeInUp 1s ease-out 0.7s both' }}>
                        <Box sx={{
                            p: { xs: 3, md: 5 },
                            background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                            borderRadius: '32px',
                            color: 'white',
                            boxShadow: '0 20px 48px rgba(26,35,126,0.25)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Decorative circles */}
                            <Box sx={{
                                position: 'absolute', width: 280, height: 280,
                                background: 'rgba(255,255,255,0.07)', borderRadius: '50%',
                                top: -140, right: -60, zIndex: 0,
                            }} />
                            <Box sx={{
                                position: 'absolute', width: 160, height: 160,
                                background: 'rgba(255,235,59,0.05)', borderRadius: '50%',
                                bottom: -70, left: -40, zIndex: 0,
                            }} />

                            {/* Flexbox row instead of Grid (avoids negative margins inside a rounded box) */}
                            <Box sx={{
                                display: 'flex', flexWrap: 'wrap', gap: 3,
                                alignItems: 'center', position: 'relative', zIndex: 1,
                            }}>
                                {/* Icon */}
                                <Box sx={{ flexShrink: 0 }}>
                                    <Box sx={{
                                        width: 80, height: 80, borderRadius: '20px',
                                        bgcolor: 'rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(10px)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                    }}>
                                        <TipsAndUpdatesIcon sx={{ fontSize: 40, color: '#ffeb3b' }} />
                                    </Box>
                                </Box>

                                {/* Text */}
                                <Box sx={{ flex: '1 1 260px', minWidth: 0 }}>
                                    <Typography variant="overline" sx={{
                                        letterSpacing: 3, fontWeight: 800, color: '#ffeb3b',
                                        mb: 0.5, display: 'block', fontSize: { xs: '0.65rem', md: '0.75rem' },
                                    }}>
                                        WEEKLY COACHING TIP
                                    </Typography>
                                    <Typography variant="h5" sx={{
                                        fontWeight: 900, mb: 1.5,
                                        fontSize: { xs: '1.15rem', md: '1.5rem' },
                                        fontFamily: '"Poppins", sans-serif',
                                        color: 'white',
                                    }}>
                                        Unlock the Magic of Water 💧
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        opacity: 0.9, lineHeight: 1.75,
                                        fontSize: { xs: '0.85rem', md: '1rem' }, maxWidth: 660,
                                        color: 'white',
                                    }}>
                                        "Your child understands snacks well but struggles with identifying hidden sugars in drinks. Try focusing on{' '}
                                        <Box component="strong" sx={{ color: '#ffeb3b' }}>Water-based challenges</Box>{' '}
                                        this week to help them learn the difference between Anytime and Sometimes beverages."
                                    </Typography>
                                </Box>

                                {/* Age badge */}
                                <Box sx={{ flexShrink: 0 }}>
                                    <Box sx={{
                                        p: 2.5, borderRadius: '16px',
                                        bgcolor: 'rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        textAlign: 'center', minWidth: 110,
                                    }}>
                                        <Typography variant="caption" sx={{
                                            fontWeight: 800, letterSpacing: 1.5, opacity: 0.65,
                                            fontSize: '0.62rem', display: 'block', mb: 0.5,
                                        }}>
                                            FOCUS AGE
                                        </Typography>
                                        <Typography variant="h4" fontWeight={900} sx={{ lineHeight: 1.1, color: 'white' }}>
                                            6–8
                                        </Typography>
                                        <Typography variant="caption" sx={{ opacity: 0.6, fontSize: '0.7rem' }}>
                                            Years old
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default ParentDashboard