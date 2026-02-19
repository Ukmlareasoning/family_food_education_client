import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Container, Typography, Button, Divider, useTheme, useMediaQuery, Chip, IconButton } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PersonIcon from '@mui/icons-material/Person'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ShareIcon from '@mui/icons-material/Share'
import { blogPosts } from './Blog'

function BlogPostDetails() {
    const { id } = useParams()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    // Find the post by ID
    const post = blogPosts.find(p => p.id === parseInt(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!post) {
        return (
            <FoodPatternBackground>
                <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Header />
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h4">Post not found</Typography>
                    </Box>
                    <Footer />
                </Box>
            </FoodPatternBackground>
        )
    }

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                {/* Spacer for fixed Header */}
                <Box sx={{ height: { xs: 56, sm: 64 } }} />

                <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 }, pb: 10, flex: 1 }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={9} lg={8}>
                            {/* Back Button */}
                            <Button
                                component={Link}
                                to="/blog"
                                startIcon={<ArrowBackIcon />}
                                sx={{ mb: 4, textTransform: 'none', fontWeight: 600, color: 'text.secondary' }}
                            >
                                Back to Blog
                            </Button>

                            {/* Header Image */}
                            <Box sx={{
                                width: '100%',
                                height: { xs: '250px', sm: '400px', md: '500px' },
                                borderRadius: 4,
                                overflow: 'hidden',
                                mb: 4,
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>

                            {/* Meta Info */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
                                <Chip
                                    label={post.category}
                                    color="secondary"
                                    sx={{ fontWeight: 700, borderRadius: 2 }}
                                />
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                                    <CalendarMonthIcon sx={{ fontSize: 20 }} />
                                    <Typography variant="body2" fontWeight={500}>{post.date}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                                    <PersonIcon sx={{ fontSize: 20 }} />
                                    <Typography variant="body2" fontWeight={500}>{post.author}</Typography>
                                </Box>
                            </Box>

                            {/* Title */}
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.2rem', md: '3.5rem' },
                                fontWeight: 800,
                                mb: 4,
                                lineHeight: 1.2
                            }}>
                                {post.title}
                            </Typography>

                            {/* Content */}
                            <Box sx={{
                                typography: 'body1',
                                color: 'text.primary',
                                lineHeight: 1.8,
                                '& p': { mb: 3 },
                                '& h2': { mt: 6, mb: 3, fontSize: '2rem', fontWeight: 700, color: 'primary.main' }
                            }}>
                                <Typography variant="body1" sx={{ fontSize: '1.25rem', mb: 4, fontWeight: 500, color: 'text.secondary' }}>
                                    {post.excerpt}
                                </Typography>
                                <Divider sx={{ my: 4 }} />
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Typography variant="h2">Healthy Eating Habits</Typography>
                                <Typography variant="body1">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                <Typography variant="body1">
                                    Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Mattis nunc sed blandit libero volutpat. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.
                                </Typography>
                            </Box>

                            {/* Share Section */}
                            <Box sx={{
                                mt: 8,
                                p: 4,
                                bgcolor: 'rgba(255,255,255,0.6)',
                                borderRadius: 4,
                                border: '1px solid rgba(0,0,0,0.05)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Typography variant="h6" fontWeight={700} sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <ShareIcon /> Share this article
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                    <IconButton sx={{ bgcolor: '#3b5998', color: 'white', '&:hover': { bgcolor: '#2d4373', transform: 'scale(1.1)' }, transition: 'all 0.2s' }} aria-label="Share on Facebook"><FacebookIcon /></IconButton>
                                    <IconButton sx={{ bgcolor: '#1da1f2', color: 'white', '&:hover': { bgcolor: '#0d8ecf', transform: 'scale(1.1)' }, transition: 'all 0.2s' }} aria-label="Share on Twitter"><TwitterIcon /></IconButton>
                                    <IconButton sx={{ bgcolor: '#0077b5', color: 'white', '&:hover': { bgcolor: '#005885', transform: 'scale(1.1)' }, transition: 'all 0.2s' }} aria-label="Share on LinkedIn"><LinkedInIcon /></IconButton>
                                </Box>
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

// Import Grid explicitly since I used it but forgot to include in import
import { Grid } from '@mui/material'

export default BlogPostDetails
