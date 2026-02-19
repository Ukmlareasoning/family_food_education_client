import { AppBar, Toolbar, Box, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

// Theme-friendly nav link with hover effect
const navLinkSx = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#1a237e',
  textDecoration: 'none',
  px: 2,
  py: 1.25,
  borderRadius: 2,
  transition: 'color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    color: '#534bae',
    backgroundColor: 'rgba(83, 75, 174, 0.1)',
    boxShadow: '0 0 0 1px rgba(83, 75, 174, 0.2)',
  },
}

function NavLink({ to, children }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Box component="span" sx={navLinkSx}>
        {children}
      </Box>
    </Link>
  )
}

// Logo: stylized 'C' / open loop with yellow dot (matches reference)
function LogoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#534bae" stroke="#5e35b1" strokeWidth="1" />
      <path d="M14 12c0 0 4-2 12-2 6 0 10 2 10 8 0 6-2 10-8 14-4 2-8 4-14 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="26" cy="14" r="4" fill="#ffeb3b" />
    </svg>
  )
}

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: 56, sm: 64 },
            py: 0,
          }}
        >
          {/* Logo + brand name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <LogoIcon />
            <Box
              component="span"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '1.35rem',
                fontWeight: 700,
                display: { xs: 'none', sm: 'inline' },
                letterSpacing: '-0.02em',
              }}
            >
              <Box component="span" sx={{ color: '#534bae' }}>
                Please{' '}
              </Box>
              <Box component="span" sx={{ color: '#1a237e' }}>
                Scan
              </Box>
            </Box>
          </Box>

          {/* Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/parent-dashboard">Parent Dashboard</NavLink>
            <NavLink to="/kids-zone">Kids Zone</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </Box>

          {/* Log In + green toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                backgroundColor: '#ff9500',
                color: 'white',
                borderRadius: 2.5,
                px: 2.5,
                py: 1.25,
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'none',
                boxShadow: '0 2px 6px rgba(255,149,0,0.4)',
                '&:hover': { backgroundColor: '#e68600' },
              }}
            >
              Log In
            </Button>
            <Box
              sx={{
                width: 36,
                height: 36,
                minWidth: 36,
                borderRadius: 2,
                backgroundColor: '#66bb6a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(76,175,80,0.35)',
                '&:hover': { backgroundColor: '#5cb860' },
              }}
            >
              <PersonOutlineIcon sx={{ fontSize: 20 }} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
