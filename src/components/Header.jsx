import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
// Theme-friendly nav link with hover effect
const navLinkSx = {
  fontFamily: '"Poppins", sans-serif',
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#1a237e',
  textDecoration: 'none',
  px: 2,
  py: 1.25,
  borderRadius: '7px',
  transition: 'color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    color: '#534bae',
    backgroundColor: 'rgba(83, 75, 174, 0.1)',
    boxShadow: '0 0 0 1px rgba(83, 75, 174, 0.2)',
  },
}

function NavLink({ to, children, active }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Box
        component="span"
        sx={{
          ...navLinkSx,
          color: active ? '#534bae' : '#1a237e',
          backgroundColor: active ? 'rgba(83, 75, 174, 0.1)' : 'transparent',
          boxShadow: active ? '0 0 0 1px rgba(83, 75, 174, 0.2)' : 'none',
          fontWeight: active ? 600 : 500,
        }}
      >
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Parent Dashboard', path: '/parent-dashboard' },
    { label: 'Kids Zone', path: '/kids-zone' },
    { label: 'Blog', path: '/blog' },
  ]

  const drawer = (
    <Box sx={{ p: 2, height: '100%', backgroundColor: '#ffffff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
            <LogoIcon />
            <Box
              component="span"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                display: 'inline',
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
        </Link>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            disablePadding
            sx={{ mb: 1 }}
          >
            <Link
              to={item.path}
              onClick={handleDrawerToggle}
              style={{
                textDecoration: 'none',
                width: '100%',
                color: (location.pathname === item.path || (item.label === 'Home' && location.pathname === '/')) ? '#534bae' : '#1a237e',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: (location.pathname === item.path || (item.label === 'Home' && location.pathname === '/')) ? 700 : 500,
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: (location.pathname === item.path || (item.label === 'Home' && location.pathname === '/')) ? 'rgba(83, 75, 174, 0.08)' : 'transparent',
                display: 'block'
              }}
            >
              {item.label}
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            fullWidth
            onClick={handleDrawerToggle}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              backgroundColor: '#ff9500',
              color: 'white',
              borderRadius: '7px',
              py: 1.5,
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#e68600' },
            }}
          >
            Log In
          </Button>
        </ListItem>
      </List>
    </Box>
  )

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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}>
              <LogoIcon />
              <Box
                component="span"
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '1.1rem', sm: '1.35rem' },
                  fontWeight: 700,
                  display: 'inline',
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
          </Link>

          {/* Navigation (Desktop) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                active={location.pathname === item.path || (item.label === 'Home' && location.pathname === '/')}
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', ml: 'auto' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#1a237e' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Log In (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                backgroundColor: '#ff9500',
                color: 'white',
                borderRadius: '7px',
                px: 2.5,
                py: 1,
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'none',
                boxShadow: '0 2px 6px rgba(255,149,0,0.4)',
                '&:hover': { backgroundColor: '#e68600' },
              }}
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Header
