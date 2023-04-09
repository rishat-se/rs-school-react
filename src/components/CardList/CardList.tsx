import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardList.css';
import { CardData } from '../../types/CardData';
import CardModal from '../CardModal/CardModal';
import { hideModalContext } from './hideModalContext';

type CardListProps = {
  cards: CardData[];
};

function CardList({ cards }: CardListProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  function showModal(url: string) {
    setIsModalVisible(true);
    setModalUrl(url);
  }

  function hideModal(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    setIsModalVisible(false);
    setModalUrl('');
  }

  return (
    <div>
      <ul className="card-list" aria-label="card-list">
        {cards.map((item) => (
          <Card key={item.id} card={item} handleCardClick={showModal} />
        ))}
      </ul>
      <hideModalContext.Provider value={hideModal}>
        {isModalVisible && <CardModal url={modalUrl} />}
      </hideModalContext.Provider>
    </div>
  );
}

export default CardList;
