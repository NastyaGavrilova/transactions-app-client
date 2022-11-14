import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectInput from '../../elements/SelectInput/SelectInput';
import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';
import * as transactionsSelector from '../../store/selectors/transactions.selector';
import * as transactionsService from '../../store/services/transactions.service';
import {
  setFilterOption,
  setSearchQuery as setQuery,
} from '../../store/slices/transactions.slice';
import './_searchFilter.scss';
let idCounter = 0;
const getInitialValues = obj => {
  return obj.map(value => {
    return {
      id: idCounter++,
      label: value,
    };
  });
};
const SearchFilter = () => {
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const currentPage = useSelector(transactionsSelector.getCurrentPage);
  const pageItemsLimit = useSelector(transactionsSelector.getTransactionsLimit);
  const options = [
    'Sender Address',
    "Recipient's address",
    'Transaction ID',
    'Block Number',
  ];

  const handleSearchChange = e => {
    setSearchQuery(e.target.value.trim());
    dispatch(setQuery(e.target.value.trim()));
  };

  const handleFilterOptionChange = e => {
    if (e.target.value === 'Sender Address') {
      setFilter('senderAddress');
    } else if (e.target.value === "Recipient's address") {
      setFilter('recipientsAddress');
    } else if (e.target.value === 'Transaction ID') {
      setFilter('transactionId');
    } else if (e.target.value === 'Block Number') {
      setFilter('blockNumber');
    }
    dispatch(setFilterOption(e.target.value));
  };
  const onSearch = searchTerm => {
    if (searchTerm === 'Sender Address') {
      setFilter('senderAddress');
    } else if (searchTerm === "Recipient's address") {
      setFilter('recipientsAddress');
    } else if (searchTerm === 'Transaction ID') {
      setFilter('transactionId');
    } else if (searchTerm === 'Block Number') {
      setFilter('blockNumber');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (filter === 'blockNumber' && searchQuery) {
      dispatch(
        transactionsService.getTransactionsByBlockNumber({
          filter,
          searchQuery,
          currentPage,
          pageItemsLimit,
        }),
      );
    } else if (filter !== 'blockNumber' && searchQuery) {
      dispatch(
        transactionsService.getTransactionByFilter({
          filter,
          searchQuery,
          currentPage,
          pageItemsLimit,
        }),
      );

      setSearchQuery('');
    }

    return;
  };
  return (
    <form className="c-form" onSubmit={e => handleSubmit(e)}>
      <div className="c-form__wrapper">
        <input
          type={'text'}
          className="c-search__input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="c-search__divider"></div>
        <SelectInput
          value={filter}
          items={getInitialValues(options)}
          onChange={handleFilterOptionChange}
          onSearch={onSearch}
        />
      </div>
      <button className="c-form__button" type={'submit'}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchFilter;
