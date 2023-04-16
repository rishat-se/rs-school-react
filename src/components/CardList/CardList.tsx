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
  const [modalId, setModalId] = useState('1');

  function showModal(id: string) {
    setIsModalVisible(true);
    setModalId(id);
  }

  function hideModal() {
    setIsModalVisible(false);
    setModalId('1');
  }

  return (
    <div>
      <ul className="card-list" aria-label="card-list">
        {cards.map((item) => (
          <Card key={item.id} card={item} handleCardClick={showModal} />
        ))}
      </ul>
      <hideModalContext.Provider value={hideModal}>
        {isModalVisible && <CardModal id={modalId} />}
      </hideModalContext.Provider>
    </div>
  );
}

export default CardList;
