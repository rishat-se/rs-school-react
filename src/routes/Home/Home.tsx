import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { API_URL } from '../../constants/constants';
import { CardData } from '../../types/CardData';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import Modal from '../../components/Modal/Modal';
import { hideModalContext } from '../../components/CardList/hideModalContext';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/searchValueSlice';

function Home() {
  // const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [cards, setCards] = useState<CardData[] | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState({ isVisible: false, message: '' });
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCards = async () => {
      setIsPending(true);
      setCards(null);
      try {
        const response = await fetch(`${API_URL}/?name=${searchValue}`);
        if (!response.ok) throw new Error('no cards matching search value');
        const { results } = await response.json();
        setIsPending(false);
        setCards(results);
      } catch (err) {
        setIsPending(false);
        setCards(null);
        setErrorMessage({
          isVisible: true,
          message: err instanceof Error ? err.message : String(err),
        });
        setTimeout(() => {
          setErrorMessage({ isVisible: false, message: '' });
        }, 3000);
      }
    };
    fetchCards();
  }, [searchValue]);

  function hideError() {
    setErrorMessage({ isVisible: false, message: '' });
  }

  function handleSearchValueSubmit(newSearchValue: string) {
    dispatch(setSearchValue(newSearchValue));
    localStorage.setItem('searchValue', newSearchValue);
  }

  return (
    <div>
      <SearchBar searchValue={searchValue} onSearchValueSubmit={handleSearchValueSubmit} />
      {isPending && <ProgressIndicator />}
      {cards && <CardList cards={cards} />}
      {errorMessage.isVisible && (
        <hideModalContext.Provider value={hideError}>
          <Modal>
            <ErrorMessage message={errorMessage.message} />
          </Modal>
        </hideModalContext.Provider>
      )}
    </div>
  );
}

export default Home;
