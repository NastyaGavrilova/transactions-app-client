import React from 'react';
import * as transactionsSelector from '../../store/selectors/transactions.selector';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import { Wrapper, PaginationStyled } from './Pagination.styled';

export default function Pagination({
  isMobile,
  currentPage,
  pageItemsLimit,
  handleCurrentPageChange,
}) {
  const handleChangePage = (_, num) => {
    // dispatch(setPageOption(num));
    handleCurrentPageChange(num);
  };

  const totalCount = Math.ceil(
    useSelector(transactionsSelector.getTransactionsCount) / pageItemsLimit,
  );

  return (
    <Wrapper>
      <Stack spacing={2}>
        <PaginationStyled
          size={isMobile ? 'small' : 'large'}
          // size={'large'}
          count={totalCount}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          onChange={handleChangePage}
          page={currentPage}
          color={currentPage ? 'primary' : 'secondary'}
        />
      </Stack>
    </Wrapper>
  );
}
