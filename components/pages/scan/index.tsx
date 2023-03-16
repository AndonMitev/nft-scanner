import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { QrReader } from 'react-qr-reader'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { authenticationWithTicket, scanMembership } from 'services/membership'
import { NotificationModal } from 'components'
import { SelectionModal } from 'components/common/Modals/NFTSelectionModal'

interface IQRData {
  signature: string
  tokenId?: string
  address?: string
}

export function ScanView() {
  const [QRData, setQRData] = useState<IQRData | null>()
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [nftSelection, setNftSelection] = useState<
    Array<{
      contractAddress: string
      tokenId: string
      name: string
      ticketType: string
    }>
  >([])
  const router = useRouter()

  /**
   * Dev: Hardcoded just for the test
   */
  router.query.id = '641021ae0c878a4f6a4f3ec6'
  router.query.chain = 'opn'
  const { id, chain } = router.query

  useEffect(() => {
    console.log(QRData, id, chain, isLoading, isSuccessModalOpen)
    if (QRData && id && chain && !isLoading && !isSuccessModalOpen) {
      ;(async () => {
        setIsLoading(true)

        const { signature, address, tokenId } = QRData
        const isAuthenticationWithTicket = signature && address && tokenId

        const reqPayload = {
          signature,
          chain,
          membershipId: id
        }

        if (isAuthenticationWithTicket) {
          const response = await authenticationWithTicket({
            ...reqPayload,
            contractAddress: address,
            tokenId
          })

          setState(response as { isSuccess: boolean; message: string })
        } else {
          console.log('here', reqPayload)
          const response = await scanMembership(reqPayload)

          if (response.data) {
            setNftSelection(response.data)
            setIsSelectionModalOpen(true)
          } else {
            if (response.isSuccess) {
              console.log('called from success scan')
              window.location.replace(`dev.ooo.opn.wallet://success`)
            }
            setState(response as { isSuccess: boolean; message: string })
          }
        }
      })()
    }
  }, [QRData, id, chain, isSuccess])

  const onScan = (result: any) => {
    if (!!result) {
      setQRData(JSON.parse(result?.text))
    }
  }

  const authenticateWithNFT = async (nftToUse: {
    contractAddress: string
    tokenId: string
  }) => {
    setIsLoading(true)

    const response = (await authenticationWithTicket({
      ...nftToUse,
      signature: QRData?.signature!,
      chain,
      membershipId: id
    })) as {
      isSuccess: boolean
      message: string
    }

    if (response.isSuccess) {
      console.log('called from success ticket')
      window.location.replace(`dev.ooo.opn.wallet://success`)
    }

    setState(response)
  }

  const setState = (response: { isSuccess: boolean; message: string }) => {
    console.log('ei')
    setIsSuccess(response.isSuccess)
    setMessage(response.message)
    setIsSuccessModalOpen(true)
    setIsLoading(false)
    setQRData(null)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pt: 6,
          width: '100%',
          position: 'relative',
          background: 'rgba(70, 75, 85, 0.51)'
        }}
      >
        <Typography color="white" textAlign="center" width={'100%'}>
          Scan QR code
        </Typography>
        <Box
          sx={{ position: 'absolute', right: '20px' }}
          onClick={() => router.back()}
        >
          <Image src="/close.svg" width="24px" height="24px" alt="close" />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(70, 75, 85, 0.51)'
        }}
      >
        <Box sx={{ opacity: 0.6 }}>
          <Image
            src="/QR-animation.gif"
            width="327px"
            height="327px"
            alt="animation"
          />
        </Box>
        <Box sx={{ width: '276px', height: '276px', position: 'absolute' }}>
          <QrReader
            constraints={{ facingMode: 'environment' }}
            scanDelay={1000}
            onResult={result => {
              console.log('what', result)
              onScan(result)
            }}
          />
        </Box>
      </Box>
      <NotificationModal
        isOpen={isSuccessModalOpen}
        closeModal={() => setIsSuccessModalOpen(false)}
        message={message}
        isSuccess={isSuccess}
      />
      <SelectionModal
        isOpen={isSelectionModalOpen}
        authenticateWithNFT={authenticateWithNFT}
        closeModal={() => setIsSelectionModalOpen(false)}
        nftSelection={nftSelection}
      />
    </>
  )
}
