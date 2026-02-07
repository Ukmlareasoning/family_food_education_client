import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
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
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import DescriptionIcon from '@mui/icons-material/Description'
import SettingsIcon from '@mui/icons-material/Settings'
import { placeholders } from '../utils/placeholderImages'

const footerLinkSx = {
  color: '#bdc3c7',
  fontSize: '0.8rem',
  transition: 'all 0.25s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  py: 0.5,
  px: 1,
  borderRadius: 1,
  '&:hover': {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: 'translateX(4px)',
  },
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2c3e50',
        color: 'white',
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <Box
                component="img"
                src={placeholders.logo}
                alt="Please Scan Logo"
                sx={{ width: 32, height: 32, borderRadius: '50%' }}
              />
              <Typography variant="subtitle1" fontWeight={700} sx={{ fontSize: '1rem' }}>
                Please Scan
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#bdc3c7', fontSize: '0.8rem', mb: 1.5 }}>
              Make snack choices simple for families. Scan snacks, learn nutrition facts, and make healthy choices fun!
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <MuiLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', backgroundColor: '#34495e', color: 'white', transition: 'all 0.25s ease', '&:hover': { backgroundColor: '#1877f2', color: 'white', transform: 'scale(1.1)' } }}>
                <FacebookIcon sx={{ fontSize: 20 }} />
              </MuiLink>
              <MuiLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', backgroundColor: '#34495e', color: 'white', transition: 'all 0.25s ease', '&:hover': { backgroundColor: '#1da1f2', color: 'white', transform: 'scale(1.1)' } }}>
                <TwitterIcon sx={{ fontSize: 20 }} />
              </MuiLink>
              <MuiLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', backgroundColor: '#34495e', color: 'white', transition: 'all 0.25s ease', '&:hover': { backgroundColor: '#e4405f', color: 'white', transform: 'scale(1.1)' } }}>
                <InstagramIcon sx={{ fontSize: 20 }} />
              </MuiLink>
              <MuiLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', backgroundColor: '#34495e', color: 'white', transition: 'all 0.25s ease', '&:hover': { backgroundColor: '#0a66c2', color: 'white', transform: 'scale(1.1)' } }}>
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </MuiLink>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: '0.85rem', mb: 1 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              <MuiLink href="/" color="inherit" underline="none" sx={footerLinkSx}><HomeIcon sx={{ fontSize: 18 }} /> Home</MuiLink>
              <MuiLink href="/features" color="inherit" underline="none" sx={footerLinkSx}><StarIcon sx={{ fontSize: 18 }} /> Features</MuiLink>
              <MuiLink href="/about" color="inherit" underline="none" sx={footerLinkSx}><InfoIcon sx={{ fontSize: 18 }} /> About Us</MuiLink>
              <MuiLink href="/contact" color="inherit" underline="none" sx={footerLinkSx}><ContactMailIcon sx={{ fontSize: 18 }} /> Contact</MuiLink>
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: '0.85rem', mb: 1 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              <MuiLink href="/parent-dashboard" color="inherit" underline="none" sx={footerLinkSx}><DashboardIcon sx={{ fontSize: 18 }} /> Parent Dashboard</MuiLink>
              <MuiLink href="/kids-zone" color="inherit" underline="none" sx={footerLinkSx}><ChildCareIcon sx={{ fontSize: 18 }} /> Kids Zone</MuiLink>
              <MuiLink href="/blog" color="inherit" underline="none" sx={footerLinkSx}><MenuBookIcon sx={{ fontSize: 18 }} /> Blog</MuiLink>
              <MuiLink href="/faq" color="inherit" underline="none" sx={footerLinkSx}><HelpOutlineIcon sx={{ fontSize: 18 }} /> FAQ</MuiLink>
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: '0.85rem', mb: 1 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              <MuiLink href="/privacy" color="inherit" underline="none" sx={footerLinkSx}><PrivacyTipIcon sx={{ fontSize: 18 }} /> Privacy Policy</MuiLink>
              <MuiLink href="/terms" color="inherit" underline="none" sx={footerLinkSx}><DescriptionIcon sx={{ fontSize: 18 }} /> Terms of Service</MuiLink>
              <MuiLink href="/cookies" color="inherit" underline="none" sx={footerLinkSx}><SettingsIcon sx={{ fontSize: 18 }} /> Cookie Policy</MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #34495e', mt: 2.5, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#bdc3c7', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Please Scan. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
