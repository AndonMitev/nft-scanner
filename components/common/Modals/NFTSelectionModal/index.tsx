import {
  Box,
  Typography,
  Button,
  Input,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Checkbox
} from '@mui/material'

import { ModalComponent } from 'components'
import { useState } from 'react'

const EVENT_NAME = 'Water Festival'

interface INFT {
  contractAddress: string
  tokenId: string
  name: string
  ticketType: string
}

export const SelectionModal = ({
  isOpen,
  nftSelection,
  authenticateWithNFT,
  closeModal
}: {
  isOpen: boolean
  nftSelection: Array<INFT>
  authenticateWithNFT: (nft: {
    contractAddress: string
    tokenId: string
  }) => void
  closeModal: () => void
}) => {
  const [nftToUse, setNftToUse] = useState<{
    contractAddress: string
    tokenId: string
  }>()

  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal} afterOpen={null}>
      <Box
        sx={{
          maxWidth: '325px',
          minWidth: '250px',
          position: 'relative',
          p: '24px 18px'
        }}
      >
        <Typography
          sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold' }}
        >
          {EVENT_NAME}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 4
          }}
        >
          {nftSelection.map(
            ({ contractAddress, name, tokenId, ticketType }) => (
              <Box
                key={tokenId}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Checkbox
                  checked={tokenId === nftToUse?.tokenId}
                  onChange={() => setNftToUse({ contractAddress, tokenId })}
                />
                <Box onClick={() => setNftToUse({ contractAddress, tokenId })}>
                  <NftDetail propName="Name" value={name} />
                  <NftDetail propName="TokenId" value={tokenId} />
                  <NftDetail propName="Ticket Type" value={ticketType} />
                </Box>
              </Box>
            )
          )}
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            height: '44px',
            mt: 4
          }}
          disabled={!nftToUse}
          onClick={() => {
            authenticateWithNFT(nftToUse!)
            closeModal()
          }}
        >
          Submit
        </Button>
      </Box>
    </ModalComponent>
  )
}

const NftDetail = ({
  propName,
  value
}: {
  propName: string
  value: string
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Typography sx={{ fontWeight: 'bold ' }}>{propName}:</Typography>
      <Typography>{value}</Typography>
    </Box>
  )
}
