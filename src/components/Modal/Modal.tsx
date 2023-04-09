import React, { ReactNode, useContext } from 'react';
import './Modal.css';
import { hideModalContext } from '../CardList/hideModalContext';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const hideModal = useContext(hideModalContext);
  return (
    <div onClick={hideModal} className="modal-background">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <button type="button" onClick={hideModal} className="close-btn">
          {'\u2716'}
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
