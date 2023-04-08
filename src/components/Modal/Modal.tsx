import React, { ReactNode, useContext } from 'react';
import './Modal.css';
import { hideModalContext } from '../CardList/hideModalContext';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const hideModal = useContext(hideModalContext);

  return (
    <div onClick={(e) => hideModal(e)} className="modal-background">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <button type="button" onClick={(e) => hideModal(e)} className="close-btn">
          {'\u2716'}
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
