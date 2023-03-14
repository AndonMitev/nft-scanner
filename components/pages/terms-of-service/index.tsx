import { Box, Typography } from '@mui/material'

import { PRIVACY_POLICY } from './termsOfServiceData'

export const TermsOfServiceView = () => {
  return (
    <Box>
      <Typography fontSize="28px" mb={3}>
        {PRIVACY_POLICY.mainTitle}
      </Typography>
      <Typography fontSize="22px" mb={3}>
        {PRIVACY_POLICY.lastUpdated}
      </Typography>
      <Typography fontSize="18px" mb={5}>
        {PRIVACY_POLICY.mainDescription}
      </Typography>
      {PRIVACY_POLICY.points.map(({ title, description }, index) => (
        <Box key={index}>
          <Typography variant="h6" fontWeight={'bold'}>
            {title}
          </Typography>
          <Typography fontSize={'18px'} mb={3} fontWeight="400">
            {description}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
