import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    TextField,
    Tabs,
    Tab,
    IconButton,
    InputAdornment,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FoodPatternBackground from '../components/FoodPatternBackground'
import BottomMobileNav from '../components/BottomMobileNav'

const cardSx = {
    borderRadius: '7px',
    border: '1px solid rgba(33, 150, 243, 0.1)',
    bgcolor: '#ffffff',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    overflow: 'hidden',
}

const textFieldSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '7px',
        backgroundColor: '#f8f9fa',
        '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.08)',
        },
        '&:hover fieldset': {
            borderColor: '#4CAF50',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4CAF50',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#4CAF50',
    },
}

const primaryButtonSx = {
    fontFamily: '"Poppins", sans-serif',
    background: 'linear-gradient(180deg, #66bb6a 0%, #4CAF50 50%, #43a047 100%)',
    color: 'white',
    py: 1.5,
    borderRadius: '7px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
    '&:hover': {
        background: 'linear-gradient(180deg, #57a35a 0%, #388e3c 100%)',
        boxShadow: '0 6px 18px rgba(76,175,80,0.45)',
    },
}

function Auth() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate = useNavigate()
    
    const [tabValue, setTabValue] = useState(0)
    const [showPassword, setShowPassword] = useState(false)
    const [registrationStep, setRegistrationStep] = useState(1) // 1: Basic Info, 2: OTP, 3: Password
    
    // Registration form state
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Forgot Password state
    const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
    const [forgotPasswordStep, setForgotPasswordStep] = useState(1) // 1: Email, 2: OTP, 3: Password
    const [forgotEmail, setForgotEmail] = useState('')
    const [forgotOtp, setForgotOtp] = useState('')
    const [forgotPassword, setForgotPassword] = useState('')
    const [forgotConfirmPassword, setForgotConfirmPassword] = useState('')

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
        setRegistrationStep(1) // Reset registration step when switching tabs
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleRegisterStep1 = () => {
        if (firstName.trim() && lastName.trim() && email.trim()) {
            setRegistrationStep(2)
        }
    }

    const handleVerifyOtp = () => {
        if (otp.trim() && otp.length === 6) {
            setRegistrationStep(3)
        }
    }

    const handleCreatePassword = () => {
        if (password.trim() && confirmPassword.trim() && password === confirmPassword && password.length >= 6) {
            // Redirect to login
            navigate('/login')
        }
    }

    const handleForgotPasswordClick = () => {
        setForgotPasswordOpen(true)
        setForgotPasswordStep(1)
        setForgotEmail('')
        setForgotOtp('')
        setForgotPassword('')
        setForgotConfirmPassword('')
    }

    const handleForgotPasswordClose = () => {
        setForgotPasswordOpen(false)
        setForgotPasswordStep(1)
    }

    const handleSendForgotOtp = () => {
        if (forgotEmail.trim()) {
            setForgotPasswordStep(2)
        }
    }

    const handleVerifyForgotOtp = () => {
        if (forgotOtp.trim() && forgotOtp.length === 6) {
            setForgotPasswordStep(3)
        }
    }

    const handleUpdatePassword = () => {
        if (forgotPassword.trim() && forgotConfirmPassword.trim() && forgotPassword === forgotConfirmPassword && forgotPassword.length >= 6) {
            handleForgotPasswordClose()
        }
    }

    return (
        <FoodPatternBackground>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box sx={{ height: { xs: 70, sm: 80 } }} />

                <Container maxWidth="sm" sx={{ flex: 1, py: { xs: 4, md: 8 }, position: 'relative', zIndex: 1 }}>
                    <Card sx={cardSx}>
                        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', bgcolor: '#f8fafc', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    p: 0.7,
                                    bgcolor: 'white',
                                    borderRadius: '7px',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    width: '100%',
                                    position: 'relative',
                                    gap: 0.5,
                                }}
                            >
                                {/* Sliding Background */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 5,
                                        bottom: 5,
                                        left: 5,
                                        width: 'calc(50% - 5px)',
                                        bgcolor: '#4CAF50',
                                        borderRadius: '7px',
                                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: `translateX(${tabValue === 1 ? '100%' : '0%'})`,
                                        boxShadow: '0 4px 12px rgba(76,175,80,0.3)',
                                        zIndex: 0,
                                    }}
                                />

                                <Button
                                    fullWidth
                                    onClick={() => setTabValue(0)}
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: '7px',
                                        py: 1.5,
                                        textTransform: 'none',
                                        color: tabValue === 0 ? 'white' : '#64748b',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s',
                                        '&:hover': { bgcolor: tabValue === 0 ? 'transparent' : 'rgba(0,0,0,0.02)' }
                                    }}
                                >
                                    Log In
                                </Button>
                                <Button
                                    fullWidth
                                    onClick={() => setTabValue(1)}
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: '7px',
                                        py: 1.5,
                                        textTransform: 'none',
                                        color: tabValue === 1 ? 'white' : '#64748b',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s',
                                        '&:hover': { bgcolor: tabValue === 1 ? 'transparent' : 'rgba(0,0,0,0.02)' }
                                    }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </Box>

                        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
                            <Box sx={{ mb: 4, textAlign: 'center' }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: '"Poppins", sans-serif',
                                        fontWeight: 800,
                                        color: '#1a237e',
                                        mb: 1.5,
                                        fontSize: { xs: '1.75rem', sm: '2rem' }
                                    }}
                                >
                                    {tabValue === 0 ? 'Welcome Back!' : 'Join the Family!'}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#64748b', mb: 0 }}>
                                    {tabValue === 0
                                        ? 'Log in to track your family’s healthy snack journey.'
                                        : registrationStep === 1
                                        ? 'Create your account to get started.'
                                        : registrationStep === 2
                                        ? 'Enter the 6-digit code sent to your email.'
                                        : 'Set a secure password for your account.'}
                                </Typography>
                            </Box>

                            <form>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    {/* LOGIN TAB */}
                                    {tabValue === 0 && (
                                        <>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                type="email"
                                                variant="outlined"
                                                sx={textFieldSx}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                sx={textFieldSx}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={handleClickShowPassword} edge="end">
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{ ...primaryButtonSx, mt: 1 }}
                                            >
                                                Log In
                                            </Button>
                                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                                <Box
                                                    component="span"
                                                    onClick={handleForgotPasswordClick}
                                                    sx={{
                                                        color: '#4CAF50',
                                                        fontWeight: 600,
                                                        cursor: 'pointer',
                                                        fontSize: '0.9rem',
                                                        '&:hover': { textDecoration: 'underline' },
                                                    }}
                                                >
                                                    Forgot Password?
                                                </Box>
                                            </Box>
                                        </>
                                    )}

                                    {/* REGISTER TAB - STEP 1: Basic Info */}
                                    {tabValue === 1 && registrationStep === 1 && (
                                        <>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                variant="outlined"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                sx={textFieldSx}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                variant="outlined"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                sx={textFieldSx}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                type="email"
                                                variant="outlined"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                sx={textFieldSx}
                                            />
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{ ...primaryButtonSx, mt: 1 }}
                                                onClick={handleRegisterStep1}
                                                disabled={!firstName.trim() || !lastName.trim() || !email.trim()}
                                            >
                                                Register
                                            </Button>
                                        </>
                                    )}

                                    {/* REGISTER TAB - STEP 2: OTP Verification */}
                                    {tabValue === 1 && registrationStep === 2 && (
                                        <>
                                            <Typography variant="body2" sx={{ color: '#64748b', textAlign: 'center', mb: 2 }}>
                                                We've sent a 6-digit verification code to<br /> <strong>{email}</strong>
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                label="Verification Code"
                                                variant="outlined"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                placeholder="000000"
                                                inputProps={{ maxLength: 6, style: { textAlign: 'center', letterSpacing: '8px', fontSize: '1.5rem' } }}
                                                sx={textFieldSx}
                                            />
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{ ...primaryButtonSx, mt: 1 }}
                                                onClick={handleVerifyOtp}
                                                disabled={!otp || otp.length !== 6}
                                            >
                                                Verify Code
                                            </Button>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    textTransform: 'none',
                                                    borderRadius: '7px',
                                                    py: 1.5,
                                                    fontWeight: 600,
                                                    color: '#4CAF50',
                                                    borderColor: '#4CAF50',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(76,175,80,0.05)',
                                                        borderColor: '#4CAF50',
                                                    }
                                                }}
                                                onClick={() => setRegistrationStep(1)}
                                            >
                                                Back
                                            </Button>
                                        </>
                                    )}

                                    {/* REGISTER TAB - STEP 3: Password Setup */}
                                    {tabValue === 1 && registrationStep === 3 && (
                                        <>
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                sx={textFieldSx}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={handleClickShowPassword} edge="end">
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Confirm Password"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                sx={textFieldSx}
                                            />
                                            {password && confirmPassword && password !== confirmPassword && (
                                                <Typography variant="caption" sx={{ color: '#d32f2f', mt: -1 }}>
                                                    Passwords do not match
                                                </Typography>
                                            )}
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{ ...primaryButtonSx, mt: 1 }}
                                                onClick={handleCreatePassword}
                                                disabled={!password || !confirmPassword || password !== confirmPassword || password.length < 6}
                                            >
                                                Create Account
                                            </Button>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                sx={{
                                                    textTransform: 'none',
                                                    borderRadius: '7px',
                                                    py: 1.5,
                                                    fontWeight: 600,
                                                    color: '#4CAF50',
                                                    borderColor: '#4CAF50',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(76,175,80,0.05)',
                                                        borderColor: '#4CAF50',
                                                    }
                                                }}
                                                onClick={() => setRegistrationStep(2)}
                                            >
                                                Back
                                            </Button>
                                        </>
                                    )}
                                </Box>
                            </form>

                            {tabValue === 0 && (
                                <Box sx={{ mt: 3, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                                        Don't have an account?{' '}
                                        <Box
                                            component="span"
                                            onClick={() => setTabValue(1)}
                                            sx={{
                                                color: '#4CAF50',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                ml: 0.5,
                                                '&:hover': { textDecoration: 'underline' },
                                            }}
                                        >
                                            Sign Up
                                        </Box>
                                    </Typography>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Container>

                {/* Forgot Password Dialog */}
                <Dialog
                    open={forgotPasswordOpen}
                    onClose={handleForgotPasswordClose}
                    maxWidth="sm"
                    fullWidth
                    PaperProps={{
                        sx: {
                            borderRadius: '7px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        }
                    }}
                >
                    <DialogTitle sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, color: '#1a237e', pb: 1 }}>
                        {forgotPasswordStep === 1 ? 'Reset Password' : forgotPasswordStep === 2 ? 'Verify Code' : 'Set New Password'}
                    </DialogTitle>
                    <DialogContent sx={{ pt: 2 }}>
                        {/* Step 1: Email Input */}
                        {forgotPasswordStep === 1 && (
                            <>
                                <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                                    Enter your email address to receive a verification code.
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    variant="outlined"
                                    value={forgotEmail}
                                    onChange={(e) => setForgotEmail(e.target.value)}
                                    sx={textFieldSx}
                                />
                            </>
                        )}

                        {/* Step 2: OTP Verification */}
                        {forgotPasswordStep === 2 && (
                            <>
                                <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                                    We've sent a 6-digit verification code to<br /> <strong>{forgotEmail}</strong>
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Verification Code"
                                    variant="outlined"
                                    value={forgotOtp}
                                    onChange={(e) => setForgotOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                    placeholder="000000"
                                    inputProps={{ maxLength: 6, style: { textAlign: 'center', letterSpacing: '8px', fontSize: '1.5rem' } }}
                                    sx={textFieldSx}
                                />
                            </>
                        )}

                        {/* Step 3: Password Update */}
                        {forgotPasswordStep === 3 && (
                            <>
                                <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                                    Enter your new password below.
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="New Password"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    value={forgotPassword}
                                    onChange={(e) => setForgotPassword(e.target.value)}
                                    sx={{ ...textFieldSx, mb: 2 }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClickShowPassword} edge="end">
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    value={forgotConfirmPassword}
                                    onChange={(e) => setForgotConfirmPassword(e.target.value)}
                                    sx={textFieldSx}
                                />
                                {forgotPassword && forgotConfirmPassword && forgotPassword !== forgotConfirmPassword && (
                                    <Typography variant="caption" sx={{ color: '#d32f2f', mt: 1, display: 'block' }}>
                                        Passwords do not match
                                    </Typography>
                                )}
                            </>
                        )}
                    </DialogContent>
                    <DialogActions sx={{ p: 2, gap: 1 }}>
                        <Button onClick={handleForgotPasswordClose} sx={{ textTransform: 'none', fontWeight: 600, color: '#64748b' }}>
                            Cancel
                        </Button>
                        {forgotPasswordStep === 1 && (
                            <Button
                                variant="contained"
                                sx={{ ...primaryButtonSx, minWidth: 120 }}
                                onClick={handleSendForgotOtp}
                                disabled={!forgotEmail.trim()}
                            >
                                Send Code
                            </Button>
                        )}
                        {forgotPasswordStep === 2 && (
                            <Button
                                variant="contained"
                                sx={{ ...primaryButtonSx, minWidth: 120 }}
                                onClick={handleVerifyForgotOtp}
                                disabled={!forgotOtp || forgotOtp.length !== 6}
                            >
                                Verify
                            </Button>
                        )}
                        {forgotPasswordStep === 3 && (
                            <Button
                                variant="contained"
                                sx={{ ...primaryButtonSx, minWidth: 120 }}
                                onClick={handleUpdatePassword}
                                disabled={!forgotPassword || !forgotConfirmPassword || forgotPassword !== forgotConfirmPassword || forgotPassword.length < 6}
                            >
                                Update Password
                            </Button>
                        )}
                    </DialogActions>
                </Dialog>

                <Footer />
                <BottomMobileNav />
            </Box>
        </FoodPatternBackground>
    )
}

export default Auth
