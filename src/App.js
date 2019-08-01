import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';
import SearchField from './components/SearchField';
import styles from './App.css';


const App = inject('Store')(observer(({ Store }) => {
  const { term, setSearchTerm, search, state, results, totalCount } = Store;

  function changeHandler(evt) {
    setSearchTerm(evt.target.value);
  }

  function submitHandler() {
    search();
  }

  return (
    <main>
      <Header />
      <SearchField
        value={term}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
    </main>
  );
}));

export default App;
