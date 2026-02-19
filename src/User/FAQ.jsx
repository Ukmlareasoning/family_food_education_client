import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery, Button, Grid } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom'

const faqHeroSx = {
    pt: { xs: 8, md: 12 },
    pb: { xs: 6, md: 8 },
    textAlign: 'center',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(227,242,253,0.4) 100%)',
}

const accordionSx = {
    boxShadow: 'none',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '12px !important',
    mb: 2,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:before': { display: 'none' },
    '&.Mui-expanded': {
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        borderColor: 'primary.light',
        transform: 'translateY(-2px)',
    },
}

const faqs = [
    {
        question: "How do I scan a snack?",
        answer: "Simply open the 'Please Scan' app, tap the camera icon, and point your phone at the barcode on the snack's packaging. The app will automatically identify the product and show you its nutritional information."
    },
    {
        question: "What information will I see after scanning?",
        answer: "You'll see a clear breakdown of calories, sugar, fat, and potential allergens. We use a 'friendly' scoring system to help you understand if the snack is a great choice or something to enjoy in moderation."
    },
    {
        question: "Can I set specific allergen alerts?",
        answer: "Yes! In your profile settings, you can select specific allergens like nuts, dairy, or gluten. The app will then prominently flag any scanned snacks that contain those ingredients."
    },
    {
        question: "How does the rewards system work for kids?",
        answer: "Kids earn 'Healthy Stars' for scanning fruit and vegetable snacks. These stars can be used to unlock fun badges and achievements within the app, making healthy choices an interactive game."
    },
    {
        question: "Is the app free to use?",
        answer: "The basic scanning and nutritional info features are completely free. We also offer a 'Family Plus' subscription that includes personalized meal planning and advanced growth tracking for multiple children."
    },
    {
        question: "What should I do if a barcode isn't recognized?",
        answer: "If a barcode isn't in our database yet, you can manually enter the product name or take a photo of the nutrition label. Our team will verify and add it to the database within 24 hours."
    }
]

function FAQ() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

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
                <Box sx={faqHeroSx}>
                    <Container maxWidth="md">
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', p: 1.5, bgcolor: 'secondary.light', borderRadius: '50%', mb: 2, color: 'white' }}>
                            <HelpOutlineIcon fontSize="large" />
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            color: 'primary.main',
                            fontWeight: 800
                        }}>
                            Frequently Asked <Box component="span" sx={{ color: 'secondary.main' }}>Questions</Box>
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            color: 'text.secondary',
                            maxWidth: '700px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}>
                            Everything you need to know about navigating the world of healthy snacks with Please Scan.
                        </Typography>
                    </Container>
                </Box>

                {/* FAQ Section */}
                <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, flex: 1 }}>
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            sx={accordionSx}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                                sx={{ px: 3, py: 1 }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', color: expanded === `panel${index}` ? 'primary.main' : 'text.primary' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    {/* Contact Section */}
                    <Box sx={{
                        mt: 8,
                        p: { xs: 4, md: 6 },
                        background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
                        borderRadius: 6,
                        color: 'white',
                        textAlign: 'center',
                        boxShadow: '0 12px 32px rgba(76, 175, 80, 0.25)'
                    }}>
                        <ContactSupportIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
                        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: 'white' }}>Still Have Questions?</Typography>
                        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: '500px', mx: 'auto', color: 'white' }}>
                            We're here to help! Send us a message and our team will get back to you as soon as possible.
                        </Typography>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            sx={{
                                bgcolor: 'white',
                                color: 'secondary.main',
                                fontWeight: 700,
                                px: 6,
                                py: 1.5,
                                borderRadius: 999,
                                '&:hover': { bgcolor: 'primary.main', color: 'white' },
                                transition: 'all 0.3s ease'
                            }}
                            endIcon={<ArrowForwardIcon />}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Container>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default FAQ
