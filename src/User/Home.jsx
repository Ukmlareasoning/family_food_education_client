import { Box, Container, Typography, Button, Paper } from '@mui/material'
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
          }}
        >
          <WavingHandRoundedIcon sx={{ fontSize: 56, color: 'primary.main', mb: 1 }} />
          <Typography variant="h3" component="h1" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
            Welcome
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 2 }}>
            <CheckCircleRoundedIcon color="success" fontSize="small" />
            <Typography variant="h6" color="text.secondary">
              Your React + Vite + Material UI app is ready.
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, flexWrap: 'wrap' }}>
            <CodeRoundedIcon fontSize="small" color="action" />
            Start editing <code>src/App.jsx</code> to build your application.
          </Typography>
          <Button variant="contained" size="large" startIcon={<RocketLaunchRoundedIcon />}>
            Get started
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}

export default Home
