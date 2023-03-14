import { useRouter } from 'next/router'

import { Box, Typography } from '@mui/material'

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = ({}) => {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        gap: 3
      }}
    >
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={() => router.push('/terms-of-service')}
          variant="caption"
          color="#626670"
        >
          Terms of service
        </Typography>
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={() => router.push('/privacy-policy')}
          variant="caption"
          color="#626670"
        >
          Privacy Policy
        </Typography>
      </Box>
      <Typography variant="caption" color="#626670">
        2022 Copyright opn.authenticator
      </Typography>
    </Box>
  )
}
