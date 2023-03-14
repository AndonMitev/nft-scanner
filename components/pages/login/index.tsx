import { Typography, Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { LogoText, Footer } from 'components'

export const LoginView = () => {
  const router = useRouter()

  const { id, chain, membership } = router.query

  const onClick = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    router.push(`/scan/?id=${id}&chain=${chain}`)
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <LogoText mb={7} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4
          }}
        >
          <Image src="/scan-qr.svg" width="180px" height="160px" alt="scan" />
        </Box>
        <Typography variant="h3" mb={4} textAlign="center">
          {membership || 'No membreship name'}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: '44px'
          }}
          onClick={onClick}
        >
          <Typography variant="body2" pl={3}>
            Open QR code reader
          </Typography>
        </Button>
      </Box>
      <Footer />
    </Box>
  )
}
