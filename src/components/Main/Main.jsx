import React from 'react';
import SearchFilter from '../SearchFilter/SearchFilter';
import Table from '../Table/Table';
import './_main.scss';
const Main = () => {
  return (
    <main className="c-main">
      <div className="c-main__wrapper">
        <section className="c-main__container">
          <div className="c-main__container-wrapper">
            <SearchFilter />
            <Table />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
