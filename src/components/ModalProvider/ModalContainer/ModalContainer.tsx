import React from 'react';
import { createPortal } from 'react-dom';
import AddEventForm from 'components/AddEventForm/AddEventForm';

import styles from './ModalContainer.module.sass';

const ModalContainer = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return createPortal(
    <div
      className={`${styles.modalWrapper} ${
        isOpen ? styles['open'] : styles['close']
      }`}
    >
      {isOpen && <AddEventForm closeModal={closeModal} />}
    </div>,
    document.body
  );
};

export default ModalContainer;
