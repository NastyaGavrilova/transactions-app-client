import React from 'react';
import './_tableRow.scss';
import convertDate from '../../utils/convertDate';
import weiToEth from '../../utils/weiToEth';
const TableRow = ({ item }, props) => {
  const {
    blockNumber,
    transactionId,
    senderAddress,
    recipientsAddress,
    blockConfirmations,
    value,
    date,
    transactionFee,
  } = item;
  return (
    <tr key={`${transactionId}`} className={`c-table-body__row`}>
      <th className={`c-table-body__cell c-table-body__cell-0`}>
        {blockNumber}
      </th>
      <th className={`c-table-body__cell c-table-body__cell-1`}>
        <a href={`https://etherscan.io/tx/${transactionId}`}>{transactionId}</a>
      </th>
      <th className={`c-table-body__cell c-table-body__cell-2`}>
        {senderAddress}
      </th>
      <th className={`c-table-body__cell c-table-body__cell-3`}>
        {recipientsAddress}
      </th>
      <th className={`c-table-body__cell c-table-body__cell-4`}>
        {blockConfirmations}
      </th>
      <th className={`c-table-body__cell c-table-body__cell-5`}>
        {convertDate(date)}
      </th>
      <th className={`c-table-body__cell c-table-body__cell-6`}>
        {weiToEth(value)}
      </th>
      <th className={`c-table-body__cell c-table-body__cell-7`}>
        {transactionFee}
      </th>
    </tr>
  );
};

export default TableRow;
