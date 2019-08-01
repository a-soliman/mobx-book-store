import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './components/Header';
import styles from './App.css';


const App = inject('Store')(observer(({ Store }) => {
  return (
    <main>
      <Header />
    </main>
  );
}));

export default App;
