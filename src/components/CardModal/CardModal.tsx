import React from 'react';
import FullCard from '../FullCard/FullCard';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useGetByIdQuery } from '../../services/rickandmortyApi';
import { getErrMessage } from '../../helpers/getErrMessage';

type CardModalProps = {
  id: string;
};

function CardModal({ id }: CardModalProps) {
  const { data: card, isFetching, isError, error } = useGetByIdQuery(id);
  const errMessage = getErrMessage(error);

  return ReactDOM.createPortal(
    <>
      <Modal>
        {isFetching && <ProgressIndicator />}
        {card && <FullCard card={card} />}
        {isError && errMessage && <ErrorMessage message={errMessage} />}
      </Modal>
    </>,
    document.body
  );
}

export default CardModal;
