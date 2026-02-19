import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme, useMediaQuery, Chip } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import { placeholders } from '../utils/placeholderImages'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PersonIcon from '@mui/icons-material/Person'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { Link } from 'react-router-dom'

const blogHeroSx = {
    pt: { xs: 8, md: 12 },
    pb: { xs: 6, md: 8 },
    textAlign: 'center',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(227,242,253,0.4) 100%)',
}

const blogCardSx = {
    height: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    borderRadius: 4,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.05)',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
        borderColor: 'primary.light',
    }
}

export const blogPosts = [
    {
        id: 1,
        title: 'Healthy Snacking for Kids: A Complete Guide',
        excerpt: 'Discover easy ways to introduce nutritional snacks into your children\'s daily routine without the fuss. This guide covers everything from fruit-based treats to homemade granola bars that your kids will actually love.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
        date: 'Oct 15, 2023',
        author: 'Dr. Sarah Smith',
        category: 'Nutrition',
        content: 'Full content for post 1...'
    },
    {
        id: 2,
        title: 'Understanding Sugar Labels on Common Snacks',
        excerpt: 'Learn how to decode complex nutrition labels and identify hidden sugars in your favorite grocery items. We break down the technical terms into simple concepts every parent can understand.',
        image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800',
        date: 'Oct 10, 2023',
        author: 'Mark Johnson',
        category: 'Education',
        content: 'Full content for post 2...'
    },
    {
        id: 3,
        title: 'Interactive Learning: Making Food Fun',
        excerpt: 'How to use games and interactive apps to teach your kids about the importance of balanced diets. Gamification isn\'t just for video games—it can be a powerful tool for healthy living too.',
        image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800',
        date: 'Oct 05, 2023',
        author: 'Emily Chen',
        category: 'Family',
        content: 'Full content for post 3...'
    },
]

function Blog() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                {/* Spacer for fixed Header */}
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                {/* Hero Section */}
                <Box sx={blogHeroSx}>
                    <Container maxWidth="md">
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 800
                        }}>
                            Our <Box component="span" sx={{ color: 'secondary.main' }}>Blog</Box>
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: 'text.secondary',
                            maxWidth: '700px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}>
                            Insights, tips, and stories to help your family make better food choices together.
                        </Typography>
                    </Container>
                </Box>

                {/* Blog Grid */}
                <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, flex: 1 }}>
                    <Grid container spacing={4}>
                        {blogPosts.map((post) => (
                            <Grid item xs={12} key={post.id}>
                                <Card sx={blogCardSx}>
                                    <Box sx={{
                                        position: 'relative',
                                        width: { xs: '100%', md: '40%' },
                                        minHeight: { xs: '200px', md: 'auto' }
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover'
                                            }}
                                            image={post.image}
                                            alt={post.title}
                                        />
                                        <Chip
                                            label={post.category}
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                left: 16,
                                                bgcolor: 'rgba(255,255,255,0.9)',
                                                color: 'primary.main',
                                                fontWeight: 700,
                                                backdropFilter: 'blur(4px)'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{
                                        p: { xs: 3, md: 4 },
                                        width: { xs: '100%', md: '60%' },
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <Box sx={{ display: 'flex', gap: 3, mb: 1.5 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <CalendarMonthIcon sx={{ fontSize: 18, color: 'text.disabled' }} />
                                                <Typography variant="body2" fontWeight={500}>{post.date}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <PersonIcon sx={{ fontSize: 18, color: 'text.disabled' }} />
                                                <Typography variant="body2" fontWeight={500}>{post.author}</Typography>
                                            </Box>
                                        </Box>
                                        <Typography gutterBottom variant="h4" component="h2" sx={{
                                            fontWeight: 800,
                                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                                            mb: 2,
                                            color: 'primary.main'
                                        }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{
                                            mb: 4,
                                            lineHeight: 1.7,
                                            fontSize: '1rem'
                                        }}>
                                            {post.excerpt}
                                        </Typography>
                                        <Box sx={{ mt: 'auto' }}>
                                            <Button
                                                component={Link}
                                                to={`/blog/${post.id}`}
                                                variant="contained"
                                                color="primary"
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    fontWeight: 700,
                                                    px: 4,
                                                    py: 1.25,
                                                    borderRadius: 999,
                                                    textTransform: 'none',
                                                    boxShadow: '0 4px 14px rgba(26, 35, 126, 0.3)',
                                                    '&:hover': {
                                                        transform: 'translateX(4px)',
                                                        boxShadow: '0 6px 18px rgba(26, 35, 126, 0.4)',
                                                    },
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination/Load More */}
                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderRadius: 999,
                                px: 6,
                                py: 1.5,
                                fontWeight: 700,
                                borderWidth: '2px',
                                '&:hover': {
                                    borderWidth: '2px',
                                }
                            }}
                        >
                            Load More Posts
                        </Button>
                    </Box>
                </Container>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default Blog
