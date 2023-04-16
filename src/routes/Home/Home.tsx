import React from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import Modal from '../../components/Modal/Modal';
import { hideModalContext } from '../../components/CardList/hideModalContext';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/searchValueSlice';
import { useSearchByNameQuery } from '../../services/rickandmortyApi';
import { CharactersDTO } from '../../types/CharactersDTO';
import { CardData } from '../../types/CardData';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { getErrMessage } from '../../helpers/getErrMessage';

function Home() {
  const searchValue = useSelector((state: RootState) => state.searchValue.value);
  const dispatch = useDispatch();

  const { data, isFetching, isError, error } = useSearchByNameQuery(searchValue);
  const cards = isError || isFetching ? null : data?.results;
  const errMessage = getErrMessage(error);

  function handleSearchValueSubmit(newSearchValue: string) {
    dispatch(setSearchValue(newSearchValue));
    localStorage.setItem('searchValue', newSearchValue);
  }

  return (
    <div>
      <SearchBar searchValue={searchValue} onSearchValueSubmit={handleSearchValueSubmit} />
      {isFetching && <ProgressIndicator />}
      {cards && <CardList cards={cards} />}
      {isError && errMessage && <ErrorMessage message={errMessage} />}
    </div>
  );
}

export default Home;
