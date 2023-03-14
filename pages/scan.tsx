import { Box } from '@mui/material'

import { ScanView } from 'components'

function Scan() {
  return (
    <Box
      sx={{
        background: 'rgba(70, 75, 85, 0.51)',
        height: '100vh',
        display: 'grid',
        gridTemplateRows: 'min-content 1fr'
      }}
    >
      <ScanView />
    </Box>
  )
}

export default Scan
