import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';


const App = inject('Store')(observer(({ Store }) => {
  const { items, itemsCount } = Store;

  const [inputText, setInputText ] = useState('');

  function handleChange(evt) {
    setInputText(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (inputText.length) {
      Store.addItem(inputText);
      setInputText('');
    }
  };

  function handleCancel() {
    setInputText('');
  }

  return (
    <div className="App">
      <header className="App-header">
           <h2>React Mobx Boilerplate</h2>
           <hr/>
           <form onSubmit={handleSubmit}>
             <label htmlFor="Add Item">
               <input type="text" value={inputText} onChange={handleChange} />
             </label>
             <input type="submit" value='Add Item' disabled={!inputText} />
            <input type="button" value='Cancel'  onClick={handleCancel} />
           </form>
           <ul>
            {items.map((item, i) => (<li key={i}>{item}</li>))}
           </ul>
           <p>a total of {itemsCount}</p>
         </header>
       </div>
  );
}));

export default App;
