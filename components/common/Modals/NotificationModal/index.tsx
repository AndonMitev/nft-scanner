import { Box, Typography, CircularProgress, Button } from '@mui/material'
import Image from 'next/image'

import { ModalComponent } from 'components'

interface INotificationModalProps {
  isOpen: boolean
  closeModal: () => void
  message: string
  isSuccess: boolean
}

export const NotificationModal: React.FC<INotificationModalProps> = ({
  isOpen,
  closeModal,
  message,
  isSuccess
}) => {
  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal} afterOpen={null}>
      <Box
        sx={{
          maxWidth: '325px',
          position: 'relative',
          p: '24px 18px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            src={isSuccess ? '/success-code.svg' : '/error-code.svg'}
            width="64px"
            height="64px"
            alt="natification"
          />
        </Box>
        <Typography fontSize="18px" fontWeight="600" textAlign="center" mt={4}>
          {isSuccess ? '#Successfully authenticated' : 'Failed authentication'}
        </Typography>
        <Typography variant="body2" textAlign="center" mt={1.5}>
          {message}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: '44px',
            mt: 4
          }}
          onClick={closeModal}
        >
          Back to QR code scanner
        </Button>
      </Box>
    </ModalComponent>
  )
}
