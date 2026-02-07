import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { placeholders } from '../utils/placeholderImages'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2c3e50',
        color: 'white',
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                component="img"
                src={placeholders.logo}
                alt="Please Scan Logo"
                sx={{ width: 40, height: 40, borderRadius: '50%' }}
              />
              <Typography variant="h6" fontWeight={700}>
                Please Scan
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#bdc3c7', mb: 2 }}>
              Make snack choices simple for families. Scan snacks, learn nutrition facts, and make healthy choices fun!
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box
                sx={{
                  backgroundColor: '#34495e',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#667eea' }
                }}
              >
                <FacebookIcon fontSize="small" />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#34495e',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#667eea' }
                }}
              >
                <TwitterIcon fontSize="small" />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#34495e',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#667eea' }
                }}
              >
                <InstagramIcon fontSize="small" />
              </Box>
              <Box
                sx={{
                  backgroundColor: '#34495e',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#667eea' }
                }}
              >
                <LinkedInIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="/" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Home
              </MuiLink>
              <MuiLink href="/features" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Features
              </MuiLink>
              <MuiLink href="/about" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                About Us
              </MuiLink>
              <MuiLink href="/contact" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Contact
              </MuiLink>
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="/parent-dashboard" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Parent Dashboard
              </MuiLink>
              <MuiLink href="/kids-zone" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Kids Zone
              </MuiLink>
              <MuiLink href="/blog" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Blog
              </MuiLink>
              <MuiLink href="/faq" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                FAQ
              </MuiLink>
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={700} mb={2}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="/privacy" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Privacy Policy
              </MuiLink>
              <MuiLink href="/terms" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Terms of Service
              </MuiLink>
              <MuiLink href="/cookies" color="inherit" underline="hover" sx={{ color: '#bdc3c7' }}>
                Cookie Policy
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid #34495e', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
            © {new Date().getFullYear()} Please Scan. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
