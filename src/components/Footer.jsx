import { Box, Container, Typography, Grid, Link as MuiLink, Divider, useTheme, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import HomeIcon from '@mui/icons-material/Home'
import StarIcon from '@mui/icons-material/Star'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import GavelIcon from '@mui/icons-material/Gavel'
import DescriptionIcon from '@mui/icons-material/Description'
import SettingsIcon from '@mui/icons-material/Settings'
import { placeholders } from '../utils/placeholderImages'

const footerLinkSx = {
  color: '#fff',
  fontSize: '0.875rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1.5,
  py: 0.75,
  borderRadius: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    color: '#fff',
    transform: 'translateX(6px)',
    '& .MuiSvgIcon-root': {
      color: 'secondary.main',
    },
  },
}

const socialIconSx = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 42,
  height: 42,
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: 'white',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}

const facebookIconSx = {
  ...socialIconSx,
  '&:hover': {
    backgroundColor: '#1877F2',
    color: 'white',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(24, 119, 242, 0.4)',
    borderColor: '#1877F2',
  },
}

const xIconSx = {
  ...socialIconSx,
  '&:hover': {
    backgroundColor: '#000000',
    color: 'white',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    borderColor: '#000000',
  },
}

const instagramIconSx = {
  ...socialIconSx,
  '&:hover': {
    backgroundColor: '#E4405F',
    color: 'white',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(228, 64, 95, 0.4)',
    borderColor: '#E4405F',
  },
}

const linkedinIconSx = {
  ...socialIconSx,
  '&:hover': {
    backgroundColor: '#0A66C2',
    color: 'white',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(10, 102, 194, 0.4)',
    borderColor: '#0A66C2',
  },
}

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // X Logo Component
  const XLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.215-6.817-5.975 6.817h-3.31l7.732-8.835L.424 2.25h6.852l4.816 6.367 5.152-6.367zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, #000033 100%)`,
        color: 'white',
        pt: { xs: 8, md: 10 },
        pb: 4,
        mt: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1.5, mb: 3 }}>
                <Box
                  component="img"
                  src={placeholders.logo}
                  alt="Please Scan Logo"
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                />
                <Typography variant="h6" fontWeight={800} sx={{
                  color: 'white',
                  letterSpacing: '0.5px',
                  fontSize: '1.25rem'
                }}>
                  Please Scan
                </Typography>
              </Box>
              <Typography sx={{
                color: '#ffffff',
                lineHeight: 1.6,
                mb: 4,
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 500,
                maxWidth: { xs: '100%', md: '550px' },
                mx: { xs: 'auto', md: 0 }
              }}>
                Empowering families to make healthier snack choices through interactive scanning and fun nutrition education.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1.5 }}>
                <MuiLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" sx={facebookIconSx}>
                  <FacebookIcon fontSize="small" />
                </MuiLink>
                <MuiLink href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" sx={xIconSx}>
                  <XLogo />
                </MuiLink>
                <MuiLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={instagramIconSx}>
                  <InstagramIcon fontSize="small" />
                </MuiLink>
                <MuiLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={linkedinIconSx}>
                  <LinkedInIcon fontSize="small" />
                </MuiLink>
              </Box>
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={{ xs: 5, sm: 6 }} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <Grid item xs={4} sm={4} md={3.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'white', mb: { xs: 2, md: 3 }, fontSize: { xs: '0.8rem', sm: '1rem' }, textAlign: 'left' }}>
                    Quick Links
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'flex-start' }}>
                    <MuiLink component={Link} to="/" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><HomeIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Home</MuiLink>
                    <MuiLink component={Link} to="#" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><StarIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Features</MuiLink>
                    <MuiLink component={Link} to="/about" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><InfoIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> About</MuiLink>
                    <MuiLink component={Link} to="/contact" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><ContactMailIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Contact</MuiLink>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={4} sm={4} md={3.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'white', mb: { xs: 2, md: 3 }, fontSize: { xs: '0.8rem', sm: '1rem' }, textAlign: 'left' }}>
                    Resources
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'flex-start' }}>
                    <MuiLink component={Link} to="#" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><DashboardIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Parents</MuiLink>
                    <MuiLink component={Link} to="#" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><ChildCareIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Kids</MuiLink>
                    <MuiLink component={Link} to="/blog" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><MenuBookIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Blog</MuiLink>
                    <MuiLink component={Link} to="/faq" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><HelpOutlineIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> FAQ</MuiLink>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={4} sm={4} md={3.5} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'white', mb: { xs: 2, md: 3 }, fontSize: { xs: '0.8rem', sm: '1rem' }, textAlign: 'left' }}>
                    Legal
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'flex-start' }}>
                    <MuiLink component={Link} to="/privacy" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><GavelIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Privacy</MuiLink>
                    <MuiLink component={Link} to="/terms" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><DescriptionIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Terms</MuiLink>
                    <MuiLink component={Link} to="/cookies" sx={{ ...footerLinkSx, fontSize: { xs: '0.75rem', sm: '0.875rem' }, whiteSpace: 'nowrap' }}><SettingsIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: 'rgba(255,255,255,0.4)' }} /> Cookies</MuiLink>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)', my: 6 }} />

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Please Scan. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{
            color: '#ffffff',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            Made with ❤️ for Families
          </Typography>
        </Box>
      </Container>
    </Box >
  )
}

export default Footer

