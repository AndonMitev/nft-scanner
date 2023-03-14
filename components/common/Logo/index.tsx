import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ILogoProps {
  mb?: number | string
  href?: string
}

export const LogoText: React.FC<ILogoProps> = ({ mb, href }) => {
  return (
    <Box sx={{ cursor: 'pointer' }} mb={mb ? mb : 4}>
      <Link href={href !== undefined ? href : '/'}>
        <Image
          src={'/Opn-NFT-Logo.svg'}
          width={'234px'}
          height={'21px'}
          alt="logo"
        />
      </Link>
    </Box>
  )
}
