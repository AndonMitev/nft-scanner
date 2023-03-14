import Modal from 'react-modal'

import styles from './Modal.module.scss'

export interface ModalComponentProps extends Modal.Props {
  afterOpen?: Modal.Props['onAfterOpen'] | null
  closeModal: Modal.Props['onRequestClose']
  children: JSX.Element
}

export const ModalComponent: React.VFC<ModalComponentProps> = ({
  isOpen,
  afterOpen,
  closeModal,
  children
}) => {
  if (!isOpen) return null

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpen || undefined}
      onRequestClose={closeModal}
      overlayClassName={styles.Overlay}
      className={styles.Modal}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}
