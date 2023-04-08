import React, { useEffect, useState } from 'react';
import { CardData } from '../../types/CardData';
import FullCard from '../FullCard/FullCard';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';

type CardModalProps = {
  url: string;
};

function CardModal({ url }: CardModalProps) {
  const [isPending, setIsPending] = useState(true);
  const [card, setCard] = useState<CardData | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('no cards matching search value');
        return response.json();
      })
      .then((data) => {
        setIsPending(false);
        setCard(data);
      })
      .catch((err) => {
        setIsPending(false);
        setCard(null);
        console.log(err.message);
      });
  }, [url]);

  return ReactDOM.createPortal(
    <>
      <Modal>
        {isPending && <span>Loading...</span>}
        {card && <FullCard card={card} />}
      </Modal>
    </>,
    document.body
  );
}

export default CardModal;
