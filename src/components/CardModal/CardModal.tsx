import React, { useEffect, useState } from 'react';
import { CardData } from '../../types/CardData';
import FullCard from '../FullCard/FullCard';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type CardModalProps = {
  url: string;
};

function CardModal({ url }: CardModalProps) {
  const [isPending, setIsPending] = useState(true);
  const [card, setCard] = useState<CardData | null>(null);
  const [errorMessage, setErrorMessage] = useState({ isVisible: false, message: '' });

  useEffect(() => {
    const fetchCard = async () => {
      setIsPending(true);
      setCard(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('no card matching search value');
        const cardData = await response.json();
        setIsPending(false);
        setCard(cardData);
      } catch (err) {
        setIsPending(false);
        setCard(null);
        setErrorMessage({
          isVisible: true,
          message: err instanceof Error ? err.message : String(err),
        });
      }
    };
    fetchCard();
  }, [url]);

  return ReactDOM.createPortal(
    <>
      <Modal>
        {isPending && <ProgressIndicator />}
        {card && <FullCard card={card} />}
        {errorMessage.isVisible && <ErrorMessage message={errorMessage.message} />}
      </Modal>
    </>,
    document.body
  );
}

export default CardModal;
