import { Box, Container, Typography, Button, Grid, Card, CardContent, Paper } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import { placeholders } from '../utils/placeholderImages'
import heroImg from '../assets/hero-img.png'
import howItWorksImg from '../assets/how-it-works.png'
import view1Img from '../assets/view-1.png'
import view2Img from '../assets/view-2.png'
import view3Img from '../assets/view-3.png'
import welcomeImg from '../assets/welcome.png'
import trackProgressImg from '../assets/track-progress.png'
import GetAppIcon from '@mui/icons-material/GetApp'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import QrCodeIcon from '@mui/icons-material/QrCode'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded'
import BarChartIcon from '@mui/icons-material/BarChart'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SchoolIcon from '@mui/icons-material/School'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SecurityIcon from '@mui/icons-material/Security'
import LockIcon from '@mui/icons-material/Lock'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import RestaurantIcon from '@mui/icons-material/Restaurant'

const sectionTitleSx = {
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 700,
  fontSize: { xs: '1.75rem', md: '2.25rem' },
  color: '#1a237e',
  textAlign: 'center',
  mb: 1,
}
const sectionSubtitleSx = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '1rem',
  fontWeight: 400,
  color: '#37474f',
  textAlign: 'center',
  mb: 5,
}
const cardTitleSx = {
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 700,
  fontSize: '1.15rem',
  color: '#1a237e',
}
const cardDescSx = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '0.9rem',
  color: '#546e7a',
}
const greenButtonSx = {
  fontFamily: '"Poppins", sans-serif',
  backgroundColor: '#4CAF50',
  color: 'white',
  px: 4,
  py: 1.75,
  borderRadius: 3,
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
  '&:hover': { backgroundColor: '#43a047' },
}
const orangeButtonSx = {
  fontFamily: '"Poppins", sans-serif',
  backgroundColor: '#ff9500',
  color: 'white',
  borderRadius: 3,
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 14px rgba(255,149,0,0.35)',
  '&:hover': { backgroundColor: '#e68600' },
}

