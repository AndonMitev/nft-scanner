import { Typography } from '@mui/material'

export const Bold = ({ children }: any) => {
  return (
    <Typography fontWeight={'bold'} display="contents" fontSize={'18px'}>
      {children}
    </Typography>
  )
}
