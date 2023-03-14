/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material'

import { PRIVACY_POLICY } from './privacyPolicyData'
import { Bold } from 'components'

export const PrivacyPolicyView = () => {
  return (
    <Box>
      <Typography fontSize="28px" mb={3}>
        {PRIVACY_POLICY.mainTitle}
      </Typography>
      <Typography fontSize="18px" mb={5}>
        {PRIVACY_POLICY.mainDescription}
      </Typography>
      {PRIVACY_POLICY.points.map(({ title, description, points }, index) => (
        <Box key={index}>
          <Typography variant="h6" fontWeight={'bold'}>
            {index + 1}. {title}
          </Typography>
          <Typography fontSize={'18px'} mb={3} fontWeight="400">
            {description}
          </Typography>
          {points &&
            points.map(({ text }, i) => (
              <Typography
                fontSize={'18px'}
                mb={3}
                pl={3}
                key={i}
                fontWeight="400"
              >
                <Bold>
                  {' '}
                  {index + 1}.{i + 1}
                </Bold>{' '}
                {text}
              </Typography>
            ))}
        </Box>
      ))}
    </Box>
  )
}
