import React from 'react';
import SearchFilter from '../SearchFilter/SearchFilter';
import Table from '../Table/Table';
import './_main.scss';
const Main = () => {
  return (
    <main className="c-main">
      <div className="c-main__wrapper">
        <SearchFilter />
        <Table />
      </div>
    </main>
  );
};

export default Main;
