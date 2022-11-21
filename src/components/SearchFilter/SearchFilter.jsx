import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';
import { ReactComponent as Chevron } from '../../icons/chevron.svg';
import {
  searchTransactions,
  selectPaginationPage,
} from '../../store/actions/transactions.action';
import { getTransactions } from '../../store/operations/transactions.operations';
import { SelectStyled } from '../../elements/SelectInput/SelectInput.styled';
import MenuItem from '@mui/material/MenuItem';
import './_searchFilter.scss';
const SearchFilter = () => {
  const options = [
    'Sender Address',
    "Recipient's address",
    'Transaction ID',
    'Block Number',
  ];

  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions('', '', 1, 14));
  }, [dispatch]);

  const onHandleChange = e => {
    const { name, value } = e.target;
    dispatch(searchTransactions({ name, value }));
  };

  const onHandleSearch = e => {
    const { inputValue, paginationPage } = search;
    e.preventDefault();

    dispatch(
      getTransactions(
        inputValue.searchValue,
        inputValue.selectValue,
        paginationPage,
        14,
      ),
    );
    dispatch(selectPaginationPage(1));
  };
  return (
    <form className="c-form" onSubmit={onHandleSearch}>
      <div className="c-form__wrapper">
        <input
          type={'text'}
          className="c-search__input"
          name="searchValue"
          placeholder="Search..."
          value={search.inputValue.searchValue}
          onChange={onHandleChange}
        />
        <div className="c-search__divider"></div>
        <SelectStyled
          variant="standard"
          displayEmpty
          placeholder="Address"
          disableUnderline
          IconComponent={Chevron}
          value={search.inputValue.selectValue}
          name={'selectValue'}
          onChange={onHandleChange}
        >
          <MenuItem value={''} disabled>
            Address
          </MenuItem>
          <MenuItem value={'senderAddress'}>Sender address</MenuItem>
          <MenuItem value={'recipientsAddress'}>Recipient address</MenuItem>
          <MenuItem value={'transactionId'}> Transaction id</MenuItem>
          <MenuItem value={'blockNumber'}>Block number</MenuItem>
        </SelectStyled>
      </div>
      <button className="c-form__button" type={'submit'}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchFilter;
