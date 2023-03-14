import { toast } from 'react-toastify'
import Image from 'next/image'

interface NotificationProps {
  title: string
  description?: string
  actionText?: string
  action?: () => void
}

const Notification: React.VFC<NotificationProps> = ({
  title,
  description,
  actionText,
  action
}) => {
  return (
    <div className="notification-content">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {actionText && <button onClick={action}>{actionText}</button>}
    </div>
  )
}

export const error = (msg: NotificationProps, options = {}) => {
  toast.error(<Notification {...msg} />, {
    ...options,
    icon: () => <Image src="/error.svg" width="24px" height="24px" alt="icon" />
  })
}

export const success = (msg: NotificationProps, options = {}) => {
  toast.success(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src={'/success.png'} width="24px" height="24px" alt="icon" />
    )
  })
}

export const warn = (msg: NotificationProps, options = {}) => {
  toast.warn(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src={'/warning.png'} width="24px" height="24px" alt="icon" />
    )
  })
}

export const info = (msg: NotificationProps, options = {}) => {
  toast.info(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src={'/info.pns'} width="24px" height="24px" alt="icon" />
    )
  })
}
