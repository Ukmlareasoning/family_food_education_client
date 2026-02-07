import { Box } from '@mui/material'

const cloudSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 60'%3E%3Cellipse fill='rgba(255,255,255,0.6)' cx='30' cy='35' rx='25' ry='15'/%3E%3Cellipse fill='rgba(255,255,255,0.5)' cx='55' cy='30' rx='30' ry='18'/%3E%3Cellipse fill='rgba(255,255,255,0.4)' cx='90' cy='38' rx='22' ry='12'/%3E%3C/svg%3E")`
const leafSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%238bc34a' fill-opacity='0.4' d='M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.39-2.5c.5.5 1 1 1.5 1.5l1-2 2.44 1 1-2 2 1 2-3-3-1 2-2-2.5-.5z'/%3E%3C/svg%3E")`
const starSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ffeb3b' fill-opacity='0.3' d='M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z'/%3E%3C/svg%3E")`

export default function SkyBackground({ children, noHill }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100%',
        backgroundColor: '#e3f2fd',
        backgroundImage: cloudSvg,
        backgroundSize: '280px 140px',
        backgroundPosition: '10% 20%, 60% 60%, 90% 40%',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `${leafSvg}, ${starSvg}`,
          backgroundSize: '24px 24px, 20px 20px',
          backgroundPosition: '5% 10%, 90% 15%, 15% 80%, 85% 70%, 50% 50%',
          opacity: 0.7,
          pointerEvents: 'none',
        },
        ...(!noHill && {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '50%',
            height: '30%',
            background: 'linear-gradient(135deg, transparent 40%, #81c784 40%, #a5d6a7 100%)',
            borderTopLeftRadius: '80% 100%',
            pointerEvents: 'none',
          },
        }),
      }}
    >
      {children}
    </Box>
  )
}
