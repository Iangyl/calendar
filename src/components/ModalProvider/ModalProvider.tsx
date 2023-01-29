import React, { createContext, useContext, useCallback, useState } from 'react';
import { IModalContext } from './ModalProvider.types';
import ModalContainer from './ModalContainer/ModalContainer';

const ModalContext = createContext<IModalContext | null>(null);

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const addModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <ModalContext.Provider value={{ addModal, closeModal }}>
      <ModalContainer isOpen={isOpen} closeModal={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext) as IModalContext;
}

export default ModalProvider;