function Home() {
  return (
    <FoodPatternBackground>
      <Box sx={{ minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
        <Header />
        {/* Spacer so content is not hidden under fixed header */}
        <Box sx={{ height: { xs: 56, sm: 64 } }} />

        {/* Hero – light blue sky gradient, headline, Download + iOS/Android + QR, Scan a Snack! oval button, illustration */}
        <Box
          sx={{
            background: 'linear-gradient(180deg, #e3f2fd 0%, #bbdefb 35%, #90caf9 70%, #e8f5e9 100%)',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
        <Container
          maxWidth="lg"
          sx={{
            pt: { xs: 4, md: 6 },
            pb: { xs: 4, md: 5 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={4} alignItems="flex-start" sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            {/* Left column: headline, subheadline, Download the App, iOS/Android, QR */}
            <Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 1 }, animation: 'heroFadeInUp 0.8s ease-out forwards' }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#29387D',
                  mb: 2,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.15rem' },
                  }}
                >
                  Make snack choices
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    fontSize: { xs: '1.9rem', sm: '2.25rem', md: '2.6rem' },
                  }}
                >
                  simple for families
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                  color: '#4F5C80',
                  fontWeight: 400,
                  lineHeight: 1.45,
                  mb: 4,
                }}
              >
                Scan snacks, learn nutrition facts, and make healthy choices fun!
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 2 }}>
                {/* Left: Download + iOS/Android – puffy 3D style, orange + light blue gradients */}
                <Box>
                  <Button
                    variant="contained"
                    startIcon={
                      <Box sx={{ bgcolor: 'rgba(255,255,255,0.35)', borderRadius: 1.5, p: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GetAppIcon sx={{ fontSize: 22, color: 'white' }} />
                      </Box>
                    }
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      background: 'linear-gradient(180deg, #ffb347 0%, #ff9a00 40%, #E08C00 100%)',
                      color: 'white',
                      minWidth: { xs: 250, sm: 270, md: 290 },
                      px: 4,
                      py: 2,
                      borderRadius: 3,
                      fontSize: { xs: '1.1rem', md: '1.15rem' },
                      fontWeight: 700,
                      textTransform: 'none',
                      boxShadow: '0 4px 14px rgba(224,140,0,0.35), 0 2px 4px rgba(0,0,0,0.1)',
                      '&:hover': { background: 'linear-gradient(180deg, #ff9a00 0%, #d97d00 100%)', boxShadow: '0 6px 18px rgba(224,140,0,0.4)' },
                    }}
                  >
                    Download the App
                  </Button>
                  <Box sx={{ display: 'flex', gap: 1.5, mt: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      startIcon={<AppleIcon sx={{ fontSize: 22, color: 'white' }} />}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        background: 'linear-gradient(180deg, #b3e0ff 0%, #6eb5e0 50%, #5ba3d0 100%)',
                        color: 'white',
                        minWidth: 118,
                        px: 2.5,
                        py: 1.25,
                        borderRadius: 3,
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        boxShadow: '0 3px 10px rgba(91,163,208,0.4), 0 1px 3px rgba(0,0,0,0.08)',
                        '&:hover': { background: 'linear-gradient(180deg, #a0d8f7 0%, #4a9ac9 100%)' },
                      }}
                    >
                      iOS
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<AndroidIcon sx={{ fontSize: 22, color: 'white' }} />}
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        background: 'linear-gradient(180deg, #b3e0ff 0%, #6eb5e0 50%, #5ba3d0 100%)',
                        color: 'white',
                        minWidth: 118,
                        px: 2.5,
                        py: 1.25,
                        borderRadius: 3,
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        boxShadow: '0 3px 10px rgba(91,163,208,0.4), 0 1px 3px rgba(0,0,0,0.08)',
                        '&:hover': { background: 'linear-gradient(180deg, #a0d8f7 0%, #4a9ac9 100%)' },
                      }}
                    >
                      Android
                    </Button>
                  </Box>
                </Box>

                {/* Right: Barcode/QR card – white rounded card, two text rows + large QR */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: 2,
                    bgcolor: 'white',
                    px: 2.5,
                    py: 2,
                    borderRadius: 2.5,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                    minWidth: { xs: 240, sm: 280 },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, justifyContent: 'center', pr: 1 }}>
                    {/* Top row: square + circle icon + SGCE-TED / CBGWICAD */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box sx={{ flexShrink: 0, mt: 0.25 }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="1" width="18" height="18" rx="2" stroke="#1a237e" strokeWidth="1.5" fill="none"/><circle cx="10" cy="10" r="4" fill="#1a237e"/></svg>
                      </Box>
                      <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#1a237e', lineHeight: 1.35 }}>
                        SCBE TED!<br />CBCACRD
                      </Typography>
                    </Box>
                    {/* Bottom row: bag/download icon + LCO Remowal / Download! */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box sx={{ flexShrink: 0, mt: 0.25 }}>
                        <GetAppIcon sx={{ fontSize: 20, color: '#1a237e' }} />
                      </Box>
                      <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#1a237e', lineHeight: 1.35 }}>
                        Download!
                      </Typography>
                    </Box>
                  </Box>
                  {/* Dummy barcode image – 1D barcode (vertical bars), right side of card */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 120,
                      height: 56,
                      borderRadius: 1,
                      overflow: 'hidden',
                      bgcolor: '#fff',
                      border: '1px solid #e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="116" height="52" viewBox="0 0 116 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="116" height="52" fill="#fff"/>
                      {/* Dummy 1D barcode – vertical bars (variable width pattern) */}
                      <rect x="2" y="4" width="2" height="44" fill="#111"/>
                      <rect x="6" y="4" width="1" height="44" fill="#111"/>
                      <rect x="9" y="4" width="2" height="44" fill="#111"/>
                      <rect x="13" y="4" width="1" height="44" fill="#111"/>
                      <rect x="16" y="4" width="3" height="44" fill="#111"/>
                      <rect x="21" y="4" width="1" height="44" fill="#111"/>
                      <rect x="24" y="4" width="2" height="44" fill="#111"/>
                      <rect x="28" y="4" width="1" height="44" fill="#111"/>
                      <rect x="31" y="4" width="2" height="44" fill="#111"/>
                      <rect x="35" y="4" width="1" height="44" fill="#111"/>
                      <rect x="38" y="4" width="3" height="44" fill="#111"/>
                      <rect x="43" y="4" width="1" height="44" fill="#111"/>
                      <rect x="46" y="4" width="2" height="44" fill="#111"/>
                      <rect x="50" y="4" width="1" height="44" fill="#111"/>
                      <rect x="53" y="4" width="2" height="44" fill="#111"/>
                      <rect x="57" y="4" width="1" height="44" fill="#111"/>
                      <rect x="60" y="4" width="3" height="44" fill="#111"/>
                      <rect x="65" y="4" width="1" height="44" fill="#111"/>
                      <rect x="68" y="4" width="2" height="44" fill="#111"/>
                      <rect x="72" y="4" width="1" height="44" fill="#111"/>
                      <rect x="75" y="4" width="2" height="44" fill="#111"/>
                      <rect x="79" y="4" width="1" height="44" fill="#111"/>
                      <rect x="82" y="4" width="3" height="44" fill="#111"/>
                      <rect x="87" y="4" width="1" height="44" fill="#111"/>
                      <rect x="90" y="4" width="2" height="44" fill="#111"/>
                      <rect x="94" y="4" width="1" height="44" fill="#111"/>
                      <rect x="97" y="4" width="2" height="44" fill="#111"/>
                      <rect x="101" y="4" width="1" height="44" fill="#111"/>
                      <rect x="104" y="4" width="2" height="44" fill="#111"/>
                      <rect x="108" y="4" width="2" height="44" fill="#111"/>
                      <rect x="112" y="4" width="2" height="44" fill="#111"/>
                      {/* Optional: numbers below barcode (dummy) */}
                      <text x="58" y="50" textAnchor="middle" fill="#111" fontSize="6" fontFamily="monospace">8 123456 789012</text>
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right column: prominent oval "Scan a Snack!" button + hero illustration */}
            <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 2 } }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'flex-end' },
                  justifyContent: 'flex-start',
                  width: '100%',
                  minHeight: { xs: 300, sm: 380, md: 460 },
                  overflow: 'visible',
                  position: 'relative',
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<CameraAltRoundedIcon sx={{ fontSize: 28 }} />}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    background: 'linear-gradient(180deg, #ffb347 0%, #ff9a00 50%, #E08C00 100%)',
                    color: 'white',
                    px: 4,
                    py: 2,
                    borderRadius: 9999,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 6px 20px rgba(224,140,0,0.4), 0 2px 6px rgba(0,0,0,0.1)',
                    border: '2px solid rgba(255,255,255,0.9)',
                    minWidth: { xs: 260, sm: 280 },
                    order: { xs: 2, sm: 1 },
                    '&:hover': { background: 'linear-gradient(180deg, #ff9a00 0%, #d97d00 100%)', boxShadow: '0 8px 24px rgba(224,140,0,0.5)' },
                  }}
                >
                  Scan a Snack!
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    width: '100%',
                    order: { xs: 1, sm: 2 },
                  }}
                >
                  <Box
                    component="img"
                    src={heroImg}
                    alt="Kids with phones and Scan a Snack"
                    sx={{
                      width: '100%',
                      maxWidth: { xs: 440, sm: 560, md: 640 },
                      height: 'auto',
                      borderRadius: 2,
                      objectFit: 'contain',
                      objectPosition: 'right top',
                      display: 'block',
                      animation: 'heroImageFadeIn 1s ease-out 0.3s forwards, heroImageFloat 6s ease-in-out 1.8s infinite',
                      opacity: 0,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        </Box>

        {/* Why Parents Love Please Scan – centered, wider tabs, slightly rounded corners */}
        <Container maxWidth="lg" sx={{ pt: 0.5, pb: 5, position: 'relative', zIndex: 1, px: 2, mx: 'auto' }}>
          <Box sx={{ position: 'relative', textAlign: 'center', mb: 3 }}>
            <StarRoundedIcon sx={{ position: 'absolute', left: { xs: '5%', md: '18%' }, top: 8, fontSize: 20, color: '#ffc107' }} />
            <StarRoundedIcon sx={{ position: 'absolute', right: { xs: '5%', md: '18%' }, top: 8, fontSize: 20, color: '#ffc107' }} />
            <Typography 
              sx={{ 
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.65rem', md: '2rem' },
                color: '#1a237e',
                textAlign: 'center',
                mb: 0.75,
              }}
            >
              Why Parents Love Please Scan
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                fontWeight: 400,
                color: '#5c6bc0',
                textAlign: 'center',
                mb: 0,
              }}
            >
              Kids scan snacks & <Box component="span" sx={{ fontWeight: 700, color: '#1a237e' }}>earn rewards</Box>
            </Typography>
            <StarRoundedIcon sx={{ position: 'absolute', left: { xs: '12%', md: '22%' }, top: 42, fontSize: 14, color: '#ffc107' }} />
            <StarRoundedIcon sx={{ position: 'absolute', right: { xs: '12%', md: '22%' }, top: 42, fontSize: 14, color: '#ffc107' }} />
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {/* Allergen Alerts – icon top-left, title beside it; food illustrations after description */}
            <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
              <Card 
                sx={{ 
                  borderRadius: 4,
                  border: '1px solid rgba(33, 150, 243, 0.2)',
                  bgcolor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                  flex: 1,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
                }}
              >
                <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: '#e8eaf6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <WarningAmberRoundedIcon sx={{ fontSize: 26, color: '#5c6bc0' }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1a237e' }}>
                      Allergen Alerts
                    </Typography>
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.8125rem', color: '#546e7a', mb: 1.5 }}>
                  Avoid allergens and stay safe for growing kids.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                    <Box sx={{ fontSize: 26 }}>🥨</Box>
                    <Box sx={{ fontSize: 26 }}>🍎</Box>
                    <Box sx={{ fontSize: 26 }}>🍪</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Nutrition Facts – icon top-left, title beside it; apples after description */}
            <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
              <Card 
                sx={{ 
                  borderRadius: 4,
                  border: '1px solid rgba(33, 150, 243, 0.2)',
                  bgcolor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                  flex: 1,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
                }}
              >
                <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <AssessmentRoundedIcon sx={{ fontSize: 26, color: '#42a5f5' }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1a237e' }}>
                      Nutrition Facts
                    </Typography>
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.8125rem', color: '#546e7a', mb: 1.5 }}>
                    Calories, sugar & more made easy to understand.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                    <Box sx={{ fontSize: 26 }}>🍏</Box>
                    <Box sx={{ fontSize: 26 }}>🍎</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Weekly Insights – icon top-left, title beside it; bar chart after description */}
            <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
              <Card 
                sx={{ 
                  borderRadius: 4,
                  border: '1px solid rgba(33, 150, 243, 0.2)',
                  bgcolor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                  flex: 1,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
                }}
              >
                <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <BarChartIcon sx={{ fontSize: 26, color: '#66bb6a' }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1a237e' }}>
                      Weekly Insights
                    </Typography>
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.8125rem', color: '#546e7a', mb: 1.5 }}>
                  Track weekly progress and celebrate improvements.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', gap: 0.5, height: 32 }}>
                    <Box sx={{ width: 8, height: 18, bgcolor: '#ffeb3b', borderRadius: 0.5 }} />
                    <Box sx={{ width: 8, height: 24, bgcolor: '#ff9800', borderRadius: 0.5 }} />
                    <Box sx={{ width: 8, height: 14, bgcolor: '#42a5f5', borderRadius: 0.5 }} />
                    <Box sx={{ width: 8, height: 28, bgcolor: '#ab47bc', borderRadius: 0.5 }} />
                    <Box sx={{ width: 8, height: 20, bgcolor: '#5c6bc0', borderRadius: 0.5 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{
                fontFamily: '"Poppins", sans-serif',
                background: 'linear-gradient(180deg, #66bb6a 0%, #4CAF50 50%, #43a047 100%)',
                color: 'white',
                px: 5,
                py: 1.75,
                borderRadius: 9999,
                fontSize: '1.05rem',
                fontWeight: 700,
                textTransform: 'none',
                border: '2px solid rgba(255,255,255,0.9)',
                boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
                '&:hover': { background: 'linear-gradient(180deg, #57a35a 0%, #388e3c 100%)', boxShadow: '0 6px 18px rgba(76,175,80,0.45)' },
              }}
            >
              Go to Dashboard
            </Button>
          </Box>
        </Container>

        {/* How It Works – 2 cards (Scan a Snack, Understand Nutrition) + illustration right, oval button below */}
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Typography sx={{ ...sectionTitleSx, mb: 4, textAlign: 'center' }}>How It Works</Typography>

          <Grid container spacing={3} alignItems="stretch" justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: 4, border: '1px solid rgba(33, 150, 243, 0.2)', bgcolor: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)', p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ width: 64, height: 64, borderRadius: 2, bgcolor: '#e3f2fd', mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CameraAltRoundedIcon sx={{ fontSize: 32, color: '#1976d2' }} />
                </Box>
                <Typography sx={{ ...cardTitleSx, fontSize: '1.1rem', mb: 0.5 }}>Scan a Snack</Typography>
                <Typography sx={{ ...cardDescSx, fontSize: '0.9rem' }}>Avoid allergens and stay safe.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: 4, border: '1px solid rgba(33, 150, 243, 0.2)', bgcolor: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)', p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ width: 64, height: 64, borderRadius: 2, bgcolor: '#e3f2fd', mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AssessmentRoundedIcon sx={{ fontSize: 32, color: '#1976d2' }} />
                </Box>
                <Typography sx={{ ...cardTitleSx, fontSize: '1.1rem', mb: 0.5 }}>Understand Nutrition</Typography>
                <Typography sx={{ ...cardDescSx, fontSize: '0.9rem' }}>Instant calories, sugar, & more.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                component="img"
                src={howItWorksImg}
                alt="How it works – parent with laptop and tablet"
                sx={{
                  width: '100%',
                  maxWidth: 380,
                  maxHeight: 260,
                  objectFit: 'contain',
                  borderRadius: 4,
                  display: 'block',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                background: 'linear-gradient(90deg, #4CAF50 0%, #66bb6a 50%, #81c784 100%)',
                color: 'white',
                px: 5,
                py: 1.75,
                borderRadius: 9999,
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'none',
                border: '2px solid rgba(255,255,255,0.9)',
                boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
                '&:hover': { background: 'linear-gradient(90deg, #388e3c 0%, #4CAF50 100%)', boxShadow: '0 6px 18px rgba(76,175,80,0.45)' },
              }}
            >
              Explore All Features
            </Button>
          </Box>
        </Container>

        {/* View the App in Action – overlapping phone screens with circular arrows */}
        <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 5 }}>
            <StarRoundedIcon sx={{ fontSize: 28, color: '#ffeb3b' }} />
            <Typography sx={sectionTitleSx}>View the App in Action</Typography>
            <StarRoundedIcon sx={{ fontSize: 28, color: '#ffeb3b' }} />
          </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' }, gap: { xs: 4, md: 2 } }}>
            {/* Left carousel arrow */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', alignSelf: 'center', mr: 0.5 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#e3f2fd', border: '2px solid #90caf9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#bbdefb' } }}>
                <ChevronLeftIcon sx={{ fontSize: 24, color: '#1976d2' }} />
              </Box>
            </Box>
            {/* First Feature: Scan a Snack */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: { xs: '1 1 100%', md: '0 0 auto' }, maxWidth: { xs: '100%', md: 340 } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 320,
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: '#e3f2fd',
                  border: '2px solid #90caf9',
                  boxShadow: '0 4px 16px rgba(33,150,243,0.15)',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={view1Img}
                  alt="Scan a Snack"
                  sx={{
                    width: '100%',
                    minHeight: 150,
                    objectFit: 'cover',
                    borderRadius: 2,
                    display: 'block',
                  }}
                />
              </Box>
              <Button
                variant="contained"
                startIcon={<CameraAltRoundedIcon />}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  background: 'linear-gradient(135deg, #ff9500 0%, #ff6b35 100%)',
                  color: 'white',
                  px: 3,
                  py: 1.25,
                  borderRadius: 6,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  border: '2px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 4px 12px rgba(255,149,0,0.5)',
                  mb: 1,
                  width: '100%',
                  maxWidth: 300,
                  '&:hover': { background: 'linear-gradient(135deg, #e68600 0%, #e55a2b 100%)' },
                }}
              >
                Scan a Snack!
              </Button>
              <Typography sx={{ ...cardDescSx, fontSize: '0.8rem', textAlign: 'center', width: '100%', maxWidth: 300, mx: 'auto' }}>
                Stamps scan itto apps for-ama stertios.
              </Typography>
            </Box>

            {/* Circular Navigation Arrow 1 */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', mb: 2 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#e3f2fd', border: '2px solid #90caf9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#bbdefb' } }}>
                <ChevronRightIcon sx={{ fontSize: 24, color: '#1976d2' }} />
              </Box>
            </Box>

            {/* Second Feature: Understand Nutrition */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: { xs: '1 1 100%', md: '0 0 auto' }, maxWidth: { xs: '100%', md: 340 } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 320,
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: '#e3f2fd',
                  border: '2px solid #90caf9',
                  boxShadow: '0 4px 16px rgba(33,150,243,0.15)',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={view2Img}
                  alt="Understand Nutrition"
                  sx={{
                    width: '100%',
                    minHeight: 150,
                    objectFit: 'cover',
                    borderRadius: 2,
                    display: 'block',
                  }}
                />
              </Box>
              <Button
                variant="contained"
                startIcon={<CheckCircleIcon sx={{ fontSize: 20 }} />}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
                  color: 'white',
                  px: 3,
                  py: 1.25,
                  borderRadius: 6,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  border: '2px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 4px 12px rgba(41,182,246,0.4)',
                  mb: 1,
                  width: '100%',
                  maxWidth: 300,
                  '&:hover': { background: 'linear-gradient(135deg, #29b6f6 0%, #039be5 100%)' },
                }}
              >
                Understand Nutrition
              </Button>
              <Typography sx={{ ...cardDescSx, fontSize: '0.8rem', textAlign: 'center', width: '100%', maxWidth: 300, mx: 'auto' }}>
                Seanmess fast true work fious, find-scanings & nigsair veloure.
              </Typography>
            </Box>

            {/* Circular Navigation Arrow 2 */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', mb: 2 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#e3f2fd', border: '2px solid #90caf9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#bbdefb' } }}>
                <ChevronRightIcon sx={{ fontSize: 24, color: '#1976d2' }} />
              </Box>
            </Box>

            {/* Third Feature: Earn & Track Progress */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: { xs: '1 1 100%', md: '0 0 auto' }, maxWidth: { xs: '100%', md: 340 } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 320,
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: '#e3f2fd',
                  border: '2px solid #90caf9',
                  boxShadow: '0 4px 16px rgba(33,150,243,0.15)',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={view3Img}
                  alt="Earn & Track Progress"
                  sx={{
                    width: '100%',
                    minHeight: 150,
                    objectFit: 'cover',
                    borderRadius: 2,
                    display: 'block',
                  }}
                />
              </Box>
              <Button
                variant="contained"
                startIcon={<EmojiEventsIcon />}
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 100%)',
                  color: 'white',
                  px: 3,
                  py: 1.25,
                  borderRadius: 6,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  border: '2px solid rgba(255,255,255,0.9)',
                  boxShadow: '0 4px 12px rgba(33,150,243,0.5)',
                  mb: 1,
                  width: '100%',
                  maxWidth: 300,
                  '&:hover': { background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)' },
                }}
              >
                Earn & Track Progress
              </Button>
              <Typography sx={{ ...cardDescSx, fontSize: '0.8rem', textAlign: 'center', width: '100%', maxWidth: 300, mx: 'auto' }}>
                Kese your eerors a saltaasheads, tricights unsign up choices.
              </Typography>
            </Box>
            {/* Right carousel arrow */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', alignSelf: 'center', ml: 0.5 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#e3f2fd', border: '2px solid #90caf9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { bgcolor: '#bbdefb' } }}>
                <ChevronRightIcon sx={{ fontSize: 24, color: '#1976d2' }} />
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Safe, Fun & Easy to Use! – pill-shaped tabs, icon left + text right */}
        <Box
          sx={{
            py: 8,
            position: 'relative',
            zIndex: 1,
            background: 'linear-gradient(135deg, rgba(227,242,253,0.6) 0%, rgba(255,249,196,0.5) 35%, rgba(232,245,233,0.4) 70%, rgba(248,231,243,0.3) 100%)',
            borderRadius: 0,
          }}
        >
          <Container maxWidth="lg">
            <Typography sx={{ ...sectionTitleSx, mb: 4 }}>Safe, Fun & Easy to Use!</Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 4,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 280 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 3,
                    py: 2,
                    bgcolor: 'white',
                    borderRadius: 9999,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(33, 150, 243, 0.2)',
                    minHeight: 56,
                    width: '100%',
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 32, color: '#e53935', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1a237e' }}>
                    Kid-Friendly Design
                  </Typography>
                </Box>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#546e7a', textAlign: 'center', mt: 1.5, px: 0.5 }}>
                  Colorful, simple interface made for little ones to explore safely.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 280 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 3,
                    py: 2,
                    bgcolor: 'white',
                    borderRadius: 9999,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(33, 150, 243, 0.2)',
                    minHeight: 56,
                    width: '100%',
                  }}
                >
                  <SecurityIcon sx={{ fontSize: 32, color: '#5eb8e6', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1a237e' }}>
                    Privacy-First Approach
                  </Typography>
                </Box>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#546e7a', textAlign: 'center', mt: 1.5, px: 0.5 }}>
                  We never sell data. Your family's information stays private and secure.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 280 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 3,
                    py: 2,
                    bgcolor: 'white',
                    borderRadius: 9999,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(33, 150, 243, 0.2)',
                    minHeight: 56,
                    width: '100%',
                  }}
                >
                  <LockIcon sx={{ fontSize: 32, color: '#78909c', flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1a237e' }}>
                    Safe & Secure
                  </Typography>
                </Box>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.9rem', color: '#546e7a', textAlign: 'center', mt: 1.5, px: 0.5 }}>
                  Parent controls and age-appropriate content for peace of mind.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Welcome to Scan a Snack! (Page 2 hero) */}
        <Box sx={{ py: 10, position: 'relative' }}>
          <Container maxWidth="lg" sx={{ pr: { xs: 2, md: 0 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                {/* Logo: gradient icon + Scan a Snack! */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #ffeb3b 0%, #ff9500 50%, #42a5f5 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    😊
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#1a237e' }}>
                    Scan a Snack!
                  </Typography>
                </Box>
                {/* Two-line heading: Welcome to / Scan a Snack! */}
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#1a237e', lineHeight: 1.2 }}>
                  Welcome to
                </Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: { xs: '2rem', md: '2.75rem' }, color: '#1a237e', mb: 2, lineHeight: 1.2 }}>
                  Scan a Snack!
                </Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', color: '#546e7a', mb: 4, maxWidth: 480 }}>
                  Make snack time fun and healthy for your kids by scanning and learning all about their tasty treats!
                </Typography>
                {/* Pill-style CTA: gradient, highly rounded, camera icon at end */}
                <Button
                  variant="contained"
                  endIcon={<CameraAltRoundedIcon sx={{ fontSize: 22 }} />}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    background: 'linear-gradient(90deg, #ff9800 0%, #ff6b35 100%)',
                    color: 'white',
                    px: 4,
                    py: 1.75,
                    borderRadius: 9999,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 6px 20px rgba(255,107,53,0.4)',
                    border: 'none',
                    minWidth: 280,
                    '&:hover': { background: 'linear-gradient(90deg, #f57c00 0%, #e55a2b 100%)', boxShadow: '0 8px 24px rgba(255,107,53,0.45)' },
                  }}
                >
                  Try It Now! Scan a
                </Button>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'flex-end', pr: { md: 0 }, overflow: 'visible' }}>
                <Box
                  component="img"
                  src={welcomeImg}
                  alt="Scan a Snack app with food illustrations"
                  sx={{
                    maxWidth: 580,
                    width: '85%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 1.5,
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))',
                    ml: { md: 'auto' },
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* How Does It Work? */}
        <Box sx={{ py: 8, position: 'relative' }}>
          <Container maxWidth="lg">
            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' }, color: '#1E1E4F', textAlign: 'center', mb: 1 }}>
              How Does It Work?
            </Typography>
            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', fontWeight: 400, color: '#6E6E8A', textAlign: 'center', mb: 5 }}>
              Simple, engaging, and kid-friendly.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4} sx={{ minWidth: 0, display: 'flex' }}>
                <Card sx={{ borderRadius: 1.5, p: 3, height: '100%', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: 'none', bgcolor: 'white', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ width: 88, height: 88, borderRadius: '50%', bgcolor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2, boxShadow: '0 0 0 6px rgba(33,150,243,0.2)' }}>
                    <QrCodeIcon sx={{ fontSize: 48, color: '#1976d2' }} />
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#1E1E4F', mb: 1.5, textAlign: 'center', width: '100%' }}>Scan Snacks</Typography>
                  <Box sx={{ width: '100%', maxWidth: 280, minWidth: 0, textAlign: 'center', mx: 'auto' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.95rem', color: '#6E6E8A', lineHeight: 1.5, whiteSpace: 'normal', display: 'block' }}>Use your phone to scan the barcode of any snack and instantly get info on its nutrition.</Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} sx={{ minWidth: 0, display: 'flex' }}>
                <Card sx={{ borderRadius: 1.5, p: 3, height: '100%', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: 'none', bgcolor: 'white', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ width: 88, height: 88, borderRadius: '50%', bgcolor: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                    <CardGiftcardIcon sx={{ fontSize: 48, color: '#e53935' }} />
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#EF4444', mb: 1.5, textAlign: 'center', width: '100%' }}>Earn Rewards</Typography>
                  <Box sx={{ width: '100%', maxWidth: 280, minWidth: 0, textAlign: 'center', mx: 'auto' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.95rem', color: '#6E6E8A', lineHeight: 1.5, whiteSpace: 'normal', display: 'block' }}>Earn fun points and unlock rewards as you scan more snacks.</Typography>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} sx={{ minWidth: 0, display: 'flex' }}>
                <Card sx={{ borderRadius: 1.5, p: 3, height: '100%', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: 'none', bgcolor: 'white', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ width: 88, height: 88, borderRadius: '50%', bgcolor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                    <EmojiObjectsIcon sx={{ fontSize: 48, color: '#22C55E' }} />
                  </Box>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#22C55E', mb: 1.5, textAlign: 'center', width: '100%' }}>Learn & Play</Typography>
                  <Box sx={{ width: '100%', maxWidth: 280, minWidth: 0, textAlign: 'center', mx: 'auto' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '0.95rem', color: '#6E6E8A', lineHeight: 1.5, whiteSpace: 'normal', display: 'block' }}>Explore fun food facts and play interactive, educational games.</Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Track Progress with Parental Insights – two columns: left text + list, right laptop illustration */}
        <Box sx={{ py: 8, position: 'relative', zIndex: 1, background: 'linear-gradient(180deg, rgba(227,242,253,0.5) 0%, rgba(255,255,255,0.9) 100%)' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: { xs: '1.65rem', md: '2rem' }, color: '#1a237e', mb: 1.5, textAlign: { xs: 'center', md: 'left' } }}>
                  Track Progress with Parental Insights
                </Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', color: '#546e7a', mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                  Get a quick overview of your kids' snacking habits.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <BarChartIcon sx={{ fontSize: 22, color: '#1976d2' }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', color: '#37474f' }}>Track scanned snacks</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <LocalFireDepartmentIcon sx={{ fontSize: 22, color: '#ff9800' }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', color: '#37474f' }}>Monitor average calorie intake</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircleIcon sx={{ fontSize: 22, color: '#4CAF50' }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', color: '#37474f' }}>See if products are kid-friendly</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center' }}>
                <Box
                  component="img"
                  src={trackProgressImg}
                  alt="Parental Insights dashboard on laptop"
                  sx={{
                    maxWidth: '100%',
                    width: { xs: '100%', md: 520 },
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Fun & Educational for Kids – two columns: left heading + subtitle + oval CTA, right 2x2 colored cards */}
        <Box sx={{ py: 8, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' }, color: '#1a237e', mb: 1.5, textAlign: { xs: 'center', md: 'left' } }}>
                  Fun & Educational for Kids
                </Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '1rem', color: '#546e7a', mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                  Learning about snacks has never been this fun!
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'white',
                      background: 'linear-gradient(180deg, #66bb6a 0%, #4CAF50 50%, #43a047 100%)',
                      borderRadius: 9999,
                      px: 4,
                      py: 1.75,
                      textTransform: 'none',
                      boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
                      border: '2px solid rgba(255,255,255,0.9)',
                      '&:hover': { background: 'linear-gradient(180deg, #57a35a 0%, #388e3c 100%)', boxShadow: '0 6px 18px rgba(76,175,80,0.45)' },
                    }}
                  >
                    Get Started Today!
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    p: 2.5,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ background: 'linear-gradient(135deg, #ff7043 0%, #e53935 100%)', color: 'white', borderRadius: 2, p: 2.5, minHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1rem', mb: 1.5 }}>Points & Rewards</Typography>
                        <Box sx={{ display: 'flex', gap: 0.5, fontSize: '1.75rem' }}>💰 ⭐ ⭐</Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ bgcolor: '#4CAF50', color: 'white', borderRadius: 2, p: 2.5, minHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1rem', mb: 1.5 }}>Food Games</Typography>
                        <Box sx={{ display: 'flex', gap: 0.5, fontSize: '1.75rem' }}>🥣 🥕 🎮</Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ background: 'linear-gradient(135deg, #ab47bc 0%, #5c6bc0 100%)', color: 'white', borderRadius: 2, p: 2.5, minHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1rem', mb: 1.5 }}>Fun Food Facts</Typography>
                        <Box sx={{ display: 'flex', gap: 0.5, fontSize: '1.75rem' }}>💡 🍎 🍇</Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)', color: 'white', borderRadius: 2, p: 2.5, minHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '1rem', mb: 1.5 }}>Recipes & More</Typography>
                        <RestaurantIcon sx={{ fontSize: 40, opacity: 0.95 }} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Footer />
      </Box>
    </FoodPatternBackground>
  )
}

export default Home
